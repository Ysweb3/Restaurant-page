const renderHome = () => {
    const contentDiv = document.getElementById("content");
    contentDiv.textContent = "";
    //Heading
    const heading = document.createElement("h1");
    heading.textContent = "Pepper Pot Cafe";
    contentDiv.appendChild(heading);


    //Text box
    const textBox = document.createElement("div");
    textBox.setAttribute("id","text-content");
    contentDiv.appendChild(textBox);

    //Text para 1 
    const textP1 = document.createElement("p");
    textP1.textContent = "Pepper Pot Cafe is a cozy and inviting eatery nestled in the heart of the bustling downtown area. Known for its creative fusion of flavors and warm hospitality, Pepper Pot Cafe offers a unique dining experience that tantalizes the taste buds of patrons from near and far";
    textBox.appendChild(textP1);
    //Text para 2
    const textP2 = document.createElement("p");
    textP2.textContent = "The cafe's menu features a delightful array of dishes infused with the perfect balance of pepper-inspired spices, adding a zesty twist to classic favorites. Whether you're in the mood for a hearty breakfast, a satisfying lunch, or a relaxing dinner, Pepper Pot Cafe has something to satisfy every craving";
    textBox.appendChild(textP2);
}
export default renderHome;