

const {User} = require("./index")
let user1 = new User("Quldosh", "Allayarov", "Tashkent", "allayarovquldosh@gmail.com", "+998901231122", "12345678");
let user2 = new User("Quldosh", "Allayarov", "Tashkent", "quldoshallayarov@gmail.com", "+998900444701", "87654321");


console.log(user1.getClient);
setTimeout(()=> {
    console.log(user2.getClient);
},3000);
 