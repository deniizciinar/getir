const mongoose = require('mongoose');

const schema = mongoose.Schema({
    _id: {
        type: String
    },
    key: {
        type: String
    },
    createdAt: {
        type: Date
    },
    counts: {
        type: [Number]
    }
});
mongoose.Promise = global.Promise;
const Db = mongoose.model('record', schema);
module.exports = Db;