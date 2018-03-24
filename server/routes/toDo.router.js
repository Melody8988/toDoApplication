let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let toDoSchema = new Schema({
    description: {type: String, required: true },
    status: {type: Boolean, default: false}
});