const mongoose = require("mongoose")

// const PostSchema = mongoose.Schema({
//     title: String,
//     description: String,
//     chapters: {
//         title: String,
//         subtitle: String
//     },
//     price: Number,
//     date: Date
// })

const PostSchema = mongoose.Schema({
    title: String,
    description: String,
})

module.exports = mongoose.model('Posts', PostSchema);