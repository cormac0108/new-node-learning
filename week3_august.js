
//pass by Value vs Pass By Reference.  sits in memory. 
//primitive data - pass by value. 
//object - pass by reference

//pass by value
let a = 5;
let b = 5;

const newFunc = () => {
    
}

b++;
console.log(a)
console.log(b);

//pass by reference  space in memory.  shelf in memory. save memory. 
let obj1 = {name: 'Yao', password: '123'};
let obj2 = obj1;

obj2.password = 'easypeasy'

console.log(obj1);
console.log(obj2)

var c = [1,2,3,4,5];
var d = c;
var g = [].concat(c);
d.push(187);
console.log(c)
console.log(g)

//we can clone an object. object, source. params.

let objNew = {a: 'a', b: 'b',c: {
    deep: 'try and copy me'
}}
let clone = Object.assign({}, objNew);
objNew.b = 5;
objNew.c.deep = 'hahaha'
console.log(clone)

// another way with spread operator. ...
let clone2 = {...objNew};
console.log(clone2);

objNew.c.deep = 'hahaha'
//super clone (deep clone) using json.
let superClone = JSON.parse(JSON.stringify(objNew))

//what if we have an object inside of an object? 
//shallow cloning - where we can only clone the first layer.  vs deep cloning.
// objNew.c.deep = 'hahaha'

console.log(superClone)


//type coercion? 
//use ===   its better. 
//NaN is weird. 

//ES7 ? easy. 2 additions. 

.includes()  //fro strings and arrays. 
'helllloooo'.includes('o')  //this will return true.  

const square = (x) => x**2   //exponential operator. 
const cube = (y) => y**3
//** for exponentials */

//es8 es2017

let obj = {
    username0: 'Santa',
    username1: 'Rudolf',
    username2: 'Mr.Grinch'
}

Object.keys(obj).forEach((key,index) => {
    console.log(key, obj[key]);
})
Object.values(obj).forEach((value) => {
    console.log(value);
})
Object.entries(obj).forEach(value => {
    console.log(value);
})

// key : value   --- property: value.  map() returns arrays. 
Object.entries(obj).map(value => {
    return value[1] + value[0].replace('username', ' ');
})

// async await in es8