export const categoryOptions = [
  { value: "feature", label: "Feature" },
  { value: "ui", label: "UI" },
  { value: "ux", label: "UX" },
  { value: "bug", label: "Bug" },
  { value: "enhancement", label: "Enhancement" },
];

export const statusOptions = [
  { value: "planned", label: "Planned" },
  { value: "in-progress", label: "In Progress" },
  { value: "live", label: "Live" },
];

export const defineDefaultCategory = (category) => {
  switch (category) {
    case "feature":
      return categoryOptions[0];
    case "ui":
      return categoryOptions[1];
    case "ux":
      return categoryOptions[2];
    case "bug":
      return categoryOptions[3];
    case "enhancement":
      return categoryOptions[4];
    default:
      return null;
  }
};

export const defineDefaultStatus = (status) => {
  switch (status) {
    case "planned":
      return statusOptions[0];
    case "in-progress":
      return statusOptions[1];
    case "live":
      return statusOptions[2];
    default:
      return null;
  }
};

export const style = {
  control: (provided) => ({
    ...provided,
    border: "none",
    backgroundColor: "#F7F8FD",
    boxShadow: "none",
    cursor: "pointer",
    height: "48px",
    marginBottom: "24px",
  }),
  option: (provided, { isSelected }) => ({
    ...provided,
    color: isSelected ? "#fff" : "#647196",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#3A4374",
    fontSize: "15px",
    lineHeight: "22px",
  }),
};
