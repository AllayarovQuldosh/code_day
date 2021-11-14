//>>>>>>>>>>>>> Non Primitive

/*
const obj1 = {
    name: 'John',
    age: 24,
    address: 'Chilanzar'
}

let obj2 = obj1;

obj2.name = 'Alisa';

console.log(obj1);

*>>>>>>>>>>>>>> Varebles
let ism = "Quldosh";

console.log("Allayarov " + ism);

let son = 10;
let yangison = 20;
son -= yangison;
console.log(son);
*

let salom = "Salom";
let integer = 12;
let float = 23.44;
let bool = true;


let data = "Javascript Organayapmiz",
    userData = 13,
    db = "MongoDB",
    float1 = 12.33;

console.log(data);
console.log(userData);
console.log(db);
console.log(float1);
*/


/*>>>>>>>>>>>> Qarshilashtirish Operatorlari
* == tengmi 
* === malimot turi bilan birga tengmi
* != teng emasmi
* !== malumot turi bilan birga teng emasmi
* > kattami 
* < kichikmi 
* >= katta yoki tengmi
* <= kichik yoki tengmi
*

let son = 2;
console.log(son >= 1);

/*>>>>>>>>>>>>>>>>>>>>>> and vs or (va --- yoki)
* &&  (va)
* || (yoki)
*
let son1 = 1;
let son2 = 3;
let son3 = 4;

let holat = (son1 === son2) || (son1 < son3) || (son2 === son3);

console.log(holat);
*/
/*
//>>>>>>>>>>>>>if else 

let yomgir = false;
let qor = false;


if(yomgir)
    console.log("Soyabon Ol");
else
    if(qor)
        console.log("Qalin Kiyinib Ol");
    else
        console.log("Soyabon Shart Emas");

*
//>>>>>>>>>>>> function 
function salomBer(){
    console.log("Hello !!!");
}

let salomOl = function () {
    //console.log("Assalomu Alaykum !!!");
    return 12;
}
console.log(salomOl())
salomOl()
salomBer()
*
//>>>>>>>>>> collback function------->>> bu function ichida yana function ishlatiladi

function f(num1,num2,num3) {
    console.log(num1+num2*num3);
}
f(12,33,400);

function f1(text, collback) {
    console.log(text);
    collback();
}
function qosh() {
    console.log("Qoshish Function 11")
}
f1("Textimiz",qosh)
*
//>>>>>>>>>>> setTimeout ----->>>

function f() {
    setTimeout(function () {
        console.log("Hello");
    },1000)
}
f();

let fnc = function () {
    console.log("Hello Set Time Out");
}
setTimeout(fnc,3000);
*


//>>>>>>>>>>>setInterval ------->>>>>   clearInterval------>>> bilan toxtamiz   

let son1 = 1;
let interval = setInterval( function (){
    if(son1 === 5)
        clearInterval(interval);
    console.log("Hello " + son1);
    son1++; // son1 = son1 + 1 degani
},1000)

interval

*
////>>>>>>>>collback function -------->>> bu funksiys ketma-ketligda ishlaydi
function f1(collback){
    setTimeout(function(){
        console.log("f1")
        collback(f3)
    },1000)
}
function f2(collback){
    setTimeout(function(){
        console.log("f2")
        collback()
    },2000)
}
function f3(){
    console.log("f3")
}

f1(f2)
****
function f1(collback){
    setTimeout(function(){
        console.log("f1")
        collback(f3)
    },1000)
}
function f2(collback){
    setTimeout(function(){
        console.log("f2")
        collback()
    },2000)
}
function f3(){
    console.log("f3")
}

f1(f2)
****/
/*
//>>>>>>>>>> scope ---> {}-----> Scopeni ichidagi uzgaruvchi 
function f1(){
    let x = "Scopeni Ichida Uzgaruvchi !";
    console.log(x);
}
function f2(){
    let x = "Scopeni Ichidagi Uzgaruvchi !";
    console.log(x);
}

f1();
f2();

let x = "Scopedan Tashqarida X !"; // let ---->>> xato beradi >>>SyntaxError: Identifier 'x' has already been declared
let x = "scope ";               // var--->> pasdagi qiymatni oladi consolga chiqaradi
console.log(x);
*/
///>>>>>>>>>>>>>>>>>> Loop-----for
/*
for (let i=0;i<10;i++){
    console.log("Hello !",i);
}
*/
///>>>>>>>>>> loop ---- while
/*
let i = 0;
let ism = "Quldosh";
while(i < 10){
    console.log(i,"-Element");
    i++;
}
*/
//>>>>>>> loop ---- do ----while
/*
let k = 1;
do{
    console.log(k)
    k++;
}while(k < 10);

*/
//>>>>>>>>>>> Object 
/*
let inson = {
    age : 22,
    name : "Quldosh",
    color : "black",
    yurish : function(){
        console.log("Yurilmoqda..........")
    }
}
inson.age = 90;

console.log("Insonning age",inson.age);
console.log("Insonning name",inson.name);
console.log("Insonning Color",inson.color);
inson.yurish();
*
//>>>>>>>>>>>> Seriya
let seriya = ['Quldosh',11,false,34.5,"Allayarov"];
//console.log(seriya);
//console.log(seriya.length);
/*
for(let i=0;i<seriya.length;i++){
    console.log(seriya[i]);
}

seriya.forEach(function(j){
    console.log(j);
})
*/
//>>>>>>>>>>>>>>> throw, try, catch,finally
  /*
try{
    let son1 = 1;
    let son2 = 1;
    let jami = son1 / son2;

    if(son2 === 0)
        throw Error('Son2 0 ga teng bulmasligi zarur !');
    else
        console.log(jami);
}catch (error){
    console.log(error)
}finally{
    console.log("Bu yer finally Blogi !")
}

//>>>>>>>>>>>>>>use strict
//let x = 10;
'use strict'
x = 10;
console.log(x);

//>>>>>>>>>>>>> ES6 and JS ---ECMAScript 6   -- Javascript
var x = "ozgaruvchi";
let y = "let ozgaruvchi";

//console.log(y);

for(let i=0;i<10;i++){
    //
}
//console.log(i);
let m = 11;
m = 111;
//console.log(m);
const pi = 3.14;
//pi = 3.15;
console.log(pi);

const qiymatlar = {name: "Quldosh",surname: "Allayarov"};
qiymatlar.name = "Qoldosh";
console.log(qiymatlar);

//>>>>>>>>>>>>>>>> templet
const name = "Quldosh";
const age = 23;
console.log(`My name ${name} and Age ${age} da`);

//>>>>>>>>>>>>>>> destirecsion 
const list1 = {
    qiymat1: 'top1',
    qiymat2: 'top2',
    qiymat3: {
        ism: 'John'
    }
}
//console.log(list1.qiymat1);
//console.log(list1.qiymat2);
//console.log(list1.qiymat3);
const {qiymat1,qiymat2,qiymat3} = list1;
//console.log(qiymat1);
//console.log(qiymat2);
//console.log(qiymat3);
const {qiymat3: {ism: name}} = list1;
console.log(name);

const qiymatlar = [1,2,3];
const [q1,q2,q3] = qiymatlar;
console.log(q1);
console.log(q2);
console.log(q3);
*/
//>>>>>>>>>>>>>>>>>>>>> Sprit operators(...)--list ichidan chiqarib beradi>>>>>>rest---operator
//const arr = ['a','b','c'];
//console.log(...arr);

//const arr1 = [1,2,3];
//const arr2 = [4,5,6];
//console.log(...arr1,...arr2);
//const arr1 = [1,2,3];
//const arr2 = [...arr1,4,5,6];
//console.log(arr2);

//>>rest operator------berilgan qiymatni oldindagilarini chiqaradi (...rest)
//const arr3 = ['a','b','c','d'];
//const [qiymat1,qiymat2,...rest] = arr3;
//console.log(...rest);
/*
const num1 = 10;
const checkNum1 = num1 === 0 ? " You have nothing"(
    num1 < 10 ? "You have very little" : "You have alot")

console.log(checkNum1);


let a = 101;
let b = 20;
let c = 30;

const numABC = a > b && a > c && c > b ? (`${a} ${c}`): (
    a > b && a > c && b > c ? (`${a} ${b}`) : (
        c > a && c > b && b > a ? (`${b} ${c}`) : (
            c > a && c > b && a > b ? (`${a} ${c}`) : (
                b > a && b > c && c > a ? (`${a} ${b}`) : (
                    b > a && b > c && c < a ? (`${b} ${c}`) : ("Notworking")
                )
            )
        )
    )

)
console.log(numABC);

*/
//>>>>>>>>>>>>>>>>>>>> FIZZ BIZZ
// function x (n){
//     if(n % 3 == 0){
//         console.log("FIZZ");
//     if (n % 5 == 0){
//         console.log("BIZZ");
//     if (n % 3 == 0 && n % 5 == 0){
//         console.log(FIZZBIZZ);
//     }
//          }
//     }
// }
// x(159);

//>>>>>>>>>>>>>>>>> Array --- true, false
// arr = [1,3,7,11,13];
// arr1 = [1,3,6,4,8];
// function odd(value){
//     if( (value % 2) == 1){
//         return true;
//     }else{
//         return false;
//     }
// }

// let out = arr.every(odd);
// let out1 = arr1.every(odd);
// console.log("Output of array 1 : " + out);
// console.log("Output of array 2 :" + out1);

// arr = [2,4,6,8,10];
// arr1 = [2,3,4,7,8];
// function odd(value){
//     if( (value % 2) == 1){
//         return true;
//     }else{
//         return false;
//     }
// }

// let out = arr.find(odd);
// let out1 = arr1.find(odd);
// console.log("Output of array 1 : " + out);
// console.log("Output of array 2 :" + out1);


// let arr = ['karthiq', 'chercher tech', 'is','not','that much good website'];

// arr.forEach(function(element) {
//     console.log(element);
// });

// var arr = [ 1, 9, 3 ];
// console.log(arr) // prints 1, 9, 3
// // adds given elements from index 2
// arr.splice(2,2,"abc", "bbc")
// console.log(arr) // prints 1, 3, 'abc', 'bbc'
// // remove 3 elements from given index
// arr.splice(2,3)
// console.log(arr) // prints 1, 3

