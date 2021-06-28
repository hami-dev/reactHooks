import React, { useState } from "react";

const useTabs = (initialTab, allTabs) => {
    const [currentIndex, setCurrentIndex] = useState(initialTab);
    //useState는 최상위(at the Top Level)에서만 Hook을 호출해야 함

    if (!allTabs || !Array.isArray(allTabs)) {
        return;
    }
    return {
        currentItem: allTabs[currentIndex],
        changeItem: setCurrentIndex, //update the state
    };
};

export default useTabs;
