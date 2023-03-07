import styles from "./AddSuggestionPage.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import GobackButton from "../../components/go-back-button/GobackButton";
import Button from "../../components/button/Button";
import { useDispatch } from "react-redux";
import { addSuggestion } from "../../redux/suggestions/suggestions_operations";
import Select from "react-select";
import { options, style } from "./dropdownSettings";

export default function AddSuggestionPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";

  const goBack = () => {
    navigate(backLinkHref);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    dispatch(
      addSuggestion({
        title: data.get("title"),
        category: data.get("category"),
        detail: data.get("detail"),
      })
    );
    event.currentTarget.reset();
    navigate(backLinkHref);
  };
  return (
    <div className={styles.primaryWrapper}>
      <GobackButton handleClick={goBack} />
      <div className={styles.secondaryWrapper}>
        <div className={styles.secondaryWrapper__decoratingPlus}>+</div>
        <h1 className={styles.secondaryWrapper__title}>Create New Feedback</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <h2 className={styles.formTitle}>Feedback Title</h2>
          <p className={styles.formDescr}>Add a short, descriptive headline</p>
          <input
            maxLength={120}
            required={true}
            className={styles.formInput}
            type="text"
            name="title"
          />
          <h2 className={styles.formTitle}>Category</h2>
          <p className={styles.formDescr}>
            Choose a category for your feedback
          </p>
          <Select
            required
            name="category"
            options={options}
            styles={style}
            defaultValue={options[0]}
            isSearchable={false}
          />

          <h2 className={styles.formTitle}>Feedback Detail</h2>
          <p className={styles.formDescr}>
            Include any specific comments on what should be improved, added,
            etc.
          </p>
          <textarea
            required={true}
            className={styles.formTextArea}
            name="detail"
          ></textarea>
          <div className={styles.form__buttonWrapper}>
            <Button handleClick={goBack} bkgColor="#3A4374">
              Cancel
            </Button>
            <Button buttonType="submit" bkgColor="#AD1FEA">
              Add Feedback
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
