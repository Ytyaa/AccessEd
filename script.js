const aside = document.querySelector(".aside");
const toggleBtn = document.getElementById("toggleAside");
const asideBtn = document.querySelectorAll(".aside-button");

toggleBtn.addEventListener("click", () => {
  aside.classList.toggle("collapsed");
});

asideBtn.forEach((asBtn) => {
  asBtn.addEventListener("click", () => {
    const asideButtonActive = document.querySelector(".aside-button--active");
    if (asideButtonActive) {
      asideButtonActive.classList.remove("aside-button--active");
    }
    asBtn.classList.add("aside-button--active");
  });
});
