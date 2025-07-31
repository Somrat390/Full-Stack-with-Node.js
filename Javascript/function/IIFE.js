// Immediately Invoked Function Expression(IIFE)

(function chai(){ // this one called named iffe
    console.log('DB Connected')
})();  //; work for ending a function here and last () means its call the function

(() => { //this one called unnamed iife
    console.log("DB connected two")
})()