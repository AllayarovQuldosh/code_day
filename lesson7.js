// if (condation){
//     else{

//     }
// }



// function  getCondition(a,b) {
//     if(a>b){
//         return 'a katta b dan';
//     }else if(b>a){
//          return 'b katta a dan';
//     }else{
//         return 'a===b';
//     }
// }
// const result = getCondition(1,2);
// console.log(result);


// switch case 
// function getswitch(a){
//     switch (a){
//         case 'Uzbekiston':
//             console.log('Capitol of Uzbekiston Tashkent');
//             break;
//         default:
//             console.log('Unknonw Country');
//             break;
//     }
// }
// getswitch('Uzbekiston')

// Ternary Operator condition ? true value : false value
// const maxValue = function(a,b){
//     return a>b ? a : b;
// }
// const max = maxValue(12,3);
// console.log(max);



//>>>>>>>>>>>>>>>> Loops <<<<<<<<<<<<<<<<<<<
// const arr = [11,22,33,44,55,66,77,88];
// function getValue(arr){
//     for(let i=0;i<arr.length;i++){
//         console.log(`${i} indexdagi elementning qiymati=> ${arr[i]}`);
//     }
// }
// getValue(arr);

// >>>>>>>>>>> while<<<<<<<<<<<<
// while(condition){

// }

// function getWhile(a,b){
//     while(true){
//         console.log(true);
//         break;
//     }
// }
// console.log(getWhile(2,12));


// const listStudens = [{
//     id: 1,
//     username: 'student1',
//     emeil: 'student1gmail.com'  
//     },
//     {
//         id: 2,
//         username: 'student2',
//         emeil: 'student2gmail.com' 
//     },
//     {
//         id: 3,
//         username: 'student3',
//         emeil: 'student3gmail.com' 
//     },
//     {
//         id: 4,
//         username: 'student4',
//         emeil: 'student4gmail.com' 
//     }
// ]
 
// function arrayStudens (arr) {
//     const main = [];
//     for(let i=0;i<arr.length;i++){
//          const element = arr[i];
//          const obj = [];
//          for(let key in element){
//              obj.push(element[key])
//          }
//          main.push(obj)
//     }
//     console.log(main);
// }

// arrayStudens(listStudens);
 

// const arr = [1,2,34,5,6,766,4,33,23];
// function minmax(arr){
//     let resMax = arr[0];
//     let resMin = arr[1];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>resMax){
//             resMax = arr[i];
//         }
//         if(arr[i]<resMin){
//             resMin = arr[i];
//         }
//     }
//     return `max: ${resMax} min: ${resMin}`;
// }
// minmax(arr)
// console.log(minmax(arr));

//>>>>>>>>>>>>>> Math.min,max<<<<<<<<<<<<<<<<<<<<
// function getminmaxwithReduce(arr){
//     const min = Math.min(...arr);
//     const max = Math.max(...arr);

//     return{
//         min,
//         max
//     }
// }
// const r = getminmaxwithReduce(arr)
// console.log(r);

//>>>>>>>>>>>>>>>Reduce<<<<<<<<<<<<<<<,
// function getMinMaxWithReduce(arr){
//     const max = arr.reduce((p,c)=> c>p ? c : p);
//     const min = arr.reduce((p,c)=> c<p ? c : p);
//     console.log('Reduce', min,max);
//     return{
//         min,
//         max
//     }
// }
// getMinMaxWithReduce(arr);



// const arr = [
//     {name: 'Chirst',work: 'dev'},
//     {name: 'George',work: 'test'},
//     {name: 'Jim',work: 'dev'},
//     {name: 'Trey',work: 'test'}
// ];
// sortArrayOfObjects = (arr, key) => {
//     resDiv = [];
//     resTest = [];
//     for(let key in arr){
//         resDiv.push(arr[key])
//         resTest.push(arr[key]);
//         return arr.sort((a, b) => {
//             return a[key] - b[key];
//         });
//         return {
//             resDiv,
//             resTest
//         }
//     };
// };
    

// let object = sortArrayOfObjects(arr, "work");
// console.log(object);





// let arr = [
//     {id: 23634, pollId: 6907, name: "B", type: "PollOption", totalAmountRaised: 341,},
//     {id: 23635, pollId: 6907, name: "A", type: "PollOption", totalAmountRaised: 636,},
//     {id: 23641, pollId: 6907, name: "C", type: "PollOption", totalAmountRaised: 246,},
//     {id: 23642, pollId: 6907, name: "D", type: "PollOption", totalAmountRaised: 1092,},
//     {id: 23643, pollId: 6907, name: "E", type: "PollOption", totalAmountRaised: 0},
//     ]
    
//     let sorted = arr.sort((a, b) => b.totalAmountRaised - a.totalAmountRaised)
//     console.log(sorted)



const arr = [
    {name: 'Chirst',work: 'dev'},
    {name: 'George',work: 'test'},
    {name: 'Jim',work: 'dev'},
    {name: 'Trey',work: 'test'}
];

function obj_arraysTOarray_objs(arr){
    let final_array = arr[Object.keys(arr)[0]].map(
        // el is unused, but needs to be defined for map to give access to index i
        (_el, i) => {
            let internal_object = {};
            Object.keys(arr).forEach(
                key => (arr[key] = arr[key][i])
            );
            return arr;
        }
    );
        return final_array;
    }
obj_arraysTOarray_objs(arr, "work")




// sortObject = sort(function(arr) {
//     let keys = Object.keys(arr);
//     let result = {};

//     keys.sort();

//     for(let i = 0; i < keys.length; i++) {
//         let key = keys[i];
//         result[key] = arr[key];
//     }
//     return result;
// });
// console.log(sortObject(arr));

// let object = sortObject(array,work)
// console.log(object);















// function createObj(arr){
//     resDev = {};
//     resTest = {};
//     for(let i=0;i<arr.length;i++){
//         if(arr[i] === 'dev'){
//             resDev.push(arr);
//             console.log(arr);
//         }else if(arr[i] === 'test'){
//             resTest.push(arr);
//             console.log(arr);
//         }
//     }

// }
// // let object = createObj(arr)

// console.log(createObj);













 