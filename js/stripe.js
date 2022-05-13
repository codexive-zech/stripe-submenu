// import extended modules to be used
import getElement from "../utils/getElement.js";
import sublinks from "./data.js";

// target element that will take in action and effect
const toggleBtn = getElement(".toggle-btn");
const closeBtn = getElement(".close-btn");
const sidebarWrapper = getElement(".sidebar-wrapper");
const sidebar = getElement(".sidebar-links");
const nav = getElement(".nav");
const hero = getElement(".hero");
const submenu = document.querySelector(".submenu");
const linkBtns = [...document.querySelectorAll(".link-btn")];

// listen for a click event on the toggle button so as to display the sidebar containing links
toggleBtn.addEventListener("click", () => {
  sidebarWrapper.classList.add("show");
});

// listen for a click event on the close button so as to display the sidebar containing links
closeBtn.addEventListener("click", () => {
  sidebarWrapper.classList.remove("show");
});
