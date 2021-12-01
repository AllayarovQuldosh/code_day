//>>>>>>>>> promise


// function promiseFunc(){
//     return new Promise((res,rej)=>{
//         res('hello promiseFunc !!!');
//     })
// }

// async function asyncFunc(){
//     return 'Hello I am asyncFunc !!!'
// }

// console.log(promiseFunc());
// // console.log(asyncFunc());

// promiseFunc().then(v => {
//     console.log(v);
// });
// asyncFunc().then(v =>{
//     console.log(v);
// })

// async function handler(){
//     let pr = await promiseFunc();
//     console.log(pr);
//     return pr;
// }
// console.log(handler());

// handler().then((v) => {
//     console.log(v);
// })

// async function vim(){
//     let prs = await asyncFunc();
//     console.log(prs);
//     return pr;
// }

// vim().then((v)=> {
//     console.log(v);
// })

function promiseFun(){
    return new Promise((res,rej) => {
        res('Hello Promise !!!');
    });
}

// console.log(promiseFun());

async function asyncFun(){
    return 'Hello async Function !!!';
}
// console.log(asyncFun());

// promiseFun().then(value =>{
//     console.log(value);
// // })
// asyncFun().then(v =>{
//     console.log(v);
// })
 
// /\  >>>>>>>> await<<<<<<<<<<<

async function handler(){
    let p = await promiseFun();  
    console.log(p); // Promise{ <pending>}
    return p;// Hello Promise !!!
}

// console.log(handler());

handler().then((v)=>{
    console.log(v);
})