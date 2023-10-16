import React from 'react';
import {connect} from 'react-redux';
import { incrementAction, decrementAction } from './actions/actionCreator';

const Counter = (props) => {
    // const increment = () => {
    //     props.dispatch(createActionIncrement());
    // }

    // const decrement = () => {
    //     props.dispatch(createActionDecrement());
    // }

    console.log(props);

    return (
        <>
            <h1>{props.counter}</h1>
            <button onClick={props.increment}>+</button>
            <button onClick={props.decrement}>-</button>
        </>
    );
}

const mapStateToProps = (state) => {
    return state;
}

// const mapDispatchToProps = (dispatch) => { // функціональний вигляд
//     return {
//         increment: () => dispatch(createActionIncrement()),
//         decrement: () => dispatch(createActionDecrement())
//     }
// }

const mapDispatchToProps = { // об'єктний вигляд
    increment: incrementAction,
    decrement: decrementAction
}

const WrappedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default WrappedCounter;

/*

connect - функція, яка приймає два аргументи (обидва опціональні) і підписує компоненту на оновлення стейту
- mapStateToProps - функція, в яку буде приходити ВЕСЬ стейт і mapStateToProps повертатиме тільки ту частину стейту, яка потрібна цій компоненті
- mapDispatchToProps - функція, яка повертає об'єкт, наповнений огорнутими діспатчем actionCreator'aми

Каріювання функцій - трансформація функцій, щоб вони приймали аргументи не як f(a, b, c), f(a)(b)(c)

*/