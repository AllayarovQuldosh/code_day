// >>>>>>>>>> Generator Function <<<<<<<<<<<<<<<<<<<<<<<<<<<<

// function* generator(){
//     yield 1;
//     yield '2',
//     yield true,
//     yield {name: 'Filed'},
//     yield [1,23,4,45],
//     yield null,
//     yield undefined,
//     yield 'Hello World !!!'
// }

 
// let gen = generator();
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

// for(const r of gen){
//     console.log(r);
// }

// console.log(gen);
// console.log(gen); 

// let obj = {
//     from: 1,
//     to: 5,
//     [Symbol.iterator](){
//         return {
//             current: this.from,
//             to: this.to,

//             next(){
//                 if(this.current<=this.to){
//                     return{value: this.from++,done: false};
//                 }else{
//                     return{value: this.to,done: true}
//                 }
//             }
//         }
//     }
// }
// console.log([...obj]);

// function* generator1(){
//     try{
//         yield 1,

//     }
// }
// >>>>>>>>>> generator function ----+---- amali
// function* genFunc(){
//     let r = yield '5+5 = ?';
//     console.log(r);
// }
// let gen = genFunc();

// let question = gen.next().value;
// console.log(question);
// console.log(gen.next(10));

// console.log(gen.next(5));
// console.log(gen.next(5));

// function* genFuncs(){
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
// }
// let gene = genFuncs();
// console.log(gene.next());
// console.log(gene.next());
// console.log(gene.next());
// console.log(gene.next());
// console.log(gene.next());

