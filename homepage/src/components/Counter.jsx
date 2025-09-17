import { useState, useEffect } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `Count is ${count}`;
    });
    
    return(
        <>
            <p> Bạn đã nhấn {count} lần.</p>
            <button onClick={() => setCount(count + 1)}>Bấm</button>

            <Greeting />
        </>
    );
}