const oneTimeBtn = document.getElementById("oneTimeBtn");
const monthlyBtn = document.getElementById("monthlyBtn");

oneTimeBtn.addEventListener("click", () => {
  oneTimeBtn.classList.add("active");
  monthlyBtn.classList.remove("active");
});

monthlyBtn.addEventListener("click", () => {
  monthlyBtn.classList.add("active");
  oneTimeBtn.classList.remove("active");
});


document.addEventListener("DOMContentLoaded", function () {
    // Ensure Navbar Toggler Works
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector("#navbarNav");

    navbarToggler.addEventListener("click", function () {
        navbarCollapse.classList.toggle("show");
    });

    // Ensure Hero Video Loads Correctly
    const heroVideo = document.getElementById("hero-video");
    if (heroVideo) {
        heroVideo.play().catch(err => console.warn("Video autoplay prevented:", err));
    }
});
