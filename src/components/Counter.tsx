// import { useState } from "react";

// type CounterProps = {
//     initialValue: number
// }

// const Counter = (props: CounterProps) => {
//     const { initialValue } = props
//     const [count, setCount] = useState(initialValue)

//     return (
//         <div>
//             <p>カウント: {count}</p>
//             <button onClick={() => setCount(count - 1)}>-</button>
//             <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
//             <button onClick={() => setCount(count + 10)}>+10</button>
//             <button onClick={() => setCount(count - 10)}>-10</button>
//             <button onClick={() => setCount(initialValue)}>リセット</button>
//         </div>
//     )
// }

import { useReducer } from "react";

type Action = 'DECREMENT' | 'INCREMENT' | 'DOUBLE' | 'RESET'

const reducer = (currentCount: number, action: Action) => {
    switch (action) {
        case 'DECREMENT':
            return currentCount - 1
        case 'INCREMENT':
            return currentCount + 1
        case 'DOUBLE':
            return currentCount * 2
        case 'RESET':
            return 0
        default:
            return currentCount
    }
}

type CounterProps = {
    initialValue: number
}
const Counter = (props: CounterProps) => {
    const { initialValue } = props
    const [count, dispatch] = useReducer(reducer, initialValue)

    return (
        <div>
            <p>カウント: {count}</p>
            <button onClick={() => dispatch('DECREMENT')}>-</button>
            <button onClick={() => dispatch('INCREMENT')}>+</button>
            <button onClick={() => dispatch('DOUBLE')}>×2</button>
            <button onClick={() => dispatch('RESET')}>リセット</button>
        </div>
    )
}

export default Counter