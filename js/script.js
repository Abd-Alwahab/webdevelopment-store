let nav = document.querySelector(".header__nav");
let open__nav = document.querySelector(".open__nav");
let isOpened = false;

open__nav.addEventListener("click", () => {
  if (isOpened === false) {
    isOpened = true;
    nav.style.left = "0";
    open__nav.textContent = "Close";
  } else {
    isOpened = false;
    nav.style.left = "-100%";
    open__nav.textContent = "Open";
  }
});
