import React from 'react';
import {connect} from 'react-redux';

const Counter = (props) => {

    const increment = () => {
        const action = {
            type: 'COUNTER_PLUS'
        }
        props.dispatch(action);
    }

    const decrement = () => {
        const action = {
            type: 'COUNTER_MINUS'
        }
        props.dispatch(action);
    }

    console.log(props);

    return (
        <>
            <h1>{props.counter}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </>
    );
}

const mapStateToProps = (state) => {
    return state;
}

const WrappedCounter = connect(mapStateToProps)(Counter);

export default WrappedCounter;

/*

connect - функція, яка приймає два аргументи (обидва опціональні) і підписує компоненту на оновлення стейту
- mapStateToProps - функція, в яку буде приходити ВЕСЬ стейт і mapStateToProps повертатиме тільки ту частину стейту, яка потрібна цій компоненті
- mapDispatchToProps

Каріювання функцій - трансформація функцій, щоб вони приймали аргументи не як f(a, b, c), f(a)(b)(c)

*/