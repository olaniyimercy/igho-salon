"use strict";

/* =========================================
   1. SELECT ELEMENTS
========================================= */

const fullMenu = document.getElementById("full-menu");
const bookingModal = document.getElementById("booking-modal");
const spaceModal = document.getElementById("space-modal");
const bookingForm = document.getElementById("booking-form");

/* =========================================
   2. BODY SCROLL CONTROL
========================================= */

function updateBodyScroll() {
  const menuOpen = fullMenu.classList.contains("active");

  const modalOpen =
    bookingModal.classList.contains("active") ||
    spaceModal.classList.contains("active");

  document.body.classList.toggle("no-scroll", menuOpen || modalOpen);
}

/* =========================================
   3. TOGGLE FULL SCREEN MENU
========================================= */

function toggleMenu() {
  fullMenu.classList.toggle("active");

  updateBodyScroll();
}

/* =========================================
   4. TOGGLE MODALS
========================================= */

function toggleModal(modalId) {
  const modal = document.getElementById(modalId);

  if (!modal) return;

  modal.classList.toggle("active");

  updateBodyScroll();
}

/* =========================================
   5. BOOK FROM MENU
========================================= */

function bookFromMenu() {
  fullMenu.classList.remove("active");

  toggleModal("booking-modal");
}

/* =========================================
   6. BOOK FROM SPACE MODAL
========================================= */

function bookFromSpace() {
  spaceModal.classList.remove("active");

  bookingModal.classList.add("active");

  updateBodyScroll();
}

/* =========================================
   7. BOOKING FORM SUBMISSION
========================================= */

bookingForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const service = document.getElementById("service").value;

  const date = document.getElementById("date").value;

  const time = document.getElementById("time").value;

  const fullname = document.getElementById("fullname").value;

  const phone = document.getElementById("phone").value;

  alert(
    `Thank you, ${fullname}!\n\n` +
      `Your appointment request has been received.\n\n` +
      `Service: ${service}\n` +
      `Date: ${date}\n` +
      `Time: ${time}\n` +
      `Phone: ${phone}\n\n` +
      `Our team will contact you shortly to confirm.`,
  );

  bookingForm.reset();

  toggleModal("booking-modal");
});

/* =========================================
   8. CLOSE MODALS WHEN CLICKING OUTSIDE
========================================= */

document.querySelectorAll(".modal-overlay").forEach(function (modal) {
  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.classList.remove("active");

      updateBodyScroll();
    }
  });
});

/* =========================================
   9. ESCAPE KEY FUNCTIONALITY
========================================= */

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    fullMenu.classList.remove("active");

    bookingModal.classList.remove("active");

    spaceModal.classList.remove("active");

    updateBodyScroll();
  }
});

/* =========================================
   10. SET MINIMUM BOOKING DATE
========================================= */

const dateInput = document.getElementById("date");

const today = new Date();

const localDate = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
  .toISOString()
  .split("T")[0];

dateInput.min = localDate;
