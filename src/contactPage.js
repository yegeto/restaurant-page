import createContactCard from "./utils/createContactCard";

export default function contactPage() {
  const pageContainer = document.createElement("div");
  const header = document.createElement("h1");

  pageContainer.classList.add("page", "contact");

  pageContainer.appendChild(header);
  header.textContent = "Contact Us";

  const mamaBear = createContactCard(pageContainer);
  mamaBear.addName("Mama Bear");
  mamaBear.addTitle("Chef");
  mamaBear.addPhoneNumber("555-555-5554");
  mamaBear.addEmail("totallyRealEmail@notFake.com");

  const papaBear = createContactCard(pageContainer);
  papaBear.addName("Papa Bear");
  papaBear.addTitle("Manager");
  papaBear.addPhoneNumber("555-555-5555");
  papaBear.addEmail("perfectlyRealEmail@notFake.com");

  const babyBear = createContactCard(pageContainer);
  babyBear.addName("Baby Bear");
  babyBear.addTitle("Waiter");
  babyBear.addPhoneNumber("555-555-5556");
  babyBear.addEmail("totallyRealEmail@notFake.com");

  return pageContainer;
}
