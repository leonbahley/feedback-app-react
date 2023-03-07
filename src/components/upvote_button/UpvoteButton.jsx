import styles from "./UpvoteButton.module.css";
import arrow from "./images/arrow.png";
import white_arrow from "./images/white_arrow.png";
import { useDispatch } from "react-redux";
import { upvote } from "../../redux/suggestions/suggestions_operations";

export default function UpvoteButton({ id, upvote_count }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(upvote(id));
    localStorage.setItem(id, "upvoted");
  };

  const upvoted = localStorage.getItem(id);

  return (
    <button
      disabled={upvoted ? true : false}
      style={{
        backgroundColor: upvoted && "#4661E6",
        color: upvoted && "#fff",
      }}
      onClick={handleClick}
      id="upvoteButton"
      type="button"
      className={styles.upvoteButton}
    >
      <img
        id="upvoteButton"
        width={8}
        src={upvoted ? white_arrow : arrow}
        alt="arrow-up"
      />
      <span id="upvoteButton">{upvote_count}</span>
    </button>
  );
}
