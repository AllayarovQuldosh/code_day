// Object Qanday yasaladi 
//>>>>>>>> Object Literal Nima
// const obj = {
//     name: 'John',
//     age: 12
// };
// console.log(obj);
//  { name: 'John', age: 12 }

//>>>>>>>>>>>>>>Factory Function nima

// function createObj(name,age){
//     return {
//         name,
//         age
//     }
// }
// const obj2 = createObj('John',55);
// console.log(obj2);
//    { name: 'John', age: 12 }
//    { name: 'John', age: 55 }

//>>>>>>>>>>>>> Constructor function nima?
// function Obj(name,address){
//   this.n = name;
//   this.a = address;
//   //console.log(this);
// }
// const obj1 = new Object('John','Chilonzor');
// Obj('John','Chilonzor');
// console.log(obj1);
// function fn(){
//   console.log(this);
// }
// fn(obj1);
 
// // >>>>>>>>>> Math
// console.log(Maht);
// let a = Math.max();

// console.log(a);


 

//>>>>>>>>>>> Object,Function, "this"
//>>>>>>>>>> mustaqil ish

// const firsname = ['John','Wick','Timati','Feoder','Mayk','Merlin','Daminic','Alisa','Don','Kolum'];
// const lastname = ['Amerkov','Avstraliyov','Russiyaov','Maykolov','Merlinov','Daminicov','Alisayeva','Doniyorov','Kolumboyev'];
// const phone = ['+998911234567','+109876652','+0999999993','+790002342','+123456776543','+987654322343456','+54321234567654','+12322','+2323','+2345676543234'];
// const email = ['holll@gmail','fokk@gmail','ssskf@gmail','fwjgovjs@gmail','kgkv@gmil','jsegfj@gmail','gks@gmail','hrskf@gmail','kzfh@gmail','shkhv@gmail'];
// const password = ['1111','2222','3333','4444','5555','6666','7777','8888','9999','0000'];

// function crecateUser(firsname,lastname,phone,email,password){
//     return {
//         firsname:lastname[Math.floor(Math.random(10) * 10)],
//         lastname: firsname[Math.floor(Math.random(10) * 10)],
//         phone: phone[Math.floor(Math.random(10) * 10)],
//         email: email[Math.floor(Math.random(10) * 10)],
//         password: password[Math.floor(Math.random(10) * 10)],
//     }
// }

// console.log(crecateUser(firsname,lastname,phone,email,password));
 
// uy ish


// function minusPlus(obj1){
//     let items;    
//     let result;
//     for(items in obj1){
//         items = Object.values(obj1);
//     }
//     for(result in obj1){
//         result = items[0] - items[1];
//     }
//     return result;
// }
// console.log(minusPlus({plus: 12,minus: 4}));

//>>>>>>>>>>>>>>>>> uy ish
 
// function f(n) { g(n - 1) }

// function g(n) {
//   console.log('before: ' + g.arguments[0])
//   if (n > 0) { f(n) }
//   console.log('after: ' + g.arguments[0])
// }

// f(2)

// console.log('returned: ' + g.arguments)



// function sizeOfBox(obj1){
//   let item;
//   let natija;
//   for(let i in obj1){
//     item = Object.values(obj1);
//   }
//   for(let i in item){
//     natija = item[0] * item[1] * item[2];
//   }
//   return natija;
// };
// console.log(sizeOfBox({width: 22,length: 3,height: 4}));

 

