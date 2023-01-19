/*Challenge 3
Create a function called map hat takes two inputs:
an array of numbers (a list of numbers)
a 'callback' function - a function that is applied to each element of the array (inside of the function 'map')
Have mapreturn a new array filled with numbers that are the result of using the 'callback' function on each element of the input array.
*/

// First param takes an arr, second param takes in the multiply by 2 function
function map(arr, multiplyByTwo){

// Use a for loop to go through the whole array
    for(let i = 0; i < arr.length; i++){

// console log every array element multiplied by 2
       console.log(multiplyByTwo(arr[i]))

    }
}

// Create a multiply by 2 function that will be called in map function
function multiplyByTwo(num){

// return number multiplied by 2
return num * 2
}

map([1,2,3,4,5], multiplyByTwo); //-> [2,4,6,8,10]
multiplyByTwo(1); //-> 2
multiplyByTwo(2); //-> 4
