import styles from "./SuggestionsPage.module.css";
import SuggestionsHeader from "../../components/suggestions/suggestions_header/SuggestionsHeader";
import SuggestionsLeftSideMenu from "../../components/suggestions/suggestions_left_side_menu/SuggestionsLeftSideMenu";
import SuggestionsMainPart from "../../components/suggestions/suggestions_main_part/SuggestionsMainPart";

export default function SuggestionsPage() {
  return (
    <div className={styles.suggestions__wrapper}>
      <SuggestionsLeftSideMenu />
      <div className={styles.suggestions__subwrapper}>
        <SuggestionsHeader />
        <SuggestionsMainPart />
      </div>
    </div>
  );
}
