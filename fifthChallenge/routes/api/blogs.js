const express = require('express')
const router = express.Router()
const { createBlog, index, show, respondWithBlog, respondWithBlogs } = require('../../controllers/api/blogs')


// POST
// Index /api/blogs
router.get('/', index, respondWithBlogs )

// Create /api/blogs
router.post('/', createBlog, respondWithBlog )

// Show /api/blogs/:id
router.get('/:id', show, respondWithBlog )

module.exports = router
