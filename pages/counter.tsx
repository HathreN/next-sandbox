'use client';

import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <div className=""></div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
}