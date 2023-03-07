import styles from "./SuggestionItem.module.css";
import { useNavigate, useParams } from "react-router-dom";
import comment from "./images/comment.png";
import UpvoteButton from "../../upvote_button/UpvoteButton";
import { capitalizeFirstLetter } from "../../../helpers/caputalizeCategory";
import ClipLoader from "react-spinners/ClipLoader";
import { useSelector } from "react-redux";

export default function SuggestionItem({
  title,
  category,
  detail,
  id,
  upvote_count,
  comments_qty,
}) {
  const isLoading = useSelector((state) => state.suggestions.itemIsLoading);
  const { suggestionId } = useParams();
  const navigate = useNavigate();

  const navigateToSuggestion = (e) => {
    if (
      e.target.id !== "commentButton" &&
      e.target.id !== "upvoteButton" &&
      !suggestionId
    ) {
      navigate(`/${id}`);
    }
  };

  return (
    <div
      style={{ cursor: suggestionId && "default" }}
      id={id}
      onClick={navigateToSuggestion}
      className={styles.suggestionItem}
    >
      {isLoading && (
        <div className={styles.spinner}>
          <ClipLoader
            loading={true}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}
      <UpvoteButton upvote_count={upvote_count} id={id} />
      <div className={styles.suggestionItem__descriptionBlock}>
        <h3 className={styles.suggestionItem__title}>{title}</h3>
        <p className={styles.suggestionItem__description}>{detail}</p>
        <div className={styles.suggestionItem__category}>
          <p>{capitalizeFirstLetter(category)}</p>
        </div>
      </div>
      <div id="commentButton" className={styles.suggestionItem__comment}>
        <img id="commentButton" width={18} src={comment} alt="comment" />
        <span id="commentButton" className={styles.suggestionItem__commentQty}>
          {comments_qty}
        </span>
      </div>
    </div>
  );
}
