import addHoursList from "./utils/addHoursInfo";
import createInfoCard from "./utils/createInfoCard";

export default function homePage() {
  const pageContainer = document.createElement("div");
  const header = document.createElement("h1");

  pageContainer.classList.add("page", "home");

  header.textContent = "Beary's Breakfast Bar";
  pageContainer.appendChild(header);

  const greetingSection = createInfoCard(pageContainer);
  greetingSection.addContent(
    "Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again."
  );
  greetingSection.addReference("Goldilocks");

  const workingHoursSection = createInfoCard(pageContainer);
  workingHoursSection.addHeader("Hours");
  const hoursList = addHoursList(workingHoursSection.getCardElement());
  hoursList.addHoursItem("Sunday: 8am - 8pm");
  hoursList.addHoursItem("Monday: 6am - 6pm");
  hoursList.addHoursItem("Tuesday: 6am - 6pm");
  hoursList.addHoursItem("Wednesday: 6am - 6pm");
  hoursList.addHoursItem("Thursday: 6am - 10pm");
  hoursList.addHoursItem("Friday: 6am - 10pm");
  hoursList.addHoursItem("Saturday: 8am - 10pm");

  const locationSection = createInfoCard(pageContainer);
  locationSection.getCardElement().classList.add("location");
  locationSection.addHeader("Location");
  locationSection.addContent("123 Forest Drive, Forestville, Maine");

  return pageContainer;
}
