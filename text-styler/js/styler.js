const buttons = {
    text: document.querySelector(".text"),
    color: document.querySelector(".color"),
    flex: document.querySelector(".flex"),
};

const stylers = {
    text: document.querySelector(".text-styler"),
    color: document.querySelector(".color-styler"),
    flex: document.querySelector(".flex-styler"),
};

// 모두 숨기는 함수
function hideAllStylers() {
    Object.values(stylers).forEach((styler) => {
        styler.classList.remove("block");
    });
}

// 클릭 이벤트 연결
Object.keys(buttons).forEach((key) => {
    buttons[key].addEventListener("click", () => {
        const targetStyler = stylers[key];
        const isVisible = targetStyler.classList.contains("block");

        // 이미 보이면 숨기고, 아니면 그것만 보이게
        if (isVisible) {
            targetStyler.classList.remove("block");
        } else {
            hideAllStylers();
            targetStyler.classList.add("block");
        }
    });
});
