import React, { useEffect, useRef } from "react";
import useHover from "./myUseHover";

import "./styles.css";

const App = () => {
    const sayHello = () => console.log("hover");
    const hoverTitle = useHover(sayHello);
    return (
        <div className="App">
            <h1 ref={hoverTitle}>mouse enter😎</h1>
        </div>
    );
};

export default App;
