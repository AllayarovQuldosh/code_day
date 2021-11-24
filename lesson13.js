
// >>>>>>>> JSON  type string

// const obj = {
//     name: 'John',
//     address: 'Chilonzor',
//     age: 12
// }

// // const json = JSON.stringify(obj);
// // console.log(json);


// const js = JSON.parse(obj);
// console.log(js);



// let room = {
//     number: 12
// };
// let meetup = {
//     title: "Conference",
//     occupiedBy: [{name: "John"},{name: "Alix"}],
//     place: room
// };

// room.occupiedBy = meetup;
// meetup.self = meetup;


// console.log(JSON.stringify(room, function replacer(key, value){
//     return (key === 'occupiedBy') ? undefined : value;
// }));

// console.log(JSON.stringify(meetup, function replacer(key,value){
//     console.log(key,value);

//     return (key === 'self' && key === 'place') ? true : key,value; 
// }));
// console.log(JSON.stringify(meetup, (key, value)=>{
//     (key == 'place') ? undefined : value;
// }))


// const obb = {
//     name: 'Koyal',
//     age: 23,
//     address: 'Chicago',
//     email: 'koyal@gmail.com',
//     phone: '+179001234'
// }

// const string = JSON.stringify(obb);
// const parsed = JSON.stringify(obb);
// parsed.name = 'John';
// parsed.age = 111;
// console.log(parsed);


// const obb = {
//     "squadName": "Super hero squad", // < here
//     "homeTown": "Metro City",
//     "formed": 2016,
//     "secretBase": "Super tower",
//     "active": true,
//     "members": [
//       {
//         "name": "Molecule Man", // < here
//         "age": 29, // < here
//         "secretIdentity": "Dan Jukes",
//         "powers": [
//           "Radiation resistance",
//           "Turning tiny",
//           "Radiation blast" // < here
//         ]
//       },
//       {
//         "name": "Madame Uppercut",
//         "age": 39,
//         "secretIdentity": "Jane Wilson",
//         "powers": [
//           "Million tonne punch",
//           "Damage resistance",
//           "Superhuman reflexes"
//         ]
//       },
//       {
//         "name": "Eternal Flame",
//         "age": 1000000,
//         "secretIdentity": "Unknown",
//         "powers": [
//           "Immortality", 
//           "Heat Immunity",
//           "Inferno",
//           "Teleportation",
//           "Interdimensional travel"
//         ]
//       }
//     ]
//   }


// let {squadName,members:[{name,age,powers:[,, r]}]} = obb
// console.log('>>>',squadName,'>>>',name,'>>>',age,'>>>',r);