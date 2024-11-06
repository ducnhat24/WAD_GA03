const { PrismaClient } = require('@prisma/client');

class UserService {
    constructor() {
        this.prisma = new PrismaClient();
    }

    async addUser(user) {
        return await this.prisma.user.create({
            data: {
                name: user.username,
                email: user.email,
                password: user.password
            }
        });
    }

    async getUsers() {
        return await this.prisma.user.findMany();
    }
}

module.exports = UserService;