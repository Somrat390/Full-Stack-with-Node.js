//for 

// for(let index = 0; index < 5; index++){
//     console.log(index)
// }

// const greetings = "hey"
// for(const greet of greetings){
//     console.log(`Each char is ${greet}`)
// }

// Maps

// const map = new Map()
// map.set('In','India')
// map.set('USA',"United state")
// console.log(map)

// for(const [key,value] of map){ //for in is not work in map
//     console.log(key,value)
// }

// const myobject = { 
//     js : "js",
//     swift : "swift",
//     rb : "rb"
// }

// for(const key in myobject){  //for of is not work in object
//     console.log(myobject[key])
// }

// for in - give the index of array and for of give the value
// const program = ['js','rubi']

// for(const key in program){
//     console.log(key)
//     console.log(program[key])
// }
// for(const key of program){
//     console.log(key)
// }


// for each loop

const program = ['js','rubi']

// program.forEach(function(item){console.log(item)})

// using arrow function
// program.forEach((item) => {console.log(item)})

// function printme(item){
//     console.log(item)
// }

// program.forEach(printme)

program.forEach((item,index,arr) => 
    {console.log(item,index,arr)
    })