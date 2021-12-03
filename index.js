

const {generatorId, timer} = require("./helper")
class User{
    constructor(firstname, lastname, address, email, phone ,password) {
        this.id = generatorId()
        this.timer = timer()
        this.firstname = firstname;
        this.lastname = lastname;
        this.address = address;
        this.email = email;
        this.phone = phone;
        this.password = password;

    }

    get getClient(){
        return {
            ID: this.id, 
            Timer: this.timer,
            Firstname: this.firstname,
            Lastname: this.lastname,
            Address: this.address,
            Phone: this.phone,
        }
    }
    get getModerator(){
        return {
            ID: this.id, 
            Timer: this.timer,
            Firstname: this.firstname,
            Lastname: this.lastname,
            Address: this.address,
            Email: this.email,
            Phone: this.phone,
        }
    }
    get getAdmin(){
        return {
            ID: this.id, 
            Timer: this.timer,
            Firstname: this.firstname,
            Lastname: this.lastname,
            Address: this.address,
            Email: this.email,
            Phone: this.phone,
            Password: this.password,
        }
    }
}
module.exports = {User}