import React, { useEffect, useState } from "react";
import useTabs from "./myUseTabs";

import "./styles.css";

const content = [
    {
        tab: "탭1",
        content: "나는 section1이다~~~~~~~~~~~",
    },
    {
        tab: "탭2",
        content: "나는 section2이다!!!!!!!!!!!!!!!!!",
    },
];

function App() {
    const { currentItem, changeItem } = useTabs(0, content); //tab1 이 기본설정
    return (
        <div className="App">
            {content.map((section, index) => (
                <button onClick={() => changeItem(index)}>{section.tab}</button>
            ))}
            <div>{currentItem.content}</div>
        </div>
    );
}

export default App;
