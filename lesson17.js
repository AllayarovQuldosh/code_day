
//  thingle threaded === One threaded === One thing at a time
// // Sync

// function foo(){
//     console.log('foo')
//     bar()
// }

// function bar(){
//     console.log('bar');
//     baz()
// }

// function baz(){
//     console.log('baz');
// }

// foo();



// // Async
// function timer(){
//     setTimeout(() => {
//         console.log('I am timer!');
//     }, 0)
// }

// // Microtask
// function asyncFunc(){
//     return Promise.resolve('I am asyncFunc');
// }


// timer()
// asyncFunc().then((v) => {
//     console.log(v);
// })

// process.nextTick()


// setImmediate(() => {
//     console.log('I am setImmediate');
// })


// //>>>>>>>>>>>>>> Function 
// // Function Declaration
// function main(){
//     return 'I am Main Function !!!'
// } 
// console.log(main);

// >>>>>> Function Expression
// //  Simple Function
//  let funcExpression = function(){
//      return 'I ma functionExpression'
//  }
// console.log(funcExpression);

// //  >>>>>>> Array Function
// let arrowFuncExpression = () => 'I am Function expression'.toUpperCase();
// console.log(arrowFuncExpression);

// let arrowCurlyExpression = () => {
//     return 'I ma Function expression'.toUpperCase();

// }
// console.log(arrowCurlyExpression);

// // >>>>>>>> Function expression
// const nextType = function(arr) {
//     return arr.map(function(v){
//         if(typeof v === 'string'){
//             return v.toUpperCase();
//         }
//         return v;
//     });
// }

// console.log(nextType(arr));




let arr = ['a','b','c',1,2,3,4,5,6,7];
// >>>>>>>>> Function declaration
// function nextType(arr){
//     return arr.map(function(v){
//         if(typeof v === 'string'){
//             return v.toUpperCase
//         }
//         return v;
//     })
// }
//  console.log(nextType);

// >>>>>>> Function expression
//  Solution 1
// const nextType = function(arr){
//     return arr.map(function(v) {
//         if(typeof v === 'string'){
//             return v.toUpperCase();
//         }
//         return v;
//     })
// }
// console.log(nextType(arr));
// >>>>>> Arraw Function
// Solution 2
// const nextType = (arr) => {
//     return arr.map((v) => {
//         if(typeof v === 'string') return v.toUpperCase();
//         return v;
//     })
// }
// console.log(nextType(arr));

// //  Solution 3
// const nextType = (arr) => arr.map((v)=> (typeof v === 'string' ? v.toUpperCase() : v));
// let a = nextType(arr);
// console.log(a);

