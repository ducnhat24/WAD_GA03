const { PrismaClient } = require('@prisma/client');
const { generateAccessToken } = require('../middleware/JWTAction');

class UserService {
    constructor() {
        this.prisma = new PrismaClient();
    }

    async addUser(user) {
        try {
            const existingUser = await this.prisma.user.findUnique({
                where: { email: user.email },
            });

            if (existingUser) {
                return { msg: "User already exists" };
            }

            await this.prisma.user.create({
                data: {
                    name: user.username,
                    email: user.email,
                    password: user.password
                }
            });
            return { msg: "User added successfully" };
        } catch (error) {
            if (error.code === 'P2002') {
                console.error("Unique constraint failed: Email already exists.");
            } else {
                console.error("Error adding user:", error.message);
            }
            return { msg: "Error adding user" };
        }

    }

    async getUsers() {
        return await this.prisma.user.findMany();
    }

    async login(user) {
        const existingUser = await this.prisma.user.findFirst({
            where: {
                OR: [
                    { email: user.useraccount },
                    { name: user.useraccount }
                ],
                password: user.password
            }
        });

        if (!existingUser) {
            return { msg: "Invalid credentials" };
        }

        const payload = {
            id: existingUser.id,
            name: existingUser.name
        };

        return {
            token: generateAccessToken(payload),
            msg: "Login successful"
        };
    }
}

module.exports = UserService;