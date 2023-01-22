const express = require('express')
const router = express.Router()
const { createBlog, index, show, respondWithBlog, respondWithBlogs } = require('../../controllers/api/blogs')


// POST
// Index /api/blog
router.get('/', index, respondWithBlogs )

// Create /api/
router.post('/', createBlog, respondWithBlog )

// Show /api
router.get('/:id', show, respondWithBlog )

module.exports = router
