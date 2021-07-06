import React, { useState } from "react";
import useTitle from "./myUseTitle";

import "./styles.css";

const App = () => {
    const titleUpdater = useTitle("로딩중...");
    setTimeout(() => titleUpdater("useTitle어렵당"), 3000); //3초 뒤에

    return (
        <div className="App">
            <div>위의 타이틀을 보시오! ☝☝</div>
        </div>
    );
};

export default App;
