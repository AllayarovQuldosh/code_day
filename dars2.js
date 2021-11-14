/*
let arr = [1,2,[true,'string',null],{n: 1,b: 2},'string'];


let el= arr[0];
function getNum(arr){
    let  i;
    for(i in arr){
        if(arr[i]==='number')
        console.log(arr[i]);
    }
}
getNum(arr);
*/

// let arr = [1,2,'string','string2',true,false];

// function getDataTypes(arr){
//     let number = [];
//     let string = [];
//     let bool = [];
//     for (let element of arr){
//         if(typeof element === 'number'){
//             number.push(element);
//         }else if(typeof element === 'string'){
//             string.push(element);
//         }else if(typeof element === 'boolean'){
//             bool.push(element);
//         }
//     }
//     return {
//         number: number,
//         string: string,
//         bool: bool
//     }
// }
     

// getDataTypes(arr);
// console.log(getDataTypes(arr));
///>>>>>>>>>>>>>>>>>>>>>>>function
// function getDivisable(limit,divisable){
//     let arr = [];
//     for(let i = 0; i <= limit; i++){
//         if(i % divisable === 0){
//             console.log(i)
//         }
//     }
// }
// getDivisable(45,5);



// function getNumbers(a,b,c){
//     console.log(a,b,c);
// }
// getNumbers(12,33,44);

// Array keylaridan juft qiymatlarni qaytaradigan function dasturini tuzing

// const data = [['a', 1], ['b', 2]];
// function dateKey(data){
//      for(key in data){
//          if(key % 2 == 0){
//              console.log(key);
//          }
//      }
// }
// console.log(dateKey(data));
//>>>>>>>>>>>>>>>>>>
// const data = [['a', 1], ['b', 2]];

// function arrayToObj(array){
//     let obj = {}

//     for(const i of array){
//         obj[i[0]] = i[1]
//     }
//     return obj
// }
// console.log(arrayToObj(data));

//>>>>>>>>>>>>>>>Shunday  function yozingki 
//function argumentlari 
//qiymatidan arrayni olib chiqaradigan dasturni tuzing

// const data = arr = [1,2,3,1,2];

// function withaut(arr, a,b){
//     let result = [];
//     for(elemt of arr){
//         if(elemt === a && elemt === b){
//             continue
//         }else{
//             result.push(elemt);
//         }
//     }
//      return result
// }
// console.log(withaut(data,1,2));

// const ShapeA = function () {};
// const ShapeB = {
//     a() {
//         console.log('aaa');
//     }
// };
// console.log(ShapeA.prototype.__proto__ = ShapeB);
//>>>>>>>>>>>>>>>>>Factoriy Function 

// console.log(circle);

// function createCircele(radius,location){
//     return {
//         radius,
//         location,
//         drow(){
//             console.log('drow');
//         }
//     };
// };

// OneTwoThreeFourFive > PascaCase
//oneTwoThreeFourFive > camelCase
// one_two_three >>>> snak_case

// function getNumbers(arr){
//     let i = 0;
//     do{
//         if(typeof arr[i] === 'object'){
//             for(let j = 0;j < arr[i].length;j++){
//                 arr[i] *= 2;
//                 console.log(arr[i][j]);
//             }
//         }
//         i++;
//     }while(i<arr.length)
// }

// getNumbers(arr);
//>>>>>>>>>>>>>>>>arr
// let arr = [1,2[2,3,4,5,6,7,null],'string'];

// let e10 = arr[0];
// function getNum(arr){
//     for(let index in arr){
//         if(typeof arr[index] === 'object'){
//             for(let elemt of arr[index]){
//                 console.log(typeof elemt);
//             }
//         }
//     }
// }
// getNum(arr);

//>>>>>>>>>function
// function checkAge(age,name){
//     if(aga>=7 && age<=18){
//         console.log(`Name: ${name} \n Status: School`);
//     }else if (age > 18 && age <= 22){
//         console.log(`Name: ${name} \n Status: University`);
//     }else{
//         console.log('Not Known');
//     }
// }
// checkAge(8, 'Ali');
//>>>>>>>>>>>>>>>>>>>> arr key and value qiymatlarini qaytardi
// let arr = [1,22,'srting',null,undefined];

// function getSum(arr){
//     let res = [];
//     let sum = 0;
//     for(let elem of arr){
//         if(typeof elem === 'number'){
//             res.push(elem);
//             sum += elem;

//         }
         
//     }
//     return {
//         arr: res,
//         sum: sum
//     }
// }
// let result = getSum(arr);
// console.log(result);
//>>>>>>>>>>>>>>>>>>>>> DataTypes arr ni 
// let arr = [1,2,3,'string',null];
// //['number','number','number','string',null]

// function getDataTypes(arr){
//     let dataTypes = [];
//     for(let elemt of arr){
//         dataTypes.push(typeof elemt);
//     }
//     return dataTypes;
// }

// console.log(getDataTypes(arr));
//>>>>>>>>>>>>>> arr  { odds: [ 1, 3, 5 ], evens: [ 2, 4 ] }
// let arr = [1,2,3,4,5];
// function getOddAndEvenNumbers(arr){
//     let odds = [];
//     let evens = [];
//     for(let elemt of arr){
//         if(elemt % 2 === 0){
//             evens.push(elemt)
//         }else if(elemt % 2 !== 0){
//             odds.push(elemt);
//         }else {
//             console.log('Number is not positive');
//         }
//     }
//     return {
//         odds: odds,
//         evens: evens
//     }
// }
// console.log(getOddAndEvenNumbers(arr));

//>>>>>>>>>>>>> arr number,string,boolean 
/*
number: [ 1, 2 ],
  string: [ 'string1', 'string2' ],
  bool: [ true, false ]
}
*/

// let arr = [1,2,'string1','string2',true,false];

// function getDataTypes(arr){
//     let number = [];
//     let string = [];
//     let bool = [];

//     for(let elem of arr){
//         if(typeof elem === 'number'){
//             number.push(elem);
//         }else if(typeof elem === 'string'){
//             string.push(elem);
//         }else if(typeof elem === 'boolean'){
//             bool.push(elem);
//         }else{
//             console.log('Not Know Types');
//         }
//     }
//     return {
//         number,
//         string,
//         bool
//     }
// }
// console.log(getDataTypes(arr));
//
//>>>>>>>>>>>>>>>> Object 
// const obj = {
//     name: 'John',
//     lastname: 'Wick',
//     address: 'Chicago'
// }
// //
// function getListoKeyValuePairs(obj){
//     let = [];

//     for(let key in obj){
//         keys.push(key);
//     }
//     return keys;
// }
// // getListoKeyValuePairs();

// console.log(getListoKeyValuePairs);

//>>>>>>>>>>>>>>> Constructor Function

function Cirle(radius,location){
    this.r = radius;
    this.l = location;
}
const gohome = new Cirle(34,{x: 3,y: 6});
console.log(gohome);


