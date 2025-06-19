import "./styles.css";
import contactPageCreator from "./contactPage";
import homePageCreator from "./homePage";
import menuPageCreator from "./menuPage";

(function () {
  const contentContainer = document.getElementById("content");
  const homeBtn = document.getElementById("home-button");
  const menuBtn = document.getElementById("menu-button");
  const contactBtn = document.getElementById("contact-button");
  const homePage = homePageCreator();
  const menuPage = menuPageCreator();
  const contactPage = contactPageCreator();

  contentContainer.appendChild(homePage);
  homeBtn.classList.add("selected");

  homeBtn.addEventListener("click", () => {
    contentContainer.innerHTML = "";
    contentContainer.appendChild(homePage);
    homeBtn.classList.add("selected");
    contactBtn.classList.remove("selected");
    menuBtn.classList.remove("selected");
  });

  menuBtn.addEventListener("click", () => {
    contentContainer.innerHTML = "";
    contentContainer.appendChild(menuPage);
    menuBtn.classList.add("selected");
    homeBtn.classList.remove("selected");
    contactBtn.classList.remove("selected");
  });

  contactBtn.addEventListener("click", () => {
    contentContainer.innerHTML = "";
    contentContainer.appendChild(contactPage);
    contactBtn.classList.add("selected");
    menuBtn.classList.remove("selected");
    homeBtn.classList.remove("selected");
  });
})();
