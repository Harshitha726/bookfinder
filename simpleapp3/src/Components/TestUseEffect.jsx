import { useState, useEffect } from "react";

const TestUseEffect = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = 'You Clicked $(Count) times';
        console.log('Hello');
    },[]);

    return (
        <div>
            <button onClick={() => setCount((prevCount) => prevCount + 1)}>
                Click {count} times{" "}
            </button>
        </div>
    );
}

export default TestUseEffect ;

