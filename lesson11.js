'use strict'

// const map = new Map(1, 'Bernart');

// map.set(1, 'Xon');
// // console.log(map);
// map.get(1);
// // console.log(map);
// map.has(1);
// console.log(map);
// map.size();
// console.log(map);

// onst obj = {
//     name: 'John',
//     map: 'Map'
// }c
// console.log(Object.entries(obj));
// // console.log(obj);
// const map = new Map(Object.entries(persons));

// const mapObj = new Map();
// mapObj.set(obj, 'this is object')
// console.log(mapObj);
// console.log(mapObj);

// const obj = {
//     name: 'Some',
//     map: 'Map'
// }
// // console.log(Object.entries(obj));
// const mapObj = new Map();
// // mapObj.set(obj, 'this is object');
// // console.log(mapObj);
// // console.log(mapObj);

// mapObj.set(1, 'Guido').set(2, true).set(true, 'Boolean').set(false, 'Boolean');
// console.log(mapObj);
// console.log(mapObj.get());
// const hasKey = mapObj.has(null);
// console.log(obj);
// // delete obj.map;
// // mapObj.delete(null);
// console.log(obj);
// // mapObj.clear();
// console.log(mapObj.size);
// console.log(mapObj);
// //
// console.log(mapObj.keys());
// //
// console.log(mapObj.values());
// //
// console.log(mapObj.entries());

// const map = new Map([
//     [1, true],
//     [null, null]
// ])
// const person = {
//     name: 'Ali',
//     age: 12,
//     address: 'Chilonzor',
//     phone: '+998901239090'
// }
// const newMapp = new Map(Object.entries(person));

// const johnObj = Object.fromEntries(map.entries());
// console.log(johnObj);
// console.log(newMapp);

// for(let iterable of map.entries()) {
//     console.log(iterable);
// }
// const iterable = Array.from(map);
// console.log(iterable);


// console.log(typeof map);


// Map can also use objects as keys.

/*
How Map compares keys
To test keys for equivalence, Map uses the algorithm SameValueZero. It is roughly the same as strict equality ===, but the difference is that NaN is considered equal to NaN. So NaN can be used as the key as well.

This algorithm can’t be changed or customized.
*/ 

/*
Chaining
Every map.set call returns the map itself, so we can “chain” the calls:
*/ 


/*
Iteration over Map
For looping over a map, there are 3 methods:

map.keys() – returns an iterable for keys,
map.values() – returns an iterable for values,
map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.
*/ 

// let recipeMap = new Map([
//     ['cucumber', 500],
//     ['tomatoes', 350],
//     ['onion', 50]
// ]);
// console.log(recipeMap);


/*
Object.fromEntries: Object from Map
We’ve just seen how to create Map from a plain object with Object.entries(obj).

There’s Object.fromEntries method that does the reverse: given an array of [key, value] pairs, it creates an object from them:
*/


/*
Set
A Set is a special type collection – “set of values” 
(without keys), where each value may occur only once.

Its main methods are:

new Set(iterable) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
set.add(value) – adds a value, returns the set itself.
set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
set.has(value) – returns true if the value exists in the set, otherwise false.
set.clear() – removes everything from the set.
set.size – is the elements count.
*/ 


// const arr = [1,3,4,5,6,7,5,43,2,3,4,34,3,3];
// const set = new Set(arr);
// const newSet = set.add(11);
// // const del = newSet.delete(34);
// const has = set.has(0);
// console.log(has);
// console.log(newSet.size);

// set.forEach((value) => {
//     console.log(value);
// });

// for(const number of set){
//     console.log(number);
// }
// const obj3 = {
//     name: 'Samin',
//     age: 11,
//     address: 'Chilonzor'
// }

// const set2 = new Set();
// console.log(set2);
// console.log(typeof set2);


// Iteration over Set
// We can loop over a set either with for..of or using forEach:


// const numbers = [45, 4, 9, 16, 25];

// let txt = "";
// numbers.forEach(myFunction);

// function myFunction(value) {
//   txt += value;
// }
// myFunction(numbers);
// console.log(myFunction(numbers));

// const cars = ["BMW", "Volvo", "Mini"];

// let text = "";
// for (let x of cars) {
//   text += x;
// };
// console.log(cars)









// const persons = [
//     {firstname : "Malcom", lastname: "Reynolds"},
//     {firstname : "Kaylee", lastname: "Frye"},
//     {firstname : "Jayne", lastname: "Cobb"}
//   ];
  
//   persons.map(getFullName);
  
//   function getFullName(item) {
//     return [item.firstname,item.lastname].join(" ");
//   }
// console.log(persons);const numbers = [65, 44, 12, 4];


// const newArr = numbers.map(myFunction)


 


























// const numbers = [4, 9, 16, 25];
// const newArr = numbers.map(Math.sqrt)
// console.log(newArr);