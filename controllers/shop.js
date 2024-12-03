const Product = require('../models/products');

exports.getIndex = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/index', { 
            prods: products, 
            pageTitle: 'Shop', 
            path: '/',
        });
    });
};

exports.getProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/product-list', { 
            prods: products, 
            pageTitle: 'All products', 
            path: '/products',
        });
    });
}

exports.getCart = (req, res, next) => {
    res.render('shop/cart', { 
        pageTitle: 'Your cart', 
        path: '/cart', 
    });
};

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', { 
        pageTitle: 'Checkout', 
        path: '/checkout',
    });
};
