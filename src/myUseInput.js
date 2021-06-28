import React, { useState } from "react";

// 리액트 훅을 사용함으로써 다른 function에서 이벤트를 처리 할 수 있음
// 그래서 이벤트를 분리된 파일, 다른 엔티티에 연결해서 처리 가능!

const useInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);
    const onChange = (event) => {
        const {
            target: { value },
        } = event;

        let willUpdate = true;

        //functino이 아니라 다른 타입이 들어오면
        if (typeof validator === "function") {
            //이 줄에서 에러가 남
            willUpdate = validator(value);
        }
        if (willUpdate) {
            setValue(value);
        }
    };
    return { value, onChange };
};

export default useInput;
