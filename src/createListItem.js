export default function createListItem(text, containerList) {
  const newListItem = document.createElement("li");
  newListItem.textContent = text;
  containerList.appendChild(newListItem);
  return newListItem;
}
