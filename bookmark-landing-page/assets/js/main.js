const header = document.querySelector(".header");
const controlBtn = document.querySelector(".control .button");
console.log(controlBtn.innerHTML);

controlBtn.addEventListener("click", function () {
  header.classList.toggle("open");

  if (header.classList.contains("open")) {
    this.innerHTML = `<i class="fas fa-times"></i>`;
  } else {
    this.innerHTML = `<i class="fas fa-bars"></i>`;
  }
});
