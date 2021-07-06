require('../src/db/mongoose')
const User = require('../src/models/user')


User.findByIdAndUpdate('60e38647632790cc7e894da5', {age: 1}).then((user) => {
    console.log(user)
    return User.countDocuments({ age:1})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})