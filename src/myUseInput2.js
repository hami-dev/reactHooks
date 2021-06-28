import React, { useState } from "react";
import useInput from "./myUseInput";

import "./styles.css";

function App() {
    // const maxLen = (value) => value.length < 15;
    const maxLen = (value) => !value.includes("@");
    const name = useInput("name : ", maxLen);
    // console.log({ ...name });
    return (
        <div className="App">
            <h1>HELLO</h1>
            {/* <input placeholder="Name" value={name.value} onChange={name.onChange} /> */}
            <input placeholder="Name" {...name} />
        </div>
    );
}

export default App;
