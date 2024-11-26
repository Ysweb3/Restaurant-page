const renderAbout = () => {
    const contentDiv = document.getElementById("content");
    contentDiv.textContent = "";
    const heading = document.createElement("h1");
    heading.textContent = "ABOUT";
    contentDiv.appendChild(heading);

}
export default renderAbout;