require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('60e38c20d010f3d32462bc9d').then(() => {
    return Task.countDocuments({ completed: false}) 
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})