import "./style.css";
import { createHomeTab } from "./home.js";
import { createMenuTab } from "./menu.js";
import { createAboutTab } from "./about.js";

document.addEventListener("DOMContentLoaded", () => {
  const contentDiv = document.getElementById("content");
  const homeTabButton = document.getElementById("home-tab");
  const menuTabButton = document.getElementById("menu-tab");
  const aboutTabButton = document.getElementById("about-tab");

  createHomeTab();

  homeTabButton.addEventListener("click", () => {
    contentDiv.innerHTML = "";
    createHomeTab();
  });

  menuTabButton.addEventListener("click", () => {
    contentDiv.innerHTML = "";
    createMenuTab();
  });

  aboutTabButton.addEventListener("click", () => {
    contentDiv.innerHTML = "";
    createAboutTab();
  });
});
