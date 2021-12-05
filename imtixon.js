
// //>> 1-misol

// function jumpString(n){
//     let a = 1, b = 2, next;
//     for(let i = 3;i <= n;i++){
//         next = a + b;
//         a = b;
//         b = next;
//     }
//     return n === 1?a:b;
// }

// console.log(jumpString(8));

//>> 2-misol

// function bubbleSort(arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr.length;j++){
//             if(arr[n]>arr[n+1]){
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//     }
//     return arr;
// }

// console.log(bubbleSort(12,11,10));

//>> 3-misol

// function replecer(str, sub){
//     const arrStr = str.split('');
//     const arrSub = sub.split('');
//     let count = 0;
//     for(let i=0;i<arrStr.length;i++){
//         let current = arrStr[i];
//         if(current === '*'){
//             arrStr[i] = arrSub[count++];
//         }
//     }
//     return arrStr.join('');
// }
// console.log(replecer('h*llo w*rld','eo'));

// //>> 4-misol  1-usul

// function comparer(pair,result){
//     const stringified = result.map((value) => JSON.stringify(value));
//     for(let i=0;i<stringified.length;i++){
//         if(stringified[i] === JSON.stringify(pair)){
//             return true;
//         }
//     }
//     return false;
// }

// function main(arr,target){
//     let result = [];
//     for(let i=0;i<=arr.length;i++){
//         for(let n=0;n<arr.length;i++){
//             let sum = arr[i]+arr[n];
//             if(sum === target && i !== n){
//                 let pair = [arr[i],arr[n]];
//                 if(!comparer[pair,result]){
//                     result.push(pair);
//                 }
//             }
//         }
//     }
//     return result;
// }
// console.log(main([1,23,4,5,6,7,5,4,4,4], 9));


// //>> 4misol 2-usuli

// function main2(arr, target){
//     const uniqueArr = [...new Set(arr)];
//     const result = [];
//     for(let i=0;i<uniqueArr.length;i++){
//         for(let j=0;j<uniqueArr.length;j++){
//             let sum = arr[i]+arr[j];
//             if(sum === target && i!==j){
//                 result.push([arr[i],arr[j]]);
//             }
//         }
//     }
//     return result;
// }
// console.log(main2([1,1,2,23,2,3,3,4,3,2,3,55,6,7,54,4,4,7,7,8],5));


// //>> 5-misol

// function reverseSentence(sentence){
//     let arr = sentence.split(' ');
//     let result = [];
//     for(let i=arr.length-1;i>=0;i--){
//         if(arr[i]!==''){
//             result.push(arr[i]);
//         }
//     };
//     return result.join(' ');
// }

// console.log(reverseSentence('   Hello world I am    Back End Engineer'));
