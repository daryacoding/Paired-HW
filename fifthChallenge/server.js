const express = require('express')
const PORT = process.env.PORT || 3008

const app = express()

app.use(express.json())
app.use((req, res, next) => {
    res.locals.data = {}
    next()
})

app.use(express.static('public'))

app.use('/api/blogs', require('./routes/api/blogs'))

app.listen(PORT, () => {
    console.log(`I am listening on Port: ${PORT}`)
})
