const mockBlog = require('../../mockBlog')


// Index
const index = async (req, res, next) => {
    try {
        res.locals.data.blogs = mockBlog
        console.log(res.locals.data.blogs)
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}
// create
const createBlog = async (req, res, next) => {
    try {
        mockBlog.push(req.body)
        res.locals.data.blog = mockBlog[mockBlog.length - 1]
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

// show
const show = async (req, res, next) => {
    try {
        const blog = mockBlog[req.params.id - 1]
        res.locals.data.blog = blog
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const respondWithBlog = async (req, res, next) => {
    res.json(res.locals.data.blog)
}

const respondWithBlogs = (req, res, next) => {
    res.json(res.locals.data.blog)
}
module.exports = {
    createBlog,
    index,
    show,
    respondWithBlog,
    respondWithBlogs
}
