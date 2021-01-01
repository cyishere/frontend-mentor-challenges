const primaryShareBtn = document.getElementById("primaryShareBtn");
const secondaryShareBtn = document.getElementById("secondaryShareBtn");
const shareBtns = document.querySelector(".share-control");
const articlePreviewMeta = document.querySelector(".article-preview_meta");
const mobileShareControl = document.querySelector(".mobile-share-control");

const openShareButtons = () => {
  primaryShareBtn.classList.toggle("active");
  secondaryShareBtn.classList.toggle("active");
  shareBtns.classList.toggle("show");
  articlePreviewMeta.classList.toggle("hide");
  mobileShareControl.classList.toggle("show");

  if (secondaryShareBtn.classList.contains("active")) {
    secondaryShareBtn.innerHTML = '<i class="fas fa-times"></i>';
  } else {
    secondaryShareBtn.innerHTML = '<i class="fas fa-share"></i>';
  }
};

primaryShareBtn.addEventListener("click", openShareButtons);
secondaryShareBtn.addEventListener("click", openShareButtons);
