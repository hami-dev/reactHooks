import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const App = () => {
    const sayHello = () => console.log("hello🖐");
    const [number, setNumber] = useState(0);
    const [aNumber, setANumber] = useState(0);

    // useEffect(sayHello);
    //useEffect = componentDidMount, componentWillUpdate, componentWillUnMount
    //useEffect 첫 번째 인자 : component가 mount 됐을 때 실행
    // 2번째 인자를 주지 않으면 모든 변화가 일어날 때 마다 실행됨

    useEffect(sayHello, []);
    // useEffect 두 번째 인자 : []안에 있는 값이 "변할때만"실행
    // mount 됐을 때에만 실행하고, 그 외에는 실행하고싶지 않으면 []를 비워두면 됨

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
