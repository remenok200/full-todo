import React, {useState, useEffect} from 'react';
import TodoList from '../components/TodoList';
// import { getTasks, createTask, deleteTask } from '../api/taskApi';
import { useNavigate } from 'react-router-dom';
import TodoForm from '../components/TodoForm';
import { getTaskRequest, createTaskRequest, deleteTaskRequest, logOutRequest } from '../actions/actionCreator';
import { connect } from 'react-redux';

const TodoPage = (props) => {
    const [todos, setTodos] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if(props.user) {
            props.getTaskRequest();
        }
    }, [props.user]);

    const getNewTd = (data) => {
        props.createTaskRequest({
            status: 'new',
            ...data
        })
    }

    const delTask = (id) => {
        props.deleteTaskRequest(id);
    }

    const logOutHandler = () => {
        props.logOutRequest();
    }

    return (
        <div>
            <button onClick={logOutHandler}>LOG OUT</button>
            <h1>Todo List</h1>
            <TodoForm sendData={getNewTd} />
            <TodoList todos={props.tasks} delCallback={delTask} />
        </div>
    );
}

const mapStateToProps = (state) => (state);

const mapDispatchToProps = {
    getTaskRequest,
    createTaskRequest,
    deleteTaskRequest,
    logOutRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);
