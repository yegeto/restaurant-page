export default function addHoursList(parent) {
  const hoursList = document.createElement("ul");
  parent.appendChild(hoursList);
  hoursList.classList.add("hours-list");

  const addHoursItem = (content) => {
    const hoursItem = document.createElement("li");
    hoursList.appendChild(hoursItem);
    hoursItem.textContent = content;
  };

  return { addHoursItem };
}
