import styles from "./SuggestionsLeftSideMenu.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../../redux/filterSuggestions/filter_suggestions_slice";

export default function SuggestionsLeftSideMenu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const activeFilter = useSelector((state) => state.filter);
  const suggestions = useSelector((state) => state.suggestions.items);
  const viewRoadmap = () => {
    navigate("/roadmap");
  };

  const handleFilterChange = (e) => {
    if (e.target.tagName !== "DIV") {
      dispatch(setFilter(e.target.id));
    }
  };
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.titleBlock}>
        <h1 className={styles.titleBlock__title}>Website name</h1>
        <h2 className={styles.titleBlock__subtitle}>Feedback Board</h2>
      </div>
      <div onClick={handleFilterChange} className={styles.optionsBlock}>
        <button
          style={{
            backgroundColor: activeFilter === "all" && "#4661E6",
            color: activeFilter === "all" && "#fff",
          }}
          id="all"
          className={styles.optionsBlock__option}
        >
          All
        </button>
        <button
          style={{
            backgroundColor: activeFilter === "ui" && "#4661E6",
            color: activeFilter === "ui" && "#fff",
          }}
          id="ui"
          className={styles.optionsBlock__option}
        >
          UI
        </button>
        <button
          style={{
            backgroundColor: activeFilter === "ux" && "#4661E6",
            color: activeFilter === "ux" && "#fff",
          }}
          id="ux"
          className={styles.optionsBlock__option}
        >
          UX
        </button>
        <button
          style={{
            backgroundColor: activeFilter === "enhancement" && "#4661E6",
            color: activeFilter === "enhancement" && "#fff",
          }}
          id="enhancement"
          className={styles.optionsBlock__option}
        >
          Enhancement
        </button>
        <button
          style={{
            backgroundColor: activeFilter === "bug" && "#4661E6",
            color: activeFilter === "bug" && "#fff",
          }}
          id="bug"
          className={styles.optionsBlock__option}
        >
          Bug
        </button>
        <button
          style={{
            backgroundColor: activeFilter === "feature" && "#4661E6",
            color: activeFilter === "feature" && "#fff",
          }}
          id="feature"
          className={styles.optionsBlock__option}
        >
          Feature
        </button>
      </div>
      <div className={styles.roadmapBlock}>
        <div className={styles.roadmapBlock__wrapper}>
          <h2 className={styles.roadmapBlock__title}>Roadmap</h2>
          <button onClick={viewRoadmap} className={styles.roadmapBlock__button}>
            View
          </button>
        </div>
        <ul className={styles.roadmapBlock__itemList}>
          <li className={styles.roadmapBlock__item}>
            <div
              className={`${styles.roadmapBlock__decPoint} ${styles.roadmapBlock__decPoint__first}`}
            ></div>
            Planned
            <p className={styles.roadmapBlock__itemsQty}>
              {suggestions.filter(({ status }) => status === "planned").length}
            </p>
          </li>
          <li className={styles.roadmapBlock__item}>
            <div
              className={`${styles.roadmapBlock__decPoint} ${styles.roadmapBlock__decPoint__second}`}
            ></div>
            In-Progress
            <p className={styles.roadmapBlock__itemsQty}>
              {
                suggestions.filter(({ status }) => status === "in-progress")
                  .length
              }
            </p>
          </li>
          <li className={styles.roadmapBlock__item}>
            <div
              className={`${styles.roadmapBlock__decPoint} ${styles.roadmapBlock__decPoint__third}`}
            ></div>
            Live
            <p className={styles.roadmapBlock__itemsQty}>
              {suggestions.filter(({ status }) => status === "live").length}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
