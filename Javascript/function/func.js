function addTwoNumbers(num1, num2){
    let result = num1 + num2
    return result
}

const result = addTwoNumbers(4,5)

// console.log(result)

function loginUserMessage(username){
    console.log(`${username} just logged in`)
}

// loginUserMessage("Somrat")


function calcultePrice(val1,val2, ...num1){
    return num1
}

// console.log(calcultePrice(200,300,100,200,300))

const obj = {
    username : 'somrat',
    Price: 199
}

function handleobject(object){
    console.log(`User name is ${object.username} and price is ${object.Price}`)
}

handleobject(obj)