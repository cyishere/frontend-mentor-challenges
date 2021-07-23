/*==================== NAV CONTROL =======================*/
const logo = "/assets/images/logo-bookmark.svg";
const logoAlt = "/assets/images/logo-bookmark-alt.svg";

const header = document.querySelector(".header");
const controlBtn = document.querySelector(".control .button");
const logoContainer = document.querySelector(".logo img");

controlBtn.addEventListener("click", function () {
  header.classList.toggle("open");

  if (header.classList.contains("open")) {
    logoContainer.setAttribute("src", logoAlt);
    this.innerHTML = `<i class="fas fa-times"></i>`;
  } else {
    logoContainer.setAttribute("src", logo);
    this.innerHTML = `<i class="fas fa-bars"></i>`;
  }
});

/*==================== TAB CONTROL =======================*/
const tabs = document.querySelectorAll(".features__item");
const tabContents = document.querySelectorAll(".features__content");

const removeActive = () => {
  tabs.forEach((tab) => tab.classList.remove("active"));
  tabContents.forEach((content) => content.classList.remove("active"));
};

tabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    removeActive();
    this.classList.toggle("active");
    const tabNum = this.dataset.feature;
    const tabContent = document.getElementById(`feature${tabNum}`);
    tabContent.classList.add("active");
  });
});

/*==================== FAQ =======================*/
const questions = document.querySelectorAll(".fqa__item-q");

questions.forEach((q) => {
  q.addEventListener("click", function () {
    this.parentElement.classList.toggle("open");
  });
});

/*==================== CONTACT =======================*/
const contactForm = document.getElementById("contactForm");

const validEmail = (email) => {
  const trimedEmail = email.trim();

  const regEx =
    /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;

  return trimedEmail.match(regEx) ? true : false;
};

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = this.email.value;

  if (email.trim() === "" || !validEmail(email)) {
    this.email.parentElement.classList.add("error");
  } else {
    this.email.value = "";
    alert("Thank you for contact us!");
  }
});
