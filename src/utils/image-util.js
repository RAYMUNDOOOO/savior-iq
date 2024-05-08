function getImageURL(name) {
  switch (name) {
    case "Fruity":
      return new URL(`../assets/ethyl_acetate.png`, import.meta.url).href;
    case "Spicy":
      return new URL(`../assets/methylguaiacol.png`, import.meta.url).href;
    case "Herbal":
      return new URL(`../assets/lactones.png`, import.meta.url).href;
    case "Peaty":
      return new URL(`../assets/syringol.png`, import.meta.url).href;
    case "Sweet":
      return new URL(`../assets/vanillin.png`, import.meta.url).href;
    case "Smokey":
      return new URL(`../assets/guaiacol.png`, import.meta.url).href;
    case "Floral":
      return new URL(`../assets/phenylethyl_alcohol.png`, import.meta.url).href;
    default:
      return new URL(`../assets/ethanol.png`, import.meta.url).href;
  }
  return new URL(`../assets/ethanol.png`, import.meta.url).href;
}
export { getImageURL };
