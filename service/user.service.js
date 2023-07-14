const User = require("../models/user.model");

exports.userService = {
    async createUser(email, password) {
        const user = await User.create({ email, password });
        return user;
    },
    async findUserByEmail(email) {
        const user = await User.findOne({ email });
        return user;
    },
    async findUserById(id) {
        const user = await User.findById(id);
        return user;
    },
};


