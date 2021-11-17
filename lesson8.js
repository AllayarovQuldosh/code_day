


//>>>>>>>>>>>>>>1-misol<<<<<<<<<<<<<<<<

// const arr = [1,2,3,4,5,6,7];
// const a = arr;
// console.log(a);

//>>>>>>>>>>>>>2-misol<<<<<<<<<<<<<<<<<

// const arr1 = [[11,22,33]];
// const b = arr1;
// console.log(b.length);
// >>>>>>>>>>>>3-misol<<<<<<<<<<<<<<<<<<<<<<

// const arr2 = [[1,1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1,1],[11,1,1,1,1]];
// const d = arr2;
// console.log(d.length);


// >>>>>>>>>>>>>>.4-misol<<<<<<<<<<<<<<<<<<

// const arr3 = ['qalam','qalin','qadam'];
// String = ' ';
// for(let of arr3){

// }

// >>>>>>>>>>>>>>5-misol<<<<<<<<<<<<<<<<<<

// const arr4 = [3,4,5];
// // arr4.shift(1,2);
// // arr4.slice(0,1,2);
// // arr4.add(1,2)
// arr4.unshift(0,1,2);
// arr4.push(6,7,8);
// console.log(arr4);

// >>>>>>>>>>>>>>>>>>.6-misol<<<<<<<<<<<<<<<<<<

// const arr5 = [1,2,3,4,5,6,7,8,9];


// let arr = ['array','string','number','boolean','int'];
// function middle_of_arr1(arr){
//     middle = arr.length / 2;
//     deleted = arr.splice(middle - 1,3)
//     console.log(deleted, arr)
// }
// middle_of_arr1(arr)
     

// // >>>>>>>>>>>..7-misol<<<<<<<<<<<<<<<<<<

 
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 6, 8, 0];
// function getTeng(arr){
//     const unique = new Set(arr);
//     console.log(unique);
// }
// getTeng(arr);


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 6, 8, 0];
// function getTeng(arr){
//     const unique = new Set(arr);
//     const res = [...unique];
//     console.log(res);
//     return res;
// }
// getTeng(arr);

// >>>>>>>>>>>>>>>>>.8-misol<<<<<<<<,,,,

// function concat(arr1,arr2){
//     return [...arr1, ...arr2];
// }

// const arr1 = [1,2,3,4];

// const arr2 = [1,22,23,44];






// // >>>>>>>>>>>>>>>>>>>>>>>>>> Class code day
// class Go{
//     constructor(a,b){
//         this.a = a;
//         this.b = b;
//     }
//     run(){
//         return this;
//     }
// }

// const go = new Go(1,true);
// console.log(go.run());

// function Home(a,b){
//     this.a = a;
//     this.b = b;

//     this.run = function(){
//         return this;
//     }
// }
// const home = new Home(3,4);
// console.log(home.run());

const palidrome = (string) => string === string.split("").reverse().join();
console.log(palidrome("kiyik"));
// console.log(palidrome("abas"));


