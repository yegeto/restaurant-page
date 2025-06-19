export default function createContactCard(parent) {
  const contactCard = document.createElement("div");
  parent.appendChild(contactCard);
  contactCard.classList.add("page-section");

  const addName = (name) => {
    const contactName = document.createElement("h2");
    contactCard.appendChild(contactName);
    contactName.textContent = name;
  };

  const addTitle = (title) => {
    const contactTitle = document.createElement("p");
    contactCard.appendChild(contactTitle);
    contactTitle.textContent = title;
  };

  const addPhoneNumber = (phoneNumber) => {
    const contactPhoneNumber = document.createElement("p");
    contactCard.appendChild(contactPhoneNumber);
    contactPhoneNumber.textContent = phoneNumber;
  };

  const addEmail = (email) => {
    const contactEmail = document.createElement("p");
    contactCard.appendChild(contactEmail);
    contactEmail.textContent = email;
  };

  return { addName, addTitle, addPhoneNumber, addEmail };
}
