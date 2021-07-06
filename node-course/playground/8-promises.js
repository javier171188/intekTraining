
//Callback way*************
/*
const doWorkCallback = (callback) => {
    setTimeout(() => {
        callback('This is my error!', [1,4,7])
    }, 2000)
}

doWorkCallback((error, result) => {
    if (error){
        return console.log(error)
    }
    console.log(result)
})*/


//Simple promise
/*const doWorkPromises = new Promise( (resolve, reject) => {
    setTimeout(() => {
        //resolve([7,4,1])
        reject('Things went wrong!')
    }, 2000)
})

doWorkPromises.then( (result) => {
    console.log('Success!', result)
}).catch( (error) => {
    console.log('Error!',error)
})*/


//Promise chaining
const add = (a,b) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(a+b)
        }, 2000)
    })
}


add(1,1).then((sum) => {
    console.log(sum)
    return add(sum, 4)
}).then((sum2) => {
    console.log(sum2)
}).catch((e) => {
    console.log(e)
})
