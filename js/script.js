document.getElementById("year").textContent = new Date().getFullYear();

const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

if (menuIcon && navbar) {
  menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
  });
}

const resumeBtn = document.querySelector(".resumebtn-js");
const modal = document.getElementById("resumeModal");

if (resumeBtn && modal) {
  const viewBtn = document.getElementById("viewResume");
  const downloadBtn = document.getElementById("downloadResume");
  const closeBtn = document.getElementById("closeModal");
  const fileUrl = "resume/subashY.pdf";

  resumeBtn.addEventListener("click", function () {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  });

  function closeModal() {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  }

  if (viewBtn) {
    viewBtn.addEventListener("click", function () {
      window.open(fileUrl, "_blank", "noopener,noreferrer");
      closeModal();
    });
  }

  if (downloadBtn) {
    downloadBtn.addEventListener("click", function () {
      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = "Subash_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      closeModal();
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", closeModal);
  }

  modal.addEventListener("click", function (e) {
    if (!e.target.closest(".resume-modal-content")) {
      closeModal();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });
}

const message =
  "Thank you for reaching out to me. I appreciate your interest and would be happy to discuss further. Please let me know the details.";
const phone = "919786333903";
const encodedMessage = encodeURIComponent(message);

const whatsappLinks = [
  document.getElementById("whatsappLink"),
  document.getElementById("whatsappLinkFooter")
];

whatsappLinks.forEach((link) => {
  if (link) {
    link.href = `https://wa.me/${phone}?text=${encodedMessage}`;
  }
});

document.querySelectorAll(".project-card[data-url]").forEach((card) => {
  card.addEventListener("click", () => {
    const url = card.dataset.url;
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  });
});
