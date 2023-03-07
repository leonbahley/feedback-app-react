export const filterByStatus = (suggestions, status) => {
  // eslint-disable-next-line default-case
  switch (status) {
    case "planned":
      return suggestions.filter(({ status }) => status === "planned");

    case "in-progress":
      return suggestions.filter(({ status }) => status === "in-progress");

    case "live":
      return suggestions.filter(({ status }) => status === "live");
  }
};
