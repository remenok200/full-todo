import React, {useState, useEffect} from 'react';
import TodoList from '../components/TodoList';
import { getTasks, createTask } from '../api/taskApi';
import { authUser } from '../api/userApi';
import { useNavigate } from 'react-router-dom';
import TodoForm from '../components/TodoForm';

const TodoPage = (props) => {
    const [todos, setTodos] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        if(!props.user) {
            // return navigate('/');
            const token = localStorage.getItem('token');
            if(token) {
                // робимо запит на сервер для отримання юзера
                authUser(token)
                .then(userData => {
                    props.sendUser(userData.data);
                })
                .catch(error => {
                    return navigate('/');
                })
            } else {
                // перенаправляємо на логін
                return navigate('/');
            }
        } else {
            getTasks(props.user._id)
            .then(result => {
                setTodos(result.data);
            })
            .catch(error => {
                console.error(error);
            })
        }

        /*
        НА ФРОНТЕНДІ:
        1. Перевіряємо, чи є у нас об'єкт юзера
        2. Якщо є - все ок, працюємо
        3. Якщо немає об'єкту юзера - дивимось у localStorage, чи є у нас токен
        4. Якщо токен є - беремо його і йдемо на сервер, перевіряємо, чи токен валідний, чи ні, якщо токен валідний - відправляємо об'єкт юзера у відповідь
        5. Якщо токен невалідний - повертаємо помилку з сервера, на фронті ловимо помилку і у відповідь на неї перенаправляємо користувача на логін
        6. Якщо токена немає - перенаправлямось на логін
        */
    }, [props.user]);

    const getNewTd = (data) => {
        createTask({
            authorId: props.user._id,
            status: 'new',
            ...data
        })
        .then(({data: createdTask}) => {
            const newTodo = [...todos, createdTask];
            setTodos(newTodo);
        })
        .catch(error => {
            console.error(error);
        })
    }

    return (
        <div>
            <h1>Todo List</h1>
            <TodoForm sendData={getNewTd} />
            <TodoList todos={todos} />
        </div>
    );
}

export default TodoPage;
