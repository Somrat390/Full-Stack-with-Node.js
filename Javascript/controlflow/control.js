const isUserloggedIn = true

if (isUserloggedIn){
    console.log("Welcome to the site")
}else{
    console.log("You are not logged in")
}

const balance = 1000
if (balance > 500) console.log("test")


const month = "march"
switch(month){
    case "jan":
        console.log("January")
    case "march":
        console.log("march")
        break;
    case "april":
        console.log("april")
        
    default:
        console.log("No month")
        
}

//nulish coalescing operatot(??)
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10

// val1 = undefined ?? 15

// val1 = null ?? 10 ?? 20

// console.log(val1)

// Ternary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80")