import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
// import "./styles.css";

const App = () => {
    const myInput = useRef();
    setTimeout(() => {
        myInput.current?.focus();
        // 여기서 ? 는 optional Chaning 임
        // 앞의 평가 대상이 null 이나 undefined 이면 평가를 멈춘 후, undefined를 return함
        // 사용한 이유 : mount가 빨리 돼서 myInput.current 가 존재하기 전에 잡으려 해서...
        // 대체 가능한 방법 : useEffect 를 사용하여 mount가 끝난 후 focus 하기 -> 하단의 주석 코드 참고
        console.log(myInput.current);
    }, 3000);

    // useEffect(() => {
    //     setTimeout(() => {
    //         myInput.current.focus();
    //         console.log(myInput.current);
    //     }, 3000);
    // });

    return (
        <div className="App">
            <div>Hello~</div>
            <input ref={myInput} placeholder="focus on me" />
        </div>
    );
};

export default App;
