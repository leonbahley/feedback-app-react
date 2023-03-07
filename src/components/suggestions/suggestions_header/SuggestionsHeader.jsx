import styles from "./SuggestionsHeader.module.css";
import { useNavigate } from "react-router-dom";
import lightbulb from "./images/bulb.png";
import Button from "../../button/Button";
import { useDispatch, useSelector } from "react-redux";
import { setSortBy } from "../../../redux/filterSuggestions/filter_suggestions_slice";
import Select from "react-select";
import { options, defineDefaultSortBy, style } from "./dropdownSettings";

export default function SuggestionsHeader() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sortBy = useSelector((state) => state.sort_by);
  const suggestionsQty = useSelector((state) => state.suggestions.items.length);

  const addSuggestion = () => {
    navigate("/add-suggestion");
  };

  const defaultSortBy = defineDefaultSortBy(sortBy);

  const handleChange = (selected) => {
    dispatch(setSortBy(selected.value));
  };

  return (
    <header className={styles.suggestionsHeader}>
      <img width={24} src={lightbulb} alt="lightbulb" />
      <h2 className={styles.suggestionsHeader__title}>
        <span>{suggestionsQty}</span>Suggestions
      </h2>
      <div className={styles.suggestionsHeader__sortFeature}>
        <p className={styles.suggestionsHeader__sortFeature}>Sort by : </p>
        <Select
          options={options}
          styles={style}
          defaultValue={defaultSortBy}
          isSearchable={false}
          onChange={handleChange}
        />
      </div>

      <Button handleClick={addSuggestion} bkgColor="#ad1fea">
        + Add Feedback
      </Button>
    </header>
  );
}
