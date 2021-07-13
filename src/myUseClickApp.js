import React, { useEffect, useRef } from "react";
import useClick from "./myUseClick";

import "./styles.css";

function App() {
    const sayHello = () => console.log("super cooool");
    const clickTitle = useClick(sayHello);
    return (
        <div className="App">
            <h1 ref={clickTitle}>Click me😎</h1>
        </div>
    );
}

export default App;
