import styles from "./EditSuggestionPage.module.css";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import pen from "./images/pen.png";
import Button from "../../components/button/Button";
import GobackButton from "../../components/go-back-button/GobackButton";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteSuggestion,
  editSuggestion,
  fetchSuggestionItem,
} from "../../redux/suggestions/suggestions_operations";
import {
  categoryOptions,
  statusOptions,
  defineDefaultCategory,
  defineDefaultStatus,
  style,
} from "./dropdownSettings";
import Select from "react-select";

export default function EditSuggestionPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const backLinkHref = location.state?.from.pathname ?? "/";

  const { suggestionId } = useParams();
  const suggestionItem = useSelector(
    (state) => state.suggestions.fetchedItemById
  );

  useEffect(() => {
    dispatch(fetchSuggestionItem(suggestionId));
  }, [dispatch, suggestionId]);

  const goBack = () => {
    if (location.state?.from?.state?.from) {
      navigate(backLinkHref, { state: { to: "/roadmap" } });
    } else navigate(backLinkHref);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    dispatch(
      editSuggestion({
        title: data.get("title"),
        category: data.get("category"),
        detail: data.get("detail"),
        status: data.get("status"),
        suggestionId,
      })
    );

    event.currentTarget.reset();
    goBack();
  };

  const deleteItem = () => {
    dispatch(deleteSuggestion(suggestionId));
    goBack();
  };

  const defaultCategory = defineDefaultCategory(suggestionItem?.category);

  const defaultStatuts = defineDefaultStatus(suggestionItem?.status);

  return (
    <div className={styles.primaryWrapper}>
      <GobackButton handleClick={goBack} />
      <div className={styles.secondaryWrapper}>
        <div className={styles.secondaryWrapper__decoratingPlus}>
          <img width={24} src={pen} alt="pen" />
        </div>
        <h1 className={styles.secondaryWrapper__title}>
          Editing <span>{suggestionItem?.title}</span>
        </h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <h2 className={styles.formTitle}>Feedback Title</h2>
          <p className={styles.formDescr}>Add a short, descriptive headline</p>
          <input
            name="title"
            defaultValue={suggestionItem?.title}
            maxLength={120}
            required={true}
            className={styles.formInput}
            type="text"
          />
          <h2 className={styles.formTitle}>Category</h2>
          <p className={styles.formDescr}>
            Choose a category for your feedback
          </p>
          <Select
            required
            name="category"
            options={categoryOptions}
            styles={style}
            defaultValue={defaultCategory}
            isSearchable={false}
          />
          <h2 className={styles.formTitle}>Update Status</h2>
          <p className={styles.formDescr}>Change feedback state</p>
          <Select
            required
            name="status"
            options={statusOptions}
            styles={style}
            defaultValue={defaultStatuts}
            isSearchable={false}
          />
          <h2 className={styles.formTitle}>Feedback Detail</h2>
          <p className={styles.formDescr}>
            Include any specific comments on what should be improved, added,
            etc.
          </p>
          <textarea
            name="detail"
            defaultValue={suggestionItem?.detail}
            required={true}
            className={styles.formTextArea}
          ></textarea>
          <div className={styles.form__primaryButtonWrapper}>
            <Button handleClick={deleteItem} bkgColor="#E98888">
              Delete
            </Button>
            <div className={styles.form__secondaryButtonWrapper}>
              <Button handleClick={goBack} bkgColor="#3A4374">
                Cancel
              </Button>
              <Button buttonType="submit" bkgColor="#AD1FEA">
                Save Changes
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
