import React, { useState } from 'react';
const Counter = () => {
    //Initializing the state or count variable with 0 value
    const [count, setCount] = useState(0);
    const [count1, setCount1]=  useState(10);
    const [mul, setMul] = useState(1);

       //Creating function for Increment, decrement and multiply count
       const add = () => {
        setCount(count + 5);
        }

        const sub = () => {
            setCount1(count1 - 1);
        }

        function multiply(){
            setMul(mul * 2);
        }

        return (
            <div>
                <h3>Application info</h3>
            <div>
                <h3>Counter APP</h3>
            </div>
            <div>
                {count}
                <br />
                <button onClick={add} > Increment +5 </button>
            </div>
            <div>
                {count1}
                <br />
                <button onClick={sub} > Decrement -1</button>
            </div>

            <div>
                {mul}
                <br />
                <button onClick={multiply} > mul*2</button>
            </div>
            </div>
        );
}

export default Counter;