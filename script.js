// function openModal(element) {
//   var modal = document.getElementById("myModal");
//   var modalImg = document.getElementById("img01");
//   var captionText = document.getElementById("caption");
//   modal.style.display = "block";
//   modalImg.src = element.src;
//   captionText.innerHTML = element.nextElementSibling.innerHTML;
// }

// function closeModal() {
//   var modal = document.getElementById("myModal");
//   modal.style.display = "none";
// }

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const images = document.querySelectorAll(".expandable-image");
  const closeBtn = document.querySelector(".close");

  images.forEach((image) => {
    image.addEventListener("click", function () {
      modal.style.display = "block";
      modalImg.src = this.src;
    });
  });

  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
