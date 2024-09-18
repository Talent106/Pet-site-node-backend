var mongooes = require('mongoose');

const { Schema } = mongooes;

const UserSchema = new Schema({
    first_name: {
        type: String
    },

    last_name: {
        type: String
    },

    email: {
        type: String,
        require: true
    },

    password: {
        type: String,
        require: true
    }
});

const User = mongooes.model('User', UserSchema);

module.exports = User;