const arr = [0,1,2,3,4]

console.log(arr[0])

const myarr = arr

const myn1 = myarr.splice(1,3)
console.log(myn1)
console.log(myarr)

const arr1 = [4,5,6,7]

const mergearray = arr.concat(arr1)  /// this is a way to merge two array without copying one into another

console.log(mergearray)
