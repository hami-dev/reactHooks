import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
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

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
