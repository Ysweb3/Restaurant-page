import "./styles.css";

import RenderHome from "./home"
import RenderMenu from "./menu"
import RenderAbout from "./about"

const homeBtn = document.getElementById("home-btn");
const menuBtn = document.getElementById("menu-btn");
const aboutBtn = document.getElementById("about-btn");

homeBtn.addEventListener("click",() =>{
    RenderHome();
});
menuBtn.addEventListener("click",() =>{
    RenderMenu();
});
aboutBtn.addEventListener("click",() =>{
    RenderAbout();
});
RenderHome();