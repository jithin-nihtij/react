let array1 = [1,2,3];
let array2 = [2,5,6];
let n = [...array1,...array2]

console.log(n)

let obj1 = {a:5,b:4}
let obj2 = {c:6,d:2}

let newObj = {...obj1,...obj2}
console.log(newObj)