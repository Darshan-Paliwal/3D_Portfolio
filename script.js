document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector("h1 span");
  setInterval(() => {
    title.style.color = title.style.color === "#00c3ff" ? "#ff0080" : "#00c3ff";
  }, 1500);
});