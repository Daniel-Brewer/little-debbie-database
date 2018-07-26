// function that creates snackCake
function createSnackCake(title,description,amount,topping,flavor,weight) {
let snackCake = {
 
        title: title,
        description: description,
        amount: amount,
        topping: topping,
        flavor: flavor,
        weight: weight
}
    return snackCake
}
// calling function in line 2 to create data

const cosmicBrownies = createSnackCake("Cosmic Brownies", "Delicious Chocolate Brownies", 12, "Candy coated chocolate nuggets", "Chocolate", 372)

const honeyBuns = createSnackCake("honeyBuns", "Delicious Chocolate Brownies", 12, "Candy coated chocolate nuggets", "Chocolate", 372)

// create variable to hold array of objects to be passed to storage
let snackCakes= [cosmicBrownies,honeyBuns]



// event listener function
function populateDB() {
// assigning data in sting form
const stringifiedDatabase = JSON.stringify(snackCakes)
localStorage.setItem("snackCakes", stringifiedDatabase)
}


// converting from string to data


    const databaseString = localStorage.getItem("snackCakes")

    // Use JSON.parse() to convert the string back into an object
    const data = JSON.parse(databaseString);
console.log(databaseString);
console.log(data);
 

