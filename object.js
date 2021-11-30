// let obj = {
//     name: 'Quldosh',
//     surname: 'Allayarov',
//     age: 25,
//     email: 'allayarovquldosh@gmail.com',
//     id: 1,
//     address: 'Surxondaryo vil',
//     job: 'programmer'
// }

// let info = Object.keys(obj)
// // console.log(info);

// let valuess = Object.values(obj);
// // console.log(valuess);

// let etris = Object.entries(obj);
// console.log(etris);


// >>>>>>>>>>>>>>>>>> ARRAY <<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// let arr = [[1,2,3,4,5,6,7],
// [12,32,322,334,11,23,345,44],
// [111,2,3,12,33,44]];

// let len = arr.length;
// for(let i=0;i<len;i++){
//     item = arr[i].length;
//     console.log(i,item);
//     for(let j=0;j<item;j++){
//         console.log(arr[i][j]);
//     }
// // }

// let bigHero = {charcters:[
//     {name: 'Bernard',voice: 'Jim Kerriy'},
//     {name: 'Simle', voice: 'Hille',prop: 12},
//     {name: 'Abbulla',voice: 'Qahhor'},
//     {name: 'Chingiz',voice: 'Aykmatov'}
// ]};
// // console.log(bigHero);

// let chars = bigHero['charcters'];
// for(let i=0,len=chars.length;i<len;i++){
//     // console.log(chars[i]);
//     // console.log(chars[i].name);
//     // console.log(chars[i]['voice']);
//     for(let prop in chars[i]){
//         console.log(prop, chars[i].prop, chars[i][prop]);
//     }
// } 

const companies = [
    {name: 'Company one',category: 'Finance',start: 1981,end: 2003},
    {name: 'Company two',category: 'Retail',start: 1992,end: 2008},
    {name: 'Company three',category: 'Auto',start: 1999,end: 2007},
    {name: 'Company four',category: 'Retail',start: 1989,end: 2010},
    {name: 'Company five',category: 'Technology',start: 2009,end: 2014},
    {name: 'Company six',category: 'Finance',start: 1987,end: 2010},
    {name: 'Company seven',category: 'Auto',start: 1986,end: 1996},
    {name: 'Company eight',category: 'Technology',start: 2011,end: 2016},
    {name: 'Company nine',category: 'Retail',start: 1981,end: 1989},
];

const ages = [33,12,20,16,5,54,21,44,61,13,15,45,25,64,32];


// for(let i=0;i<companies.length;i++){
//     console.log(companies[i]);
// }

// // >>>>> forEach
// companies.forEach(function(company){
//     console.log(company.name);
// });

// // >>>>>> filter
//>>> Get 21 and older
//  >>> solution-1

// let canDrink = [];
// for(let i=0;i<ages.length;i++){
//     if(ages[i]>=21){
//         canDrink.push(ages[i]);
//     }
// }
// console.log(canDrink);
// // >>> solution-2
// const canDrink = ages.filter(function(age) {
//     if(age >= 21){
//         return true;
//     }
// });
// >>> solution-3
const canDrink = ages.filter(age => age >= 21);
// console.log(canDrink);

// >>>>>> Filter retail companies

// const retallCompanies = companies.filter(function(company){
//     if(company.category === 'Finance'){
//         return true;
//     }
// });

const retallCompanies = companies.filter(company => company.category === 'Retail');

// >>>> get 80s companies

const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));

// >>> get companies then 10 years  or more
const lastedTenYears = companies.filter(company => (company.end - company.start >= 10));
 
// >>>>>>>> map <<<<<<<<<<<<<<<<<<<<<<<<<<<,
// // >>> Create array of company names
// const companyNames = companies.map(function(company){
//     return company.name;
// });

// const testMap = companies.map(function(company){
//     return `${company.name} [${company.start} - ${company.end}]`;
// });

// const testMap = companies.map(company => `${company.name} [${company.start} ${company.end}]`);
// console.log(testMap);

// const agesSquare = ages.map(age => Math.sqrt(age));
// const agesTimensTwo = ages.map(age => age * 2);
// console.log(agesTimensTwo);

// const ageMap = ages
//     .map(age => Math.sqrt(age))
//     .map(age => age * 2);
// console.log(ageMap);

// >>>>>>> Sort companies by start year <<<<<<<<<<<<<<<

// const sortCompanies = companies.sort(function(c1,c2){
//     if(c1.start > c2.start){
//         return 1;
//     }else{
//         return -1;
//     }
// // });
// const sortCompanies = companies.sort((a,b)=> (a.start > b.start ? 1 : -1));
// console.log(sortCompanies);

// >>>>>>>>>> Sort ages <<<<<<<<<<<<

// const sortAges = ages.sort((a, b)=> b - a);
// console.log(sortAges);

// >>>>>>>> Reduce <<<<<<<<<<<<<<<<<<<<<
// >> solution 1
// let ageSum = 0;
// for(let i=0;i<ages.length;i++){
//     ageSum += ages[i];
// }
// console.log(ageSum);

// >>>>> solution 2
// const ageSum = ages.reduce(function(total, age){
//     return total + age;
// },0);
// console.log(ageSum);


