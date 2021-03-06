import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const App = () => {
    const sayHello = () => console.log("hello๐");
    const [number, setNumber] = useState(0);
    const [aNumber, setANumber] = useState(0);

    // useEffect(sayHello);
    //useEffect = componentDidMount, componentWillUpdate, componentWillUnMount
    //useEffect ์ฒซ ๋ฒ์งธ ์ธ์ : component๊ฐ mount ๋์ ๋ ์คํ
    // 2๋ฒ์งธ ์ธ์๋ฅผ ์ฃผ์ง ์์ผ๋ฉด ๋ชจ๋  ๋ณํ๊ฐ ์ผ์ด๋  ๋ ๋ง๋ค ์คํ๋จ

    useEffect(sayHello, []);
    // useEffect ๋ ๋ฒ์งธ ์ธ์ : []์์ ์๋ ๊ฐ์ด "๋ณํ ๋๋ง"์คํ
    // mount ๋์ ๋์๋ง ์คํํ๊ณ , ๊ทธ ์ธ์๋ ์คํํ๊ณ ์ถ์ง ์์ผ๋ฉด []๋ฅผ ๋น์๋๋ฉด ๋จ

    // dependency is very very important!

    return (
        <div className="App">
            <div>Hello check the console</div>
            <button onClick={() => setNumber(number + 1)}>{number}</button>
            <button onClick={() => setANumber(aNumber + 1)}>{aNumber}</button>
        </div>
    );
};

export default App;
