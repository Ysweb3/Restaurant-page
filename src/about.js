import map from './map.jpg';

const renderAbout = () => {
    const contentDiv = document.getElementById("content");
    contentDiv.textContent = "";
    const heading = document.createElement("h1");
    heading.textContent = "Contact";
    contentDiv.appendChild(heading);

    //Text box
    const textBox = document.createElement("div");
    textBox.setAttribute("id","map-container");
    contentDiv.appendChild(textBox);
    textBox.innerHTML = "Contact - 123456789"

    const mapImg = document.createElement("img");
    mapImg.className = "map-img"; 
    mapImg.src = map;
    textBox.appendChild(mapImg)


}
export default renderAbout;