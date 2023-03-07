import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../button/Button";
import GobackButton from "../../go-back-button/GobackButton";
import white_arrow from "../../go-back-button/images/white_arrow.png";
import styles from "./RoadMapHeader.module.css";

export default function RoadMapHeader() {
  const navigate = useNavigate();
  const location = useLocation();
  const backLinkHref = "/";

  const goBack = () => {
    navigate(backLinkHref);
  };

  const addSuggestion = () => {
    navigate("/add-suggestion", {
      state: { from: location.pathname },
    });
  };

  return (
    <header className={styles.header}>
      <div>
        <GobackButton handleClick={goBack} img={white_arrow} fontColor="#fff" />
        <h2 className={styles.header__title}>Roadmap</h2>
      </div>

      <Button handleClick={addSuggestion} bkgColor="#ad1fea">
        + Add Feedback
      </Button>
    </header>
  );
}
