const ProductService = require('../model/ProductService');
const productService = new ProductService();


class SiteController {
    showHome(req, res) {
        res.render('home');
    }

    showAboutUs(req, res) {
        res.render('about_us');
    }

    showContact(req, res) {
        res.render('contact');
    }

    showLogin(req, res) {
        res.render('login');
    }

    showSignup(req, res) {
        res.render('signup');
    }

    async showProduct(req, res) {
        const products = await productService.getAllProducts();
        console.log(products);
        res.render('product', { products });

    }

    showProductDetails(req, res) {
        res.render('product_details');
    }
}

module.exports = new SiteController;