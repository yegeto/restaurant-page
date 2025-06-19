export default function createMenuSection(parent) {
  const menuSection = document.createElement("section");
  parent.appendChild(menuSection);

  const getSection = () => menuSection;

  const addHeader = (header) => {
    const sectionHeader = document.createElement("h2");
    menuSection.appendChild(sectionHeader);
    sectionHeader.textContent = header;
  };

  return { getSection, addHeader };
}
