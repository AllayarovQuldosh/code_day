
//>>>>>>>>> promise ----->>>>> collback ichma-ich bajariladi
/*
const asenkronFunksiya = function(son,cb) {
    const jami = son + 2;
    cb(jami);
}
asenkronFunksiya(2, function (jami){
    console.log(jami);
    asenkronFunksiya(4, function(jami){
        console.log(jami);
        asenkronFunksiya(5,function(jami){
            console.log(jami);
            asenkronFunksiya(12,function(jami){
                console.log(jami);

            });
        });
    });
});
*/
///>>>>>>>>>>>>>>> Assicevet
const user  = {id: 1,name:'User'};
const friends = [{id: 2,name: 'Friends1'},{id: 3,name: 'Friends2'}]

const getUser = () => {
    return new Promise((res,rej) => {
        setTimeout( () => {
            res(user);
        },2000);
    })
};
const getFriends = (userId) => {
    return new Promise((res,rej) => {
        setTimeout( () => {
            res(friends);
        },1000);
    })
};
// COLLBACK HELL ---usuli
/*
let userId;
getUser().then(function(friends){
    userId = user.id;
    getFriends(userId).then(function(friends){
        console.log(user);
        console.log(friends);
    })
})*/
// promise chain----usuli
/*
getUser()
    .then((user) => {
        return getFriends(user.id);
    })
    .then((friends) => {
        console.log(user);
        console.log(friends);
    })
// async/await-----usuli
async function asenkronOqim(){
    const user = await getUser()
    const friends = await getFriends()
    console.log(user);
    console.log(friends);
}
asenkronOqim();*/

async function asenkronOqim(){
    try{
        const user = await getUser()
        const friends = await getFriends()
        console.log(user);
        console.log(friends);
    }catch(e){
        console.log(e)
    }
}
asenkronOqim();















