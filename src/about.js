export function createAboutTab() {
  const contentDiv = document.getElementById("content");

  const aboutDiv = document.createElement("div");
  aboutDiv.classList.add("about-content");

  const h2 = document.createElement("h2");
  h2.textContent = "About Our Restaurant";

  const p1 = document.createElement("p");
  p1.textContent =
    "Our restaurant was founded with a passion for exquisite food and exceptional service. We believe in creating a memorable  dining experience for every guest.";

  const p2 = document.createElement("p");
  p2.textContent = "Located in the heart of the city, we are open seven days a week for lunch and dinner. We look forward to welcoming you!";
  
  aboutDiv.appendChild(h2);
  aboutDiv.appendChild(p1);
  aboutDiv.appendChild(p2);

  contentDiv.appendChild(aboutDiv);
}
