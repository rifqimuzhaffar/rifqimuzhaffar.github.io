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

    // Validasi form sebelum pengiriman
    if (validateForm()) {
      const data = new FormData(form);
      const action = e.target.action;

      fetch(action, {
        method: "POST",
        body: data,
      }).then(() => {
        alert("Send Success!");

        // Setel nilai input menjadi kosong setelah pengiriman berhasil
        resetFormInputs();
      });
    } else {
      alert("Please fill in all fields.");
    }
  });

  function validateForm() {
    // Validasi setiap input di dalam form
    const inputs = form.querySelectorAll("input[name]");
    for (const input of inputs) {
      if (!input.value.trim()) {
        return false; // Jika ada input yang kosong, kembalikan false
      }
    }
    return true; // Jika semua input terisi, kembalikan true
  }

  function resetFormInputs() {
    // Setel nilai input menjadi kosong
    const inputs = form.querySelectorAll("input[name]");
    for (const input of inputs) {
      input.value = "";
    }
  }
});
