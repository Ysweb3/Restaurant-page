import "./styles.css";

import renderHome from "./home"
import renderMenu from "./menu"
import renderAbout from "./about"

const homeBtn = document.getElementById("home-btn");
const menuBtn = document.getElementById("menu-btn");
const aboutBtn = document.getElementById("about-btn");

homeBtn.addEventListener("click",() =>{
    renderHome();
});
menuBtn.addEventListener("click",() =>{
    renderMenu();
});
aboutBtn.addEventListener("click",() =>{
    renderAbout();
});
renderHome();