const { User } = require('../models');

const createUser = async (req, res) => {
    if (!req.body.name)
        res.status(400).send('Name field is required');
    if (!req.body.email)
        res.status(400).send('Email field is required');
    if (!req.body.password)
        res.status(400).send('Password field is required');
    if (!req.body.confirmedPassword)
        res.status(400).send('confirmed Password field is required');

    if (req.body.confirmedPassword && req.body.password == req.body.confirmedPassword) {
        try {
            const user = await User.create(req.body);
            return res.status(201).json({
                user,
            });
        } catch (error) {
            return res.status(500).send(error.message);
        }
    } else {
        res.status(400).send('Passwords doesnt match');
    }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();

        return res.status(200).json({ users });
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findOne({
            where: { id: id }
        });
        if (user) {
            return res.status(200).json({ user });
        }
        return res.status(404).send('User with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const [updated] = await User.update(req.body, {
            where: { id: id }
        });
        if (updated) {
            const updatedUser = await User.findOne({ where: { id: id } });
            return res.status(200).json({ user: updatedUser });
        }
        throw new Error('User not found');
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await User.destroy({
            where: { id: id }
        });
        if (deleted) {
            return res.status(204).send("User deleted");
        }
        throw new Error("User not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
}