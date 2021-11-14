//class
 

function createID(number){
    let ids = [];
    for(let i=0;i<number;i++){
        ids.push(`${Date.now()} ${i}`);
    }
    return ids;
}
console.log("IDS: ",createID( 5));

function createEMAILS(arr){
    const emails = [];
    for(let i = 1; i < arr.length; i++){
        emails.push(`${arr[i]}@gmail.com`);
    }
    return emails;
}

function cerateUSER(number) {
    const usernames = [];
    for(let i = 1;i <= number; i++){
        usernames.push(`user${i}`);
    }
    return usernames;
}
const usernames = cerateUSER(5);
console.log('EMEILS: ',createEMAILS(usernames));

function createPASSWORD(users){
    const passwords = [];
    for(let i = 0; i < users.length; i++){
        passwords.push(`${i+1} ${Date.now()} ${users[i]}`);
    }
    return passwords;
}
console.log('PASSWORD: ',createPASSWORD(usernames));

