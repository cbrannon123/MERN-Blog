const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    body: String
}, {
    timestamps: true

});

const PostSchema = new Schema({
    title: String,
    body: String,
    upvotes: {type: Number, default: 0 },
    comments: [CommentSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Post', PostSchema);