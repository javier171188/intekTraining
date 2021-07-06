const add = (a,b) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if (a < 0 || b < 0){
                reject('Both numbers must be positive.')
            }

            resolve(a+b)
        }, 2000)
    })
}

const doWork = async () => {
    const sum = await add(1,99)
    const sum2 = await add(sum, 50)
    return sum3 = await  add(sum2, -3)

}

doWork().then((result) => {
    console.log('result', result)
}).catch((e) =>{
    console.log('e', e)
})