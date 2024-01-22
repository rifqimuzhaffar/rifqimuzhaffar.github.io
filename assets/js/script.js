// Scroll Reveal
const scroll = ScrollReveal({
  distance: "65px",
  duration: 2600,
  delay: 450,
  reset: true,
});

scroll.reveal(".profile", { delay: 200, origin: "left" });
scroll.reveal(".description", { delay: 400, origin: "right" });
scroll.reveal(".menu-container", { delay: 400, origin: "top" });

// hide menu using uncheckbox
const MenuBar = document.querySelector(".menu");
const checkbox = document.querySelector(".toggle");

document.querySelector(".menu ul").addEventListener("click", (e) => {
  const targetClass = e.target.getAttribute("data-target");
  if (targetClass) {
    document.querySelector(targetClass).checked = false;
    console.log("Checkbox unchecked!");
  }
});

// Kirim Form Feedback
window.addEventListener("load", function () {
  const form = document.getElementById("my-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: "POST",
      body: data,
    }).then(() => {
      alert("Send Success!");
    });
  });
});
