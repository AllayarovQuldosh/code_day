
// >>>>>>>>>>>>>>>>>>>>>Symbol
// const sym1 = Symbol('Adim');
// const sym2 = Symbol('Adim');
// console.log(sym1 === sym2);


// const id = Symbol('name');
// const obj = {
//     id: '12123232ccxc',
//     name: 'Wick',
//     [id]: 'this is ID of obj'
// }
// console.log(obj);
// for(let key in obj){
//     console.log(key);
// }
 
// console.log(obj[id]);

// >>>>>>>>>>>>>>.Object property  configuration

// const obj = {
//     name: 'John',
//     age: 34
// }

// const desc = Object.getOwnPropertyDescriptors(obj,'name')
// // desc.writable = false;
// // delete obj.age;
 

// Object.defineProperty(obj, 'name');
// Object.defineProperties(obj,{
//     name: desc,
//     age: desc
// }) 
// console.log(obj);
// // console.log(desc);


// const id = Symbol();
// const obj = {
//     name: 'Wick', // uzgarmas qilish
//     age: 12,
//     address: 'Chilonzor',
//     [id]: 1
// }

// const nameDescr = {
//     writable: false
// }

// const ageDescr = {
//     configurable: false
// }

// const addressDescr = {
//     enumerable: false
// }

// const idDescriptor = {
//     writable: false,
//     configurable: false
// }

// console.log(obj);
// Object.defineProperties(obj, {
//     name: nameDescr,
//     age: ageDescr,
//     address: addressDescr,
//     [id]: idDescriptor
// });
// obj.name = 'Roma';
// // delete obj.age;
// obj[id] = 2;
// console.log(obj);

// >>>>>>>>>>>>>> Serter Getter
// const Joey = {
//     name: 'Jone Bill',
//     get getName(){
//         return  this.name;
//     },
//     set getName(name){
//         this.name = name;
//     },

//     get getname(){
//         return this.name;
//     },
//     set setName(name){
//         this.name = name;
//     }
// }

// console.log(Joey.getName);
// Joey.setName = 'Zemin Amil';
// console.log(Joey.getName);



// >>>>>>>>>>>>>>>>>[[Prototype]]

// const obj1 = {
//     firstname: 'Frank'
// }
// const obj2 = {
//     lastname: 'Bill'
// }
// const obj3 = {
//     firstname: 'Alix'
// }

// obj2.__proto__ = obj1;
// obj3.__proto__ = obj2;
// console.log(obj3.lastname);


// function Person(name,age){
//     this.name = name;
//     this.age = age;
//     this.getFullName = function(){
//         return 'Hello this is method';
//     }
// }
// Person.prototype.getFullName = function(){
//     return`${this.name} ${this.age}`;
// }
// console.log();
// const person = new Person('Villson', 12);
// console.log(person);
