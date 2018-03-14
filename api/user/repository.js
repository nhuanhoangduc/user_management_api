const UserModel = require('../../models/users');


const UserRepository = {};


UserRepository.getUsers = async function () {
    try {
        const users = await UserModel.find();
        return users;
    } catch (error) {
        console.log('User repository - Get users', error);
        throw error;
    }
};


UserRepository.getUser = async function (userId) {
    try {
        if (!userId) {
            return null;
        }

        const user = await UserModel.findOne({ _id: userId });
        return user;
    } catch (error) {
        console.log('User repository - Get user', error);
        throw error;
    }
};


UserRepository.createUser = async function (user) {
    try {
        // Check if user's name property doesn't exist
        if (!user.name) {
            throw new Error('Name doesn\'t not exist');
        }

        await UserModel.create(user);
    } catch (error) {
        console.log('User repository - Create user', error);
        throw error;
    }
};


UserRepository.updateUser = async function (userId, user) {
    try {
        // Check if user does not exist
        const existedUser = await UserRepository.getUser(userId);

        if (!existedUser) {
            throw new Error(`User with id ${userId} doesn't exist`);
        }

        await UserModel.update(
            { _id: userId },
            user
        );

        return user;
    } catch (error) {
        console.log('User repository - Update user', error);
        throw error;
    }
};


UserRepository.deleteUser = async function (userId) {
    try {
        // Check if user does not exist
        const existedUser = await UserRepository.getUser(userId);
        if (!existedUser) {
            throw new Error(`User with id ${userId} doesn't exist`);
        }

        await UserModel.remove(
            { _id: userId }
        );
    } catch (error) {
        console.log('User repository - Remove user', error);
        throw error;
    }
};


module.exports = UserRepository;
