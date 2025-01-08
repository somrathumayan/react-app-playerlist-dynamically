import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(1);
    const handleIncrease = () => {
        const newCount = count + 1;
        setCount(newCount)
    }
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={handleIncrease}>Increase</button>
        </div>
    );
};

export default Counter;