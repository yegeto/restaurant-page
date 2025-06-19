export default function creteMenuCard(parent) {
  const offeringCard = document.createElement("div");
  parent.appendChild(offeringCard);
  offeringCard.classList.add("offering-card");

  const addHeader = (headerText) => {
    const header = document.createElement("h3");
    offeringCard.appendChild(header);
    header.textContent = headerText;
  };

  const addInfo = (infoText) => {
    const info = document.createElement("p");
    offeringCard.appendChild(info);
    info.textContent = infoText;
  };

  const addPriceTag = (price) => {
    const priceTag = document.createElement("h4");
    offeringCard.appendChild(priceTag);
    priceTag.textContent = `$${price}`;
  };

  const addImage = (imageRef) => {
    const img = document.createElement("div");
    offeringCard.appendChild(img);
    img.classList.add("img-container");
  };

  return { addHeader, addInfo, addPriceTag, addImage };
}
