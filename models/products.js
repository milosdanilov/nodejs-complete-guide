const products = [];

const path = require('path');
const root = require('../util/path');
const fs = require('fs');

const p = path.join(root, 'data', 'products.json');

const getProductsFromFile = (cb) => {
    const p = path.join(root, 'data', 'products.json');

    fs.readFile(p, (err, fileContent) => {
        if (err) {
            cb([]);
        } else {
            cb(JSON.parse(fileContent));
        }
    });
};

module.exports = class Product {
    constructor(t) {
        this.title = t;
    }

    save() {
        const p = path.join(root, 'data', 'products.json');

        getProductsFromFile((products) => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
    }

    static fetchAll(cb) {
        getProductsFromFile(cb);
    }
}