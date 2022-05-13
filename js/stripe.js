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

// func displaying every sub link in the data array object
const displaySublinks =
  // iterating over the sub links so as to it's values and use
  sublinks
    .map((item) => {
      //   destructuring the needed properties of the sub link array object
      const { page, links } = item;
      // dynamically display this in the HTML and iterating over the link array object property because it's an array and then destructured it so as to use it's properties in the HTML
      return `<article>
    <h4>${page}</h4>
    <div class="sidebar-sublinks">
    ${links
      .map((link) => {
        const { label, icon, url } = link;
        return `<a href="${url}"><i class="${icon}"></i>${label}</a>`;
      })
      .join("")}
      </div>
    </article>`;
    })
    .join("");

// dynamically inserting the display sub link functionality into the aside sidebar
sidebar.innerHTML = displaySublinks;
