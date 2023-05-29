// for up button 
document.addEventListener("DOMContentLoaded", () => {
    let goUpBtn = document.querySelector(".btn-up");

    window.onscroll = function () {
        if (window.pageYOffset > 600) {
            goUpBtn.style.display = "block"
        } else {
            goUpBtn.style.display = "none"
        }
    }

    // smooth scroll up
    goUpBtn.addEventListener("click", function () {
        window.scrollBy({
            top: -document.documentElement.scrollHeight,
            behavior: "smooth"
        })
    })
});