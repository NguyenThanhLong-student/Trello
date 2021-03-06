const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
    title: String,
    idBoard: { type: String, require: true},
    idAuthor: { type: String, require: true},
    listMember: {type: [String], default: []}
    },{ timestamps: true }
);

module.exports = mongoose.model('List',listSchema);