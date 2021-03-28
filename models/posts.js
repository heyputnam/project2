    const mongoose = require("mongoose");
    const Schema = mongoose.Schema;


    const postSchema = new Schema({
        body: String,
        song: String,
        mood: String,
        status: {
            type: String,
            default: 'public',
            enum: ['public', 'private'],
          },
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