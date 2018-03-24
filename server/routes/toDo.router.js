let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let toDoSchema = new Schema({
    description: {type: String, required: true },
    status: {type: Boolean, default: false}
});

let Task = mongoose.model('tasks', toDoSchema);

//POST
router.post('/', (req, res)=>{
    console.log('POST to /tasks req.body = ', req.body);
    let taskToAdd = new Task (req.body);
    taskToAdd.save((err, savedTask )=>{
        if(err){
            console.log('cannot post', err);
            res.sendStatus(500);
        }else{
            console.log('new task added!', savedTask);
            res.sendStatus(201);
        }
    })
});

//GET
router.get('/', (req, res)=>{
    console.log('GET tasks');
    Task.find({}, (err, foundTask )=>{
        if(err){
            console.log('cannot find task', err);
        } else {
            console.log('got the task!');
            res.send(foundTask);
        }
    })
});

//DELETE
    router.delete('/:id', (req, res)=>{
        console.log('DELETE tasks');
        let taskId = req.params.id;
        Task.findByIdAndRemove(taskId, (err, removeTask)=>{
            if(err){
                console.log('error deleting task', err);
                res.sendStatus(500);
            } else {
                console.log('deleted task');
                res.sendStatus(200);
            }
        })

    })



module.exports = router;