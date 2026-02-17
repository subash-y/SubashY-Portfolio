document.getElementById("year").textContent = new Date().getFullYear();

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

//Resume Section

document.addEventListener("DOMContentLoaded", function () {
  const resumeBtn = document.querySelector(".resumebtn-js");
  const modal = document.getElementById("resumeModal");
  const viewBtn = document.getElementById("viewResume");
  const downloadBtn = document.getElementById("downloadResume");
  const closeBtn = document.getElementById("closeModal");

  const fileUrl = "resume/subashY.pdf";

  // OPEN MODAL
  resumeBtn.addEventListener("click", function () {
    modal.classList.add("active");
    document.body.style.overflow = "hidden"; // prevent scroll
  });

  // REUSABLE CLOSE FUNCTION
  function closeModal() {
    modal.classList.remove("active");
    document.body.style.overflow = "auto"; // restore scroll
  }

  // VIEW
  viewBtn.addEventListener("click", function () {
    window.open(fileUrl, "_blank");
    closeModal();
  });

  // DOWNLOAD
  downloadBtn.addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "Subash_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    closeModal();
  });

  // CANCEL BUTTON
  closeBtn.addEventListener("click", closeModal);

  // CLICK OUTSIDE CONTENT
  modal.addEventListener("click", function (e) {
    if (!e.target.closest(".resume-modal-content")) {
      closeModal();
    }
  });

  // ESC KEY CLOSE
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });
});

//Whatsapp

const message =
  "Thank you for reaching out me.\n I appreciate your interest and would be happy to discuss further.\n Please let me know the details.";
const phone = "919786333903";

const encodedMessage = encodeURIComponent(message);
document.getElementById("whatsappLink").href =
  `https://wa.me/${phone}?text=${encodedMessage}`;


  //Project open 



document.querySelectorAll(".project-card[data-url]").forEach(card => {
  card.addEventListener("click", () => {
    const url = card.dataset.url;
    window.open(url, "_blank", "noopener,noreferrer");
  });
});