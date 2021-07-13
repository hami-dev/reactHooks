import React, { useEffect, useRef } from "react";

const useHover = (onHover) => {
    if (typeof onHover !== "function") {
        console.log("bye");
        return; //onClick이 함수가 아니라면 종료
    }
    const ref = useRef();
    useEffect(() => {
        console.log("hi im mounted");

        const element = ref.current;
        if (element) {
            element.addEventListener("mouseenter", onHover);
        }

        return () => {
            if (element) {
                console.log("unmount");
                element.removeEventListener("mouseenter", onHover);
            }
        }; //return
    }, []); //useEffect
    return ref; // == element
}; //useHover

export default useHover;
