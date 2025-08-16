const btn = document.getElementById("toggleBtn");
btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    btn.textContent = "☀️ Mode Terang";
  } else {
    btn.textContent = "🌙 Mode Gelap";
  }
});