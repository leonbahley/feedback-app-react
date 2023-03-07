export const capitalizeFirstLetter = (category) => {
  if (category) {
    if (category.length === 2) {
      return category.toUpperCase();
    }
    return category.charAt(0).toUpperCase() + category.slice(1);
  }
};
