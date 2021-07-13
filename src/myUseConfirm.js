import ReactDOM from "react-dom";
import "./styles.css";

const useConfirm = (msg = "", onConfirm, onCancel) => {
    //msg의 default값, 확인 누를 때 실행, 취소 누를 때 실행
    if (!onConfirm || typeof onConfirm !== "function") {
        //onConfirm이 존재하지 않거나, 함수가 아닐 경우
        return; //종료
    }
    if (!onCancel || typeof onCancel !== "function") {
        return;
    }

    const confirmAction = () => {
        if (window.confirm(msg)) {
            //true이면
            onConfirm(); //callback 실시
        } else {
            onCancel(); //취소 눌렀을 때 실시
        }
    };
    return confirmAction;
};

export default useConfirm;
