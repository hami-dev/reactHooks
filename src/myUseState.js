import React, { useState } from "react";

import "./styles.css";

function myUseState() {
    const [item, setItem] = useState(1);
    const plusItem = () => setItem(item + 1);
    const minusItem = () => setItem(item - 1);
    return (
        <div className="App">
            <h1>item : {item}</h1>
            <button onClick={plusItem}>plus</button>
            <button onClick={minusItem}>minus</button>
        </div>
    );
}

export default myUseState;
