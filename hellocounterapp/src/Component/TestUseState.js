import React, { useState } from 'react';

function TestUseState() {
    const click = useState('Hello Harshitha');
    return (
        <h1>Welcome  {click}</h1>
    );
}

export default TestUseState; 
