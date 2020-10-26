import React from 'react';

/*
 * const [a, b] = useState();
 * a = state object (getter)
 * b = update function (setter)
 *
 * const [currentStateValue, functionToSetNewStateValue] = useState(initialStateValue)
 * this syntax use javascript detructuring
 */
import {useState} from "react";

function Button(props) {
    const handleClick = () => props.onClickFunction(props.increment);
    return (
        <button onClick={handleClick}>
            +{props.increment}
        </button>
    );
}

function Display(props) {
    return (
        <div>{props.message}</div>
    );
}

export default function Counter() {
    const [counter, setCounter] = useState(0);
    const incrementCounter = (incrementValue) => setCounter(counter+incrementValue);
    return (
        <>
            <h1>Counter</h1>
            <Button onClickFunction={incrementCounter} increment={1}/>
            <Button onClickFunction={incrementCounter} increment={5}/>
            <Button onClickFunction={incrementCounter} increment={10}/>
            <Button onClickFunction={incrementCounter} increment={100}/>
            <Display message={counter}/>
        </>
    );
}


