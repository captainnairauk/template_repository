import restaurantImg from "./images/restaurant.png";
export function createHomeTab() {
  const contentDiv = document.getElementById("content");

  const heroDiv = document.createElement("div");
  heroDiv.classList.add("hero");
  const heroImg = document.createElement("img");
  heroImg.src = restaurantImg;
  heroImg.alt = "A beautiful plate of food from our restaurant";
  heroDiv.appendChild(heroImg);

  const mainTextDiv = document.createElement("div");
  mainTextDiv.classList.add("main-text");
  const h1 = document.createElement("h1");
  h1.textContent = "Welcome to Our Wonderful Restaurant";
  const p1 = document.createElement("p");
  p1.textContent =
    "Experience a culinary journey like no other. We use only freshest locally-sourced ingredients to create delicious dishes that will delight your sense. Whether you're looking for a casual meal or a fine-dining experience, our menu has something for everyone.";
  const p2 = document.createElement("p");
  p2.textContent =
    "Come and taste the difference that passion and quality make.";

  mainTextDiv.appendChild(h1);
  mainTextDiv.appendChild(p1);
  mainTextDiv.appendChild(p2);

  contentDiv.appendChild(heroDiv);
  contentDiv.appendChild(mainTextDiv);
}
