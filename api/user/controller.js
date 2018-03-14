const UserRepository = require('./repository');


const UserController = {};


UserController.getUsers = async (req, res, next) => {
    try {
        const users = await UserRepository.getUsers();
        res.json(users);
    } catch (error) {
        next(error);
    }
};


UserController.getUser = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const user = await UserRepository.getUser(userId);

        res.json(user);
    } catch (error) {
        next(error);
    }
};


UserController.createUser = async (req, res, next) => {
    try {
        const user = req.body;
        await UserRepository.createUser(user);

        res.json(user);
    } catch (error) {
        next(error);
    }
};


UserController.updateUser = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const user = req.body;
        await UserRepository.updateUser(userId, user);

        res.json(user);
    } catch (error) {
        next(error);
    }
};


UserController.deleteUser = async (req, res, next) => {
    try {
        const userId = req.params.id;
        await UserRepository.deleteUser(userId);

        res.sendStatus(200);
    } catch (error) {
        next(error);
    }
};


module.exports = UserController;