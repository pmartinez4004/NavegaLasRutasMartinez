import React, { useState } from 'react';
import "./Counter.css"

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
        <div>
            <span className='tituloContador'> Indique Cantidad </span>
            <div className='moduloConteo'>
                <button onClick={decrement}>-</button>
                <p className='displayContador'>{count}</p>
                <button onClick={increment}>+</button>
            </div>
        </div>
    );
};

export default Counter;