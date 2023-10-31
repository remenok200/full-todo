const { Task } = require('../models');
const { SOCKET_REFRESH_TASK_LIST } = require('../configs/constants');

module.exports.getAllUserTasks = async (req, res, next) => {
    try {
        const {tokenPayload: {userId}} = req;

        const userTasks = await Task.find({
            authorId: userId
        });

        return res.status(200).send({data: userTasks});
    } catch (error) {
        next(error);
    }
}

module.exports.createUserTask = async (req, res, next) => {
    try {
        const { body, tokenPayload: {userId} } = req;

        const task = await Task.create({...body, authorId: userId}); // NEED ATTENTION!
        
        const io = req.app.get('io');
        io.emit(SOCKET_REFRESH_TASK_LIST);

        return res.status(201).send({data: task,
                                        authorId: userId
        });
    } catch (error) {
        next(error);
    }
}

module.exports.deleteTask = async (req, res, next) => {
    try {
        const {params: {taskId}, tokenPayload: {userId} } = req;
        const deletedTask = await Task.findOneAndRemove({authorId: userId, _id: taskId});
        if(deletedTask) {
            const io = req.app.get('io');
            io.emit(SOCKET_REFRESH_TASK_LIST);

            return res.status(200).send({data: deletedTask});
        } else {
            return res.status(404).send({error: 'Task not found'});
        }
    } catch (error) {
        next(error);
    }
}