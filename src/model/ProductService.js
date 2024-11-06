const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class ProductService {
    constructor() {
        this.prisma = new PrismaClient();
    }

    async getAllProducts() {
        try {
            const products = await prisma.product.findMany({
                select: {
                    id: true,
                    name: true,
                    price: true,
                    description: true,
                }
            });
            return products || [];
        } catch (error) {
            console.error(error);
            res.status(500).send("An error occurred while fetching products");
        }
    }

    getProducts() {
        return this.products;
    }
}

module.exports = ProductService;