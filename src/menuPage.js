import createMenuCard from "./utils/createMenuCard";
import createMenuSection from "./utils/createMenuSection";

export default function menuPage() {
  const pageContainer = document.createElement("div");
  const header = document.createElement("h1");

  pageContainer.appendChild(header);
  header.textContent = "Menu";

  const beveragesSection = createMenuSection(pageContainer);
  beveragesSection.addHeader("Beverages");
  const honeyCard = createMenuCard(beveragesSection.getSection());
  honeyCard.addHeader("Honey Tea");
  honeyCard.addInfo(
    "A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!"
  );
  honeyCard.addPriceTag(2);
  honeyCard.addImage();
  const bearyTea = createMenuCard(beveragesSection.getSection());
  bearyTea.addHeader("Beary Tea");
  bearyTea.addInfo(
    "A comforting, almost filling, tea that is infused with the flavors of several kinds of berries. Best served cold, but can be served hot on request."
  );
  bearyTea.addPriceTag(3);
  honeyCard.addImage();

  const sidesSection = createMenuSection(pageContainer);
  sidesSection.addHeader("Sides");
  const toastAndJam = createMenuCard(sidesSection.getSection());
  toastAndJam.addHeader("Toast and Jam");
  toastAndJam.addInfo(
    "A slice of toast, your choice of bread, and our homemade blackberry or raspberry jam."
  );
  toastAndJam.addPriceTag(1);
  toastAndJam.addImage();
  const freshFruit = createMenuCard(sidesSection.getSection());
  freshFruit.addHeader("Fresh Fruit");
  freshFruit.addInfo(
    "A small bowl of fresh fruit, whatever we find at the market for the day."
  );
  freshFruit.addPriceTag(3);
  freshFruit.addImage();

  const mainDishesSection = createMenuSection(pageContainer);
  mainDishesSection.addHeader("Main Dishes");
  const pancakes = createMenuCard(mainDishesSection.getSection());
  pancakes.addHeader("Pancakes");
  pancakes.addInfo(
    "A stack of homemade buttermilk pancakes, served with our locally sourced maple syrup"
  );
  pancakes.addPriceTag(4);
  pancakes.addImage();
  const frenchToast = createMenuCard(mainDishesSection.getSection());
  frenchToast.addHeader("French Toast");
  frenchToast.addInfo(
    "Two slices of the best french toast you will ever eat, served with our locally sourced maple syrup."
  );
  frenchToast.addPriceTag(5);
  frenchToast.addImage();
  const bearyVeggieSandwich = createMenuCard(mainDishesSection.getSection());
  bearyVeggieSandwich.addHeader("Beary Veggie Sandwich");
  bearyVeggieSandwich.addInfo(
    "Do you like vegetables? Then this is the sandwich for you! Stuffed full of a variety of fresh produce, it will fill you up."
  );
  bearyVeggieSandwich.addPriceTag(8);
  bearyVeggieSandwich.addImage();
  const blt = createMenuCard(mainDishesSection.getSection());
  blt.addHeader("BLT");
  blt.addInfo(
    "Interested in the Beary Veggie Sandwich but also love bacon? Say no more."
  );
  blt.addPriceTag(6);
  blt.addImage();
  const bagelAndLox = createMenuCard(mainDishesSection.getSection());
  bagelAndLox.addHeader("Bagel and Lox");
  bagelAndLox.addInfo(
    "Our house specialty, you can't go wrong with a hearty bagel topped with sustainably harvested salmon."
  );
  bagelAndLox.addPriceTag(8);
  bagelAndLox.addImage();
  const honeyComb = createMenuCard(mainDishesSection.getSection());
  honeyComb.addHeader("Honeycomb");
  honeyComb.addInfo(
    "Are you a bear like us? Then you will love our honeycomb. And, yes humans, it is just a piece of honeycomb, not the popular breakfast cereal."
  );
  honeyComb.addPriceTag(6);
  honeyComb.addImage();
  const bearlyBowl = createMenuCard(mainDishesSection.getSection());
  bearlyBowl.addHeader("Bearly Bowl");
  bearlyBowl.addInfo(
    "Get a big ole bowl of our berries! Side of honey is $1 extra."
  );
  bearlyBowl.addPriceTag(7);
  bearlyBowl.addImage();
  const bearyBestPorridge = createMenuCard(mainDishesSection.getSection());
  bearyBestPorridge.addHeader("The Beary Best Porridge");
  bearyBestPorridge.addInfo(
    "Made by Baby Bear himself, this porridge is guarenteed to be just right, or your money back."
  );
  bearyBestPorridge.addPriceTag(5);
  bearyBestPorridge.addImage();

  return pageContainer;
}
