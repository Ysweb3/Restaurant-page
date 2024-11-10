const RenderAbout = () => {
const contentDiv = document.getElementById("content");
contentDiv.textContent = "";
const heading = document.createElement("h1");
heading.textContent = "ABOUT";
contentDiv.appendChild(heading);
console.log("HELLO")
}
export default RenderAbout;