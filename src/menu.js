import image1 from './food1.png';
import image2 from './food2.png';
import image3 from './food3.png';
import image4 from './food4.png';
import image5 from './food5.png';
import image6 from './food6.png';


const renderMenu = () => {
    const contentDiv = document.getElementById("content");
    contentDiv.textContent = "";

    const heading = document.createElement("h1");
    heading.textContent = "MENU";
    contentDiv.appendChild(heading);

    const menuDiv = document.createElement("div");
    menuDiv.id = "menu"
    contentDiv.appendChild(menuDiv);
 

    //imageOne is DOM element, image1 is the imported image, imageContent1 is img container
    const imageContent1 = document.createElement("div");

    const imageOne = document.createElement("img");
    imageOne.className = "food-img"; 
    imageOne.src = image1;
    
    const imageText1 = document.createElement("p");
    imageText1.innerHTML = "$14.3";
    
    menuDiv.appendChild(imageContent1);
    imageContent1.appendChild(imageOne);
    imageContent1.appendChild(imageText1);


    const imageContent2 = document.createElement("div");

    const imageTwo = document.createElement("img");
    imageTwo.className = "food-img"; 
    imageTwo.src = image2;
    
    const imageText2 = document.createElement("p");
    imageText2.innerHTML = "$11.7";
    
    menuDiv.appendChild(imageContent2);
    imageContent2.appendChild(imageTwo);
    imageContent2.appendChild(imageText2);

    const imageContent3 = document.createElement("div");

    const imageThree = document.createElement("img");
    imageThree.className = "food-img"; 
    imageThree.src = image3;
    
    const imageText3 = document.createElement("p");
    imageText3.innerHTML = "$23.3";
    
    menuDiv.appendChild(imageContent3);
    imageContent3.appendChild(imageThree);
    imageContent3.appendChild(imageText3);

    const imageContent4 = document.createElement("div");

    const imageFour = document.createElement("img");
    imageFour.className = "food-img"; 
    imageFour.src = image4;
    
    const imageText4 = document.createElement("p");
    imageText4.innerHTML = "$42";
    
    menuDiv.appendChild(imageContent4);
    imageContent4.appendChild(imageFour);
    imageContent4.appendChild(imageText4);

    const imageContent5 = document.createElement("div");

    const imageFive = document.createElement("img");
    imageFive.className = "food-img"; 
    imageFive.src = image5;
    
    const imageText5 = document.createElement("p");
    imageText5.innerHTML = "$15.6";
    
    menuDiv.appendChild(imageContent5);
    imageContent5.appendChild(imageFive);
    imageContent5.appendChild(imageText5);

    const imageContent6 = document.createElement("div");

    const imageSix = document.createElement("img");
    imageSix.className = "food-img"; 
    imageSix.src = image6;
    
    const imageText6 = document.createElement("p");
    imageText6.innerHTML = "$17.2";
    
    menuDiv.appendChild(imageContent6);
    imageContent6.appendChild(imageSix);
    imageContent6.appendChild(imageText6);

}
export default renderMenu;