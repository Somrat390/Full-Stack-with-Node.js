const mysym = Symbol("Mykey1")

const JsUser = {   //object litteral and this is also a non-singleton object
    name : "Somrat",
    age : 22,
    [mysym] : mysym
}

// console.log(JsUser.name)
// console.log(JsUser["name"])

// console.log(typeof(JsUser[mysym]))
// console.log(typeof(mysym))


// JsUser.email = "somrat@gmail.com"
// Object.freeze(JsUser)
// JsUser.email = "som@gmail.com"
// console.log(JsUser)


// JsUser.gretting = function(){
//     console.log("Hello Js User ");
// }

// console.log(JsUser.gretting())

// JsUser.grettingTwo = function(){
//     console.log(`Hello JsUser ${this.name}`)
// }

// console.log(JsUser.grettingTwo())


//Object Declaration
const tinderuser = new Object()  //both are non singleton object
const gogleuser = {}

// console.log(tinderuser)
// console.log(gogleuser)

tinderuser.id = "123abc"
tinderuser.name = "Somrat"
tinderuser.isloggedIn = false

// console.log(tinderuser)

const regularUser = {
    email : "somrat@gmail.com",
    fullname : {
       firstname: "Somrat",
       lastname: "Sheikh"
    }
}

// console.log(regularUser.fullname.firstname)

// merging two obj using assign
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

// const obj = Object.assign({}, obj1, obj2)  //using {} is standard

console.log(obj)

// what is more distrubing to call the obj again and again so we can work on it by simple syntax

const course = {
    cousename : "Js"
}

const {cousename} = course //now we can access coursename without using course obj

// console.log(cousename)