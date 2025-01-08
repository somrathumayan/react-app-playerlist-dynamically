import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(10);
    const handleIncrease = () => {
        const newCount = count + 1;
        setCount(newCount)
    }

    const handleDecrease = () => {
        const newDecrease = count - 1;
        setCount(newDecrease)
    } 
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleDecrease}>Decrease</button>
        </div>
    );
};

export default Counter;