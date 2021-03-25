const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const postSchema = new Schema({
    title: String,
    body: String,
    song: String,
    mood: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
     createdAt: {
        type: Date,
        default: Date.now,
    },
})

module.exports =  mongoose.model('Post', postSchema)