var mongoose = require('mongoose');

const server_url = 'mongodb://127.0.0.1:27017/pet_db';

const connectDB = async () => {
    try {
        await mongoose.connect(server_url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(' mongodb connected... ');
    } catch (err) {
        console.error('MongoDB connection err', err.message);
        process.exit(1)
    }
};

module.exports = { connectDB };