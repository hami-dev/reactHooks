import React, { useEffect, useRef } from "react";

const useClick = (onClick) => {
    if (typeof onClick !== "function") {
        console.log("bye");
        return; //onClick이 함수가 아니라면 종료
    }
    const ref = useRef();
    useEffect(() => {
        // componentDidMount, componentDidUpdate
        console.log("hi im mounted");

        // ref가 unmount 시점에 null이어서
        // 변수를 안에서 copy 하지 않으면 warning이 발생함
        const element = ref.current;
        if (element) {
            element.addEventListener("click", onClick);
        }

        return () => {
            //ComponentWillUnmount때 실행 됨
            // useEffect에서 return하는 함수를 cleanup function 이라고 부름
            if (element) {
                console.log("unmount");
                element.removeEventListener("click", onClick);
            }
        }; //return
    }, []); //useEffect
    return ref; // == element
}; //useClick

export default useClick;
