export const options = [
  { value: "feature", label: "Feature" },
  { value: "ui", label: "UI" },
  { value: "ux", label: "UX" },
  { value: "bug", label: "Bug" },
  { value: "enhancement", label: "Enhancement" },
];

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
