
// >>>>>>>>>>>>> setTimeout  and 


// function sayHi(value){
//     console.log('Hello ',value);
// }
// // console.log('timer');
// setTimeout(sayHi, 2000,'john');

//  setTimeout(() => {
//      console.log('I am 1500');
//      console.timeEnd('timer-1500');
//  },1500);
//  console.log('Hello I will run first !!!');
  


//  console.time('timer-1000');
//  setTimeout(()=>{
//      console.log('I am 1000');
//      console.timeEnd('timer-1000');
//  },1000);

//  console.time('timer-2000');
//  setTimeout(()=>{
//      console.log('I am 2000');
//      console.timeEnd('timer-2000');
//  },2000);

//  console.timeEnd('start');


// console.time('timer-5000');
// showTimeAfter(() => {
//     console.log('I am Start.....');
//     console.timeEnd('timer-5000');

    
// },5000);

// function showTimeAfter(number){
//     console.log('I am start',new Date );
//     setTimeout(()=>{console.log('I am finsh',new Date )},number);
// }
// showTimeAfter(5000);

 

// function showIntervalAfter(every,after,name){
//     console.log('I start',new Date);
//     const a = setInterval(()=>{
//         console.log('I finsh TSH',name);
//     },1000);
//     setTimeout(() => {
//         clearInterval(a)
//     },after);
// }
// // showIntervalAfter(1000,5000,'Tinch');

// function after(time){
//     setTimeout(() => {
//         console.log('i am running after ', + time);
//     }, time);
// }

// // after(2000);



//  >>>>>>>>>>>>> Promise

// const promise = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log('it is running');
//         resolve('new music is released !!!');
//         //reject('Error);
//     }, 5000);
// });

// promise.then((value)=>{
//     console.log(value);
//     after(2000);
// }), (error)=>{
//     console.error(error);
// // }

// const pr = new Promise((res,rej) => {
//     function him(time){
//         setTimeout(() => {
//             res('secund 3000');
//             // console.log('Hello World !!!');
//         },time);
//     }
//     him(3000)
// })
// console.log(pr);
// pr
// .finally(()=>{
//     console.log('it is finall');
// })
// .then((value) => {
//     console.log(value);
//     after(3000);
//     setTimeout(() => {
//         res('secund 3000');
//         // console.log('secund  3000');
//     }, 3000);
// })
// .then((value) => {
//     console.log(value);
//     after(1000);
//     setTimeout(() => {
//         res('secund 1000');
//         // console.time('secund 1000');
//     },1000);
// })

// function second(time){
//     setTimeout(() => {
//         console.log('I am ' + time);
//         console.timeEnd('timer');
//     }, time);
// }

// // console.log('timer');
// const pr = new Promise((res,rej) => {
//     setTimeout(() => {
//         res('I am 3000');
//     }, 3000);
// })

// pr.then((value) => {
//     console.log(value);
//     second(1000);
//     return new Promise((res,rej) => {
//         setTimeout(() => {
//             res('I am waiting 5000')
//         }, 5000);
//     })
// })



// const timer = Date.now();
// function main(time) {
//     setTimeout(() => {
//         console.log('I am main');
//         (function f3() {
//             setTimeout(() => {
//                 console.log('I am 3000');
//                 (function f2() {
//                     setTimeout(() => {
//                         console.log('I am 2000');
//                         (function() {
//                             setTimeout(() => {
//                                 console.log('I am 1000');
//                                 console.log(Date.now()-timer)
//                             }, 1000);
//                         })();
//                     }, 2000);
//                 })();
//             }, 3000);
//         })();
//     }, time)
// }

// main(1000);