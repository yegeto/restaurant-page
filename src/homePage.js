import createListItem from "./createListItem.js";
export default function homePage() {
  const mainContainer = document.getElementById("content");
  const header = document.createElement("h1");
  const introSection = document.createElement("section");
  const introText = document.createElement("p");
  const introReference = document.createElement("p");
  const hoursSection = document.createElement("section");
  const hoursHeader = document.createElement("h2");
  const hoursList = document.createElement("p");
  const addressSection = document.createElement("section");
  const addressHeader = document.createElement("h2");
  const addressInfo = document.createElement("p");

  header.textContent = "Beary's Breakfast Bar";

  introText.textContent =
    "Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.";
  introReference.textContent = "Goldilocks";
  introSection.appendChild(introText);
  introSection.appendChild(introReference);

  hoursHeader.textContent = "Hours";
  hoursSection.appendChild(hoursHeader);
  const sundayInfo = createListItem("Sunday: 8am - 8pm", hoursList);
  const mondayInfo = createListItem("Monday: 6am - 6pm", hoursList);
  const tuesdayInfo = createListItem("Tuesday: 6am - 6pm", hoursList);
  const wednesdayInfo = createListItem("Wednesday: 6am - 6pm", hoursList);
  const thursdayInfo = createListItem("Thursday: 6am - 10pm", hoursList);
  const fridayInfo = createListItem("Friday: 6am - 10pm", hoursList);
  const SaturdayInfo = createListItem("Saturday: 8am - 10pm", hoursList);
  hoursSection.appendChild(hoursList);

  addressHeader.textContent = "Location";
  addressSection.appendChild(addressHeader);
  addressInfo.textContent = "123 Forest Drive, Forestville, Maine";
  addressSection.appendChild(addressInfo);

  mainContainer.appendChild(header);
  mainContainer.appendChild(introSection);
  mainContainer.appendChild(hoursSection);
  mainContainer.appendChild(addressSection);
}
