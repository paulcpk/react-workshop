export const getCoffeePrice = ({ price, addSugar, addShot }) => {
  let sum = price;
  sum += addSugar ? 0.5 : 0;
  sum += addShot ? 1 : 0;
  return sum;
};

export const getFormattedPrice = (price) => `$${price.toFixed(2)}`;

export const COFFEE_OPTION_PRICE = {
    addSugar: 0.5,
    addShot: 1
}

export const COFFEE_OPTION_STRINGS = {
    addSugar: `Extra Sugar + ${getFormattedPrice(COFFEE_OPTION_PRICE.addSugar)}`,
    addShot: `Extra Espresso Shot + ${getFormattedPrice(COFFEE_OPTION_PRICE.addShot)}`
}