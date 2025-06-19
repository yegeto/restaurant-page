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

  contentContainer.appendChild(contactPage);

  homeBtn.addEventListener("click", () => {
    contentContainer.innerHTML = "";
    contentContainer.appendChild(homePage);
  });

  menuBtn.addEventListener("click", () => {
    contentContainer.innerHTML = "";
    contentContainer.appendChild(menuPage);
  });

  contactBtn.addEventListener("click", () => {
    contentContainer.innerHTML = "";
    contentContainer.appendChild(contactPage);
  });
})();
