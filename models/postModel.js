const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
    {
       
        title: {
            type: String,
            required: true,
            trim: true
        },
        body: {
            type: String,
            required: true,
            // minLength: 300,
        },
        tags: {
            type : [String]
        },
        category :{
            type: mongoose.Schema.Types.ObjectId,
            ref:"category",
        },
        user:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"user"
        },
        likes:[{
            type: mongoose.Schema.Types.ObjectId,
            ref:"like"
       }],
        comments:[{
            type: mongoose.Schema.Types.ObjectId,
            ref:"comment"
        }],

    }
);

module.exports = mongoose.model("post",postSchema);
