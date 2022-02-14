"use strict";

//**************/
//  hamburgur /
//**************/
const hamBtn = document.querySelector("#hamburger");
const hamMenuContainer = document.querySelector(".hamburger-menu");
const header = document.querySelector(".header");

hamBtn.addEventListener("click", function () {
   hamMenuContainer.classList.toggle("active-modal");
   header.classList.toggle("active-header");
});

header.addEventListener("click", function () {
   if (header.classList.contains("active-header")) {
      document.body.style.position = "fixed";
      hamBtn.style.right = "4.8rem";
   } else {
      document.body.style.position = "";
      hamBtn.style.right = "3.2rem";
   }
});

document
   .querySelector(".go-to-feature-tab")
   .addEventListener("click", function () {
      // close the ham menu
      document.querySelector(".header").classList.toggle("active-hamburger");
      // change the the close ham icon to normal
      document.querySelector("#hamburger").classList.toggle("open");
   });

//**************/
//    tabbed    /
//**************/
const tabbedContainer = document.querySelector(".feature-tabbed-container");
const tabbedBtns = document.querySelectorAll(".tab-btn");
const featureContents = document.querySelectorAll(".feature-tab");

tabbedContainer.addEventListener("click", function (e) {
   const clicked = e.target.closest(".tab-btn");
   console.log(clicked.dataset.tab);
   if (!clicked) return;

   tabbedBtns.forEach((t) => t.classList.remove("tabbed-active"));
   featureContents.forEach((a) => a.classList.remove("feature-tab--active"));

   clicked.classList.add("tabbed-active");
   document
      .querySelector(`.feature-tab--${clicked.dataset.tab}`)
      .classList.add("feature-tab--active");
});

//**************/
//    tabbed    /
//**************/
const qaContainer = document.querySelector(".questions-items");
const openCloseBtn = document.querySelectorAll(".open-close-icon");
const qaAnswer = document.querySelectorAll(".answer");

qaContainer.addEventListener("click", function (e) {
   const clicked = e.target.closest(".open-close-icon");
   const clickedNumber = clicked.dataset.qa;

   document
      .querySelector(`.answer--${clickedNumber}`)
      .classList.toggle("active-answer");

   document
      .querySelector(`.qa-icon-up--${clickedNumber}`)
      .classList.toggle("qa-icon-active");

   document
      .querySelector(`.qa-icon-down--${clickedNumber}`)
      .classList.toggle("qa-icon-off");
});

//*********************/
//    CONTACT TO US    /
//*********************/
const contactToUsInput = document.querySelectorAll(".input");
const errorIcon = document.querySelector(".input-error");
const contactToUsbtn = document.querySelector(".contact-us-btn");

contactToUsbtn.disabled = true;

contactToUsInput.forEach((inpEl) => {
   function activeForm(inpEL) {
      inpEL.parentElement.removeAttribute("data-error");
      errorIcon.style.display = "none";
      contactToUsbtn.disabled = false;
      contactToUsbtn.style.cursor = "pointer";
   }
   inpEl.addEventListener("input", (e) => {
      const text = e.target.value;
      const errorMsg = `Whoops, make sure it's an email`;

      if (text) {
         inpEl.parentElement.dataset.error = errorMsg;
         errorIcon.style.display = "flex";

         const regexMatch =
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(text);
         if (regexMatch) {
            activeForm(inpEl);
         }
      } else {
         activeForm(inpEl);
      }
   });
});

/// ********
// smooth scroll
///******** */
const featureLinks = document.querySelectorAll(".go-to-feature-tab");
featureLinks.forEach((l) =>
   l.addEventListener("click", function (e) {
      e.preventDefault();
      document
         .querySelector(".feature-section")
         .scrollIntoView({ behavior: "smooth" });
   })
);
