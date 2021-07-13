import React, { useEffect, useRef } from "react";
import useConfirm from "./myUseConfirm";

import "./styles.css";

const App = () => {
    const deleteWorld = () => console.log("Bye world...");
    const rejectDelete = () => console.log("save the world");
    const confirmDelete = useConfirm("정말로..?", deleteWorld, rejectDelete);
    return (
        <div className="App">
            <h1>Hello world🌎</h1>
            <button onClick={confirmDelete}>BOOOOOM</button>
        </div>
    );
};

export default App;
