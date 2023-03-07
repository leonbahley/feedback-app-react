import styles from "./RoadmapItem.module.css";
import UpvoteButton from "../../upvote_button/UpvoteButton";
import comment from "../../suggestions/suggestion_item/images/comment.png";
import { useLocation, useNavigate } from "react-router-dom";
import { capitalizeFirstLetter } from "../../../helpers/caputalizeCategory";

export default function RoadmapItem({
  title,
  category,
  detail,
  upvote_count,
  comments_qty,
  id,
  status,
}) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoToItem = (e) => {
    if (e.target.tagName !== "BUTTON") {
      navigate(`/${id}`, {
        state: { from: location.pathname },
      });
    }
  };

  const color =
    status === "planned"
      ? "#f49f85"
      : status === "in-progress"
      ? "#AD1FEA"
      : "#62BCFA";

  return (
    <div
      style={{ borderColor: color }}
      onClick={handleGoToItem}
      className={styles.primaryWrapper}
    >
      <div className={styles.statusWrapper}>
        <span
          style={{ backgroundColor: color }}
          className={styles.decorationDot}
        ></span>
        {status}
      </div>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{detail}</p>
      <div className={styles.category}>{capitalizeFirstLetter(category)}</div>
      <div className={styles.secondaryWrapper}>
        <UpvoteButton id={id} upvote_count={upvote_count} />
        <img
          className={styles.commentImg}
          width={18}
          src={comment}
          alt="comment"
        />
        <span className={styles.commentQty}>{comments_qty}</span>
      </div>
    </div>
  );
}
