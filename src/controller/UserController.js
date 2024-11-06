const UserService = require('../model/UserService');
const userService = new UserService();

class UserController {
    constructor() {
        this.users = [];
    }

    addUser(req, res) {
        const { username, email, password } = req.body;
        userService.addUser({ username, email, password });
    }

    getUsers(req, res) {
        const users = userService.getUsers();
        res.json(users);
    }
}

module.exports = new UserController;