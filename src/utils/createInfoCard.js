export default function createInfoCard(parent) {
  const infoCard = document.createElement("div");
  parent.appendChild(infoCard);

  const addHeader = (headerText) => {
    const header = document.createElement("h2");
    infoCard.appendChild(header);
    header.textContent = headerText;
  };

  const addContent = (text) => {
    const content = document.createElement("p");
    infoCard.appendChild(content);
    content.textContent = text;
  };

  const addReference = (ref) => {
    const reference = document.createElement("h3");
    infoCard.appendChild(reference);
    reference.textContent = ref;
  };

  const getCardElement = () => infoCard;

  return { addHeader, addContent, addReference, getCardElement };
}
