


// >>>>>>>>>>>>>>>>Function declaration 
// function sayHell(){
//     console.log('function declartion');
/// >>>>>>>>>>>>>Anonymous Function expression

// let saHello = function(){
//     console.log('hello function expression');
// }

// sayHell();


// >>>>>>>>>>>>>>>>>> Named function expression

// let go = function wold() {
//     console.log('wold');
// }

// go();

// Hoisting

// Function declarationlarni filening tepasiga mustaqil ravishda


//>>>>>>>>>>>>>>>>>>>>>>>> Arguments

// function getArgs(a,b){
//     console.log(arguments);
//     for(const arguments of arguments){
//         console.log(arguments);
//     }
// }

// getArgs(true,33);


//>>>>>>>>>>>>>>> Rest Operator

// function getArgs(lastname,...args){
//     console.log(args);

//     args.forEach((value,idex,array) => {
//         console.log(value);
//     })

//     for(const arguments of arguments){
//         console.log(arguments);
//     }
// }

// getArgs('John','Wick','Smit','Swati');
// console.log(getArgr);

///>>>>>>>>>>>>>>>>>>ES6 (ES2015)
// Default value
// function getData(name,age,address,status = 'user'){
//     return {
//         name,
//         age,
//         address,
//         status
//     }
// }
// const john = getData('John',23,'Chilonzor','admin');
// console.log(john);
     


// const person = {
//     firsname: 'John',
//     lastname: 'Due',
//     age: 30,
//     get getFullName(){
//         return `Full name is ${this.firsname}, ${this.lastname}`
//     },

//     set getFullName(age){
//         console.log(age);
//         this.age = age;
//     }
// }

// person.getFullName = 11;
// console.log(person);

// // console.log(person.getFullName);


const person = {
        firsname: 'John',
        lastname: 'Due',
        age: 30,
        get getFullName(){
            return `Full name is ${this.firsname}, ${this.lastname}`
        },
    
    set getFullName(name){
        const e = new Error('Input type is not a string');
            if(typeof name === 'string'){
                const fullname = name.split(' ');
                this.firsname = fullname[0];
                this.lastname = fullname[1];
            }else {
                throw e;
                console.log(e);
            }
    }
}
    
// person.getFullName = 11;
// console.log(person);
// // console.log(person.getFullName);
    

// const student = {
//     name: 'John',
//     lastname: 'Due',
//     age: 12
// }
// console.log(student);


// const user = {
//     id: 
//     firsname,
//     lastname
//     emaail
//     status: (user,admin,moderator);
// }




// function calculateCircumference(radius) {
//     return 2 * Math.PI * radius;
//   }
  
//   console.log(Math.PI);
//   // expected output: 3.141592653589793
  
//   console.log(calculateCircumference(5));
//   // expected output: 62.83185307179586
  
// const fn = function () {};
// fn.prototype.myname = function () {
//     console.log('myname');
// };

// var obj = {
//     __proto__: fn.prototype
// };

// obj.myname(); // myname

 