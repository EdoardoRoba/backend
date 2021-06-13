const express = require("express")
const router = express.Router()
const Post = require("../models/Posts")

// router.get('/', (req, res) => {
//     res.send("holaa")
// })

router.get('/specific', (req, res) => {
    console.log("ciao")
})

router.get("/", async (req, res) => {
    try {
        //Find all the posts with model Post (find is a method of mongoose)
        const posts = await Post.find()
        res.json(posts)
    } catch (err) {
        res.json({ message: err })
    }
})

router.post('/', async (req, res) => {
    console.log(req.body)
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })
    try {
        const savedPost = await post.save()
        res.json(savedPost)
    } catch (err) {
        res.json({ message: err })
    }
    // post.save().then(data => {
    //     res.json(data)
    // }).catch(err => {
    //     res.json({
    //         message: err
    //     })
    // })

})

module.exports = router