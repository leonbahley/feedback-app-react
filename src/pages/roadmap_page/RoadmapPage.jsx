import styles from "./RoadmapPage.module.css";
import RoadMapHeader from "../../components/roadmap/roadmap_header/RoadMapHeader";
import RoadmapItem from "../../components/roadmap/roadmap_item/RoadmapItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchSuggestions } from "../../redux/suggestions/suggestions_operations";
import { filterByStatus } from "../../helpers/filter_by_status";

export default function RoadmapPage() {
  const dispatch = useDispatch();
  const suggestions = useSelector((state) => state.suggestions.items);

  useEffect(() => {
    dispatch(fetchSuggestions());
  }, [dispatch]);

  const plannedSuggestions = filterByStatus(suggestions, "planned");

  const inProgressSuggestions = filterByStatus(suggestions, "in-progress");

  const liveSuggestions = filterByStatus(suggestions, "live");

  return (
    <div className={styles.primaryWrapper}>
      <RoadMapHeader />
      <div className={styles.columnWrapper}>
        <div className={styles.plannedColumn}>
          <h2 className={styles.columnTitle}>
            Planned
            <span>
              &#40;
              {suggestions?.filter(({ status }) => status === "planned").length}
              &#41;
            </span>
          </h2>
          <p className={styles.columnDescription}>
            Ideas prioritized for research
          </p>
          <ul className={styles.itemList}>
            {plannedSuggestions?.map(
              ({
                _id,
                title,
                category,
                detail,
                upvote_count,
                comments,
                commentsReplies,
                status,
              }) => (
                <li key={_id}>
                  <RoadmapItem
                    id={_id}
                    status={status}
                    title={title}
                    category={category}
                    detail={detail}
                    upvote_count={upvote_count}
                    comments_qty={comments.length + commentsReplies.length}
                  />
                </li>
              )
            )}
          </ul>
        </div>
        <div className={styles.inProgressColumn}>
          <h2 className={styles.columnTitle}>
            In-Progress
            <span>
              &#40;
              {
                suggestions?.filter(({ status }) => status === "in-progress")
                  .length
              }
              &#41;
            </span>
          </h2>
          <p className={styles.columnDescription}>Currently being developed</p>
          <ul className={styles.itemList}>
            {inProgressSuggestions?.map(
              ({
                _id,
                title,
                category,
                detail,
                upvote_count,
                comments,
                commentsReplies,
                status,
              }) => (
                <li key={_id}>
                  <RoadmapItem
                    id={_id}
                    status={status}
                    title={title}
                    category={category}
                    detail={detail}
                    upvote_count={upvote_count}
                    comments_qty={comments.length + commentsReplies.length}
                  />
                </li>
              )
            )}
          </ul>
        </div>
        <div className={styles.liveColumn}>
          <h2 className={styles.columnTitle}>
            Live
            <span>
              &#40;
              {suggestions?.filter(({ status }) => status === "live").length}
              &#41;
            </span>
          </h2>
          <p className={styles.columnDescription}>Released features</p>
          <ul className={styles.itemList}>
            {liveSuggestions?.map(
              ({
                _id,
                title,
                category,
                detail,
                upvote_count,
                comments,
                commentsReplies,
                status,
              }) => (
                <li key={_id}>
                  <RoadmapItem
                    id={_id}
                    status={status}
                    title={title}
                    category={category}
                    detail={detail}
                    upvote_count={upvote_count}
                    comments_qty={comments.length + commentsReplies.length}
                  />
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
