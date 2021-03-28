    const mongoose = require("mongoose");
    const Schema = mongoose.Schema;


    const postSchema = new Schema({
        title: String,
        body: String,
        song: String,
        mood: String,
        createdAt: {
            type: Date,
            default: Date.now,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    })

    module.exports =  mongoose.model('Post', postSchema)