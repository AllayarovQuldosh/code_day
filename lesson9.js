"use strict"
// c = 'hello';
// console.log(c);


// // >>>>>>>>>>>>>>>>Constructur functions
// function Person(name,age){
//     this.name = name;
//     this.age = age;
// }
// const num = new Person('John', 34);
// console.log(num);

//>>>>>>>>>>> this--bu ichida 3 ta amalni bajaradi
// 1. {} , new Object()
// 2. this = {}
// 3. return {}


// // >>>>>>>>>>>> Fuctory function 
// function createPerson(name,age){
//     return {
//         name,
//         age
//     }
// }
// const person2 = new createPerson('Bill',34);
// console.log(person2);


// function getthis(){
//     console.log(this);
//     return this === obj;
// }

// getthis();
// const obj = {
//     name: 'Sami',
//     age: 23,
//     getName: function(){
//         return obj;
//     },
//     getAge(){
//         getthis()
        
//         return obj.age;
//     },
//     checkThis(){
//         return obj === this;
//     },
//     getThis(arr){
//         //console.log(this);
//         const arrowFunction = () => {
//             console.log('This---> ',this);
//         }
//         arrowFunction()
//         //return this;
//     }
// }
// const arrowFunction = () => {
//     console.log(this);
// }

// arrowFunction();
// console.log(obj.getThis([1,2]));



// const getObjMethods = (obj) => Object.getOwnPropertyNames(obj).filter((value) => {
//     return typeof obj[value] === 'function'
// });

// const methods = getObjMethods(Array.prototype);
// console.log(methods);

// console.log(Object.prototype === {}.__proto__);

// >>>>>>>>>>>>>>>>>> Objects
// const obj = {
//     name: 'John'
// }
// function getName() {
//     return 'Wick'
// }
// const obj2 = {
//     lastname: 'Due'
// }
// obj2.__proto__ = obj;
// console.log(obj2.name);

// class Tiger {
//     constructor(speed){
//         this.speed = speed;
//     }
//     walk(){
//         return 'tiger is walking'
//     }
// }
// class Animal extends Tiger {
//     constructor(){
//         super(60)
//     }
//     run(){
//         console.log(this.speed);
//         return `'Animal is running =>' ${this.speed}`
//     }
// }
// const animal = new Animal();
// console.log(animal.run());

// const obj = {
//     getFullInfo(){
//         return {
//             name: this.name,
//             age: this.age
//         }
//     }
// };
// const obj3 = {
//     name: 'Samin',
//     age: 31
// }

// obj.__proto__ = obj3;
// console.log(obj.getFullInfo());

// const obj2 = new Object();
// console.log(obj2);
// console.log(obj2.__proto__);





// class User {
//     constructor(username,age,email,password,id){
//         this.username = username;
//         this.age = age;
//         this.email = email;
//         this.password = password;
//         this.id = id;
//     }
//     createUser(){
//         return {
//             id: this.id,
//             username : this.createUser(),
//             age: this.checkAge(),
//             email: this.checkEmail(),
//             password: this.checkPassword()
//         }
//     }


//     checkUserName(){
//         if(this.username.length < 2){
//             throw new Error('Username is  not valid !!!');
//         }
//         return this.username.toLowerCase();
//     }
//     checkAge(){
//         if(this.age < 6){
//             throw new Error('')
//         }
//     }
// }






// //redus
// // const num = numbers.redus


// const arr = [
//     {name: 'John',work: 'backend'},
//     {name: 'Wick',work: 'frontend'},
//     {name: 'Alix',work: 'android'},
//     {name: 'Due',work: 'backend'}
// ];
// function groupByKey(arr, keyField){
//     return arr.reduce((acc, obj)=>{
//         const key = (obj[keyField]);
//         if(!acc[key]){
//             acc[key] = [];
//         }
//         acc[key].push(obj);
//         console.log(acc);
//         return acc;
//     }, {})
// }

// console.log(groupByKey(arr,'work'));
