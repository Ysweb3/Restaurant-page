const RenderMenu = () => {
const contentDiv = document.getElementById("content");
contentDiv.textContent = "";
const heading = document.createElement("h1");
heading.textContent = "MENU";
contentDiv.appendChild(heading);
}
export default RenderMenu;