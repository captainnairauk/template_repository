export function createMenuTab(){
    const contentDiv = document.getElementById("content");

    const menuDiv = document.createElement("div");
    menuDiv.classList.add("menu-content");

    const h2 = document.createElement("h2");
    h2.textContent = "Our Delicious Menu";

    const item1 = document.createElement("p");
    item1.textContent = "Pasta Carbonara - Creamy pasta with crispy bacon. $18";

    const item2 = document.createElement("p");
    item2.textContent = "Grilled Salmon - Fresh Salmon with seasonal vegetables. $24";

    const item3 = document.createElement("p");
    item3.textContent = "Chocolate Lava Cake - Decadent dessert with a molten center. $10";

    menuDiv.appendChild(h2);
    menuDiv.appendChild(item1);
    menuDiv.appendChild(item2);
    menuDiv.appendChild(item3);

    contentDiv.appendChild(menuDiv);
}
