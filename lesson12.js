
 

 
// >>>>>>>>>>> inBetween <<<<<<<<<<<<<<

// let arr = [1,2,3,4,5,6,7];

// function inBetween(num1, num2) {
//     return (value) => value>=3 && value<=6
// }


// arr.filter(inBetween(3,6));

// >>>>>>>>>>>>>>>>>> inArray <<<<<<<<<<<<<<<<<<

// let arr = [1,2,3,4,5,63,7];
// function inArray(arr){
//     return  (value) => arr.includes(value);
// }
// console.log(arr.filter(inArray([4,5,63,10])));

// >>>>>>>>>>>>  byField <<<<<<<<<<<<<<<<<<<<<<

// let users = [
//     { name: "John", age: 20, surname: "Johnson" },
//     { name: "Pete", age: 18, surname: "Peterson" },
//     { name: "Ann", age: 19, surname: "Hathaway" }
//   ];
// function byField(name){
//     return users.sort((a, b) => [a.name] > [b.name] ? 1 : -1);
// }
// console.log(byField('name'));


// >>>>>>>>>>>>>>>> username <<<<<<<<<<<<<<<<<

const users =[
    {
        user_id: 1,
        username: 'falonchi',
        password: 'bilmadim123'
    },
    {
        user_id: 2,
        username: 'pistonchi',
        password: 'biladigan123'
    },
    {
        user_id: 3,
        username: 'JohnWick',
        password: 'qwerty12345'
    },
]
const todos = [
    {
        todo_id: 1,
        todo_text: 'On the hand, we denoune with righteous',
        user_id: 3
    },
    {
        todo_id: 2,
        todo_text: 'salom Hammaga hush kelibsilar',
        user_id: 2
    },
    {
        todo_id: 3,
        todo_text: 'John Wick siz bilan tanishganimdan hursanman',
        user_id: 3
    },
]
register('pistonchi', 'biladigan123');
addtodo('pistonchi','bilmagan123','hello world');
console.log(users);



















// function isBigEnough(value) {
//     return value >= 10
//   }
  
// let filtered = [12, 5, 8, 130, 44].filter(isBigEnough);

// console.log();
  



















//   const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

//   function isPrime(num) {
//     for (let i = 2; num > i; i++) {
//       if (num % i == 0) {
//         return false;
//       }
//     }
//     return num > 1;
//   }
  
//   console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]
  
bb = {
    "squadName": "Super hero squad", // < here
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
      {
        "name": "Molecule Man", // < here
        "age": 29, // < here
        "secretIdentity": "Dan Jukes",
        "powers": [
          "Radiation resistance",
          "Turning tiny",
          "Radiation blast" // < here
        ]
      },
      {
        "name": "Madame Uppercut",
        "age": 39,
        "secretIdentity": "Jane Wilson",
        "powers": [
          "Million tonne punch",
          "Damage resistance",
          "Superhuman reflexes"
        ]
      },
      {
        "name": "Eternal Flame",
        "age": 1000000,
        "secretIdentity": "Unknown",
        "powers": [
          "Immortality", 
          "Heat Immunity",
          "Inferno",
          "Teleportation",
          "Interdimensional travel"
        ]
      }
    ]
  }

