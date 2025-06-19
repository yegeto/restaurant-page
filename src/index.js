import homePageCreator from "./homePage";

const contentLoader = (function () {
  const contentContainer = document.getElementById("content");
  const homePage = homePageCreator();

  contentContainer.appendChild(homePage);
})();
