const Product = require('../models/products');

exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product', { 
        pageTitle: 'Add product', 
        path: '/admin/add-product', 
        formsCSS: true, 
        productCSS: true, 
        activeAddProduct: true,
    });
};

exports.getAdminProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('admin/products', { 
            prods: products, 
            pageTitle: 'Admin products', 
            path: '/admin/products',
        });
    });
};

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();

    res.redirect('/');
};