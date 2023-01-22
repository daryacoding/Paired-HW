# Challenge One

**Navigator:** *Darya* <br />
**Driver:** *Josue* <br />
**SRC File:** 'first.js'

**Solution:**
```
    // Create a function addTwothat accepts one input and adds 2 to it.
    function addTwo(num) {
        // return the number plus 2
        return num + 2
    }
```

# Challenge Two

**Navigator:** *Josue* <br />
**Driver:** *Darya* <br />
**SRC File:** 'second.js'

## How We Solved It

For this problem we created a function that will return the input with an s concatenated.

**Solution:**
```
    function addS (char){
        // return input with a concatenation of s
        return char + 's'
    }
```

# Challenge Three

**Navigator:** *Darya* <br />
**Driver:** *Josue* <br />
**SRC File:** 'third.js'

## How We Solved It

we created a multiplyByTwo function that takes an input and returns a number multiplied by 2. The map function takes an array and the multiplyByTwo function. We used a for loop to go through the whole array and print each number in the array multiplied by two.

**Solution:**
```
    // First param takes an arr, second param takes in the multiply by 2 function
    function map(arr, multiplyByTwo){

    // Use a for loop to go through the whole array
    for(let i = 0; i < arr.length; i++){
    // console log every array element multiplied by 2
        console.log(multiplyByTwo(arr[i]))
        }
    }
```

# Challenge Four

**Navigator:** *Josue* <br />
**Driver:** *Darya* <br />
**SRC File:** 'four.js'

## How We Solved It

For this debugging problem we call the forEach method on the letters array. We corrected forEach(letters) and changed it to letters.forEach

**Solution:**
```
    let alphabet = '';
    const letters = ['a', 'b', 'c', 'd'];
    letters.forEach(function (char) {
        alphabet += char;
    });
```

# Challenge Five

**Navigator:** *Darya* <br />
**Driver:** *Josue* <br />
**SRC Directory:** '/fifthChallenge'

## How We Solved It

We created a back end server that didn't need a database. We used the mockBlog as the array. In our dataController for the index method we set res.locals.data.blogs as the mockBlog. In our create method we pushed the req.body onto the array, and for our show method instead of using findById, we accessed the index in the array that we received from the req.params.id.

```
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

```