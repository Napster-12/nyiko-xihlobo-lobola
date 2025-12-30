document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".section").forEach(sec => {
        sec.style.opacity = 0;
        sec.style.transform = "translateY(25px)";
        setTimeout(() => {
            sec.style.transition = "1s";
            sec.style.opacity = 1;
            sec.style.transform = "translateY(0)";
        }, 300);
    });
});
