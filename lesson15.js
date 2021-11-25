// success1
// success2
// success3
// success4
// error 
// >>>>>>>>>>>> Promise <<<<<<<<<<<<<<<

// function job() {
//     return new Promise(function(res,rej){
//         res('I am Promise of job');
//         rej('I am rejected')
//     });
// }

// let pr = job();
// pr
// // console.log(pr);

// .then(function(value){
//     console.log(value);
//     console.log('success1');
//     return 'first then'
// })
// .finally(function(){
//     // console.log(value);
//     console.log('finallly');
//     return 'finall'
// })
// .then(function(value){
//     console.log(value);
//     console.log('success2');
//     return 'second then'
// })
// .then(function(value){
//     console.log(value);
//     console.log('success3');
//     return 'third then'
// })
// .catch(function(value){
//     console.log(value);
//     console.log('error 1');
//     return 'error'
// })
// .then(function(value){
//     console.log(value);
//     console.log('success4');
    
// // })
// Promise.resolve('Hello').then((v)=>{
//     console.log(v);
// })

// //>>>>>>>>>>>>>>>>>>> Promise.rej vs res<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// function main(cond) {
//     return Promise.reject('resolvejjgvjbeoskfs')
//     // new Promise((res,rej)=> {
//     //     if(cond) {
//     //         rej('Resolved');
//     //     }
//     // });
// }
// main().catch(value => console.log(value)).then(value => console.log(' catch ->> rej ushlaydi'));
 


// class Person {
//     getSurname(surname){
//         return surname;
//     }
//     static getName(name){
//         return name;
//     }
// }
// const f = new Person(getSurname('Komil'))
// console.log(f);

// >>>>>>>>>>>>>>    allSettled  <<<<<<<<<<<<<<<<<<<<<<

// let promiseArr = [
//     new Promise(res => setTimeout(()=>{res(1)},3000)),
// //     new Promise(res => setTimeout(()=>{res(2)}, 1000)),
// //     new Promise((res,rej) => setTimeout(()=>{rej(new Error())}, 500))
// ]

// Promise.race(promiseArr).then((value)=>{
//     console.log(values);
// })

// Promise.allSettled(promiseArr)
// .then(res => {
//     res.forEach((value)=>{
//         if(value.status === 'fulfilled'){
//             console.log(value.value);
//         }
//     });
// })


// const fs = require('fs');
// const data = fs.readFileSync('/file.md');  
// // console.log(fs);
// console.log(data);
