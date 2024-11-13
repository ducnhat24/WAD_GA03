const UserService = require('../model/UserService');
const userService = new UserService();

class UserController {

    showSignup(req, res) {
        res.render('signup');
    }

    showLogin(req, res) {
        res.render('login');
    }

    async addUser(req, res) {
        const { username, email, password } = req.body;
        const status = await userService.addUser({ username, email, password });
        res.json(status);
    }

    getUsers(req, res) {
        const users = userService.getUsers();
        res.json(users);
    }
}

module.exports = new UserController;