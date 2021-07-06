require('../src/db/mongoose')
const Task = require('../src/models/task')

/*Task.findByIdAndDelete('60e38c20d010f3d32462bc9d').then(() => {
    return Task.countDocuments({ completed: false}) 
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})*/

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments( {completed: false })
    return count
}

deleteTaskAndCount('60e36493ea6b52a0a4838ee6').then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})