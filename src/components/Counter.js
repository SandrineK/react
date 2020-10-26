/*
 * const [a, b] = useState();
 * a = state object (getter)
 * b = update function (setter)
 *
 * const [currentStateValue, functionToSetNewStateValue] = useState(initialStateValue)
 * this syntax use javascript detructuring
 */

export default function Counter() {
    const [counter, setCounter] = useState(5);
    return <button onClick={() => setCounter(counter * 2)}>{counter}</button>;
}

function Button2() {
    const [counter, setCounter] = useState(0);
    return <button onClick={() => console.log(Math.random())}>console log random value</button>;
}


