
let id = 0

function generatorId(){
    return id += 1
}
function timer(){
    return new Date()//.getTime()
}
module.exports = {generatorId, timer}