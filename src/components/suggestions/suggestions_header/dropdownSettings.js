export const options = [
  { value: "most-upvotes", label: "Most Upvotes" },
  { value: "least-upvotes", label: "Least Upvotes" },
  { value: "most-comments", label: "Most Comments" },
  { value: "least-comments", label: "Least Comments" },
];

export const defineDefaultSortBy = (sortBy) => {
  switch (sortBy) {
    case "most-upvotes":
      return options[0];
    case "least-upvotes":
      return options[1];
    case "most-comments":
      return options[2];
    case "least-comments":
      return options[3];
    default:
      return null;
  }
};

export const style = {
  control: (provided) => ({
    ...provided,
    border: "none",
    backgroundColor: "transparent",
    boxShadow: "none",
    cursor: "pointer",
  }),
  option: (provided, { isSelected }) => ({
    ...provided,
    color: isSelected ? "#fff" : "#647196",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#F2F4FE",
    fontWeight: "700",
    fontSize: "14px",
    lineHeight: "20px",
  }),
};
