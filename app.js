const toggleBtn = document.querySelector(".toggle-button");
const toggleBtnClose = document.querySelector(".toggle-button-close");

toggleBtn.addEventListener("click", () => {
    document.querySelector(".navigation").style.display = "block"
});

toggleBtnClose.addEventListener("click", () => {
    document.querySelector(".navigation").style.display = null
})

/* DOM.addEventListener("change", () => {
    if (window.matchMedia("(min-width: 800px)")) {
        document.querySelector(".navigation").style.display = "block"
    }
}) */