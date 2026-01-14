const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const revealPoint = 100;

        if (elementTop < windowHeight - revealPoint) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
// ===============================
// LIVE DATE & TIME (RIGHT STRIP)
// ===============================

function updateDateTime() {
    const now = new Date();

    const dateOptions = {
        day: "2-digit",
        month: "short",
        year: "numeric"
    };

    document.getElementById("date").innerText =
        now.toLocaleDateString("en-IN", dateOptions);

    document.getElementById("time").innerText =
        now.toLocaleTimeString("en-IN");
}

// update every second
setInterval(updateDateTime, 1000);
updateDateTime();

