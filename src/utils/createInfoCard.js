export default function createInfoCard(parent) {
  const infoCard = document.createElement("div");
  parent.appendChild(infoCard);

  infoCard.classList.add("page-section");

  const addHeader = (headerText) => {
    const header = document.createElement("h2");
    infoCard.appendChild(header);
    header.textContent = headerText;
    header.classList.add("section-header");
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
    reference.classList.add("reference");
  };

  const getCardElement = () => infoCard;

  return { addHeader, addContent, addReference, getCardElement };
}
