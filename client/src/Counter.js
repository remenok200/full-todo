import React from 'react';
import {connect} from 'react-redux';
import { incrementAction, decrementAction, changeStepAction, requestCounterFetching } from './actions/actionCreator';

const Counter = (props) => {
    const onChangeStep = ({target: {value}}) => {
        props.changeStep(Number(value));
    }
    console.log(props);

    const onClickHandler = () => {
        props.requestFetching(props.counter);
    }

    return (
        <>
            <h1>{props.counter}</h1>
            <input type="number" name="step" onChange={onChangeStep} value={props.step} />
            <button onClick={props.increment}>+</button>
            <button onClick={props.decrement}>-</button>

            <button onClick={onClickHandler}>Send counter to backend</button>
        </>
    );
}

const mapStateToProps = (state) => {
    return state;
}

// const mapDispatchToProps = (dispatch) => { // функціональний вигляд
//     return {
//         increment: () => dispatch(createActionIncrement()),
//         decrement: () => dispatch(createActionDecrement()),
//         changeStep: (step) => dispatch(changeStepAction(step))
//     }
// }

const mapDispatchToProps = { // об'єктний вигляд
    increment: incrementAction,
    decrement: decrementAction,
    changeStep: changeStepAction,
    requestFetching: requestCounterFetching
}

const WrappedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default WrappedCounter;

/*

connect - функція, яка приймає два аргументи (обидва опціональні) і підписує компоненту на оновлення стейту
- mapStateToProps - функція, в яку буде приходити ВЕСЬ стейт і mapStateToProps повертатиме тільки ту частину стейту, яка потрібна цій компоненті
- mapDispatchToProps - функція, яка повертає об'єкт, наповнений огорнутими діспатчем actionCreator'aми

Каріювання функцій - трансформація функцій, щоб вони приймали аргументи не як f(a, b, c), f(a)(b)(c)

*/



/*

Fetch юзерів.

const [users, setUsers] = useState([]);
const [isFetching, setIsFetching] = useState(true);
const [error, setError] = useState();


-- Запит пішов (fetching, loading)
-- Запит прийшов, все ок (дані)
-- Запит прийшов, все погано (помилка)

+ 1. ActionTypes
+ 2. ActionCreators
+ 3. Прописати нові стейти в редьюсері
+ 4. Прописати нові кейси в редьюсері
5. В пропси компоненти додаємо огорнені діспатчем action-creators

*/