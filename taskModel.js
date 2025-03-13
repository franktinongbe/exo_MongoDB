const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    id: {type:String, required: true},
    nom: {type: String, required:true},
    description: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('taskDB', taskSchema);
