import styles from "./Button.module.css";

export default function Button({
  children,
  bkgColor,
  buttonType = "button",
  handleClick,
}) {
  const handleButtonAction = () => {
    if (buttonType === "button") {
      handleClick();
    }
  };
  return (
    <button
      onClick={handleButtonAction}
      type={buttonType}
      style={{ backgroundColor: bkgColor }}
      className={styles.button}
    >
      {children}
    </button>
  );
}
