import styles from "./CommentRepliesBlock.module.css";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import person from "../comment_item/images/person.jpg";

export default function CommentRepliesBlock({ commentId }) {
  const fetchedItem = useSelector((state) => state.suggestions.fetchedItemById);
  const commentReplies = useMemo(
    () =>
      fetchedItem?.commentsReplies?.filter(
        (comment) => comment.parentCommentId === commentId
      ),
    [commentId, fetchedItem.commentsReplies]
  );

  return (
    <div className={styles.commentsWrapper}>
      {commentReplies &&
        commentReplies
          .slice()
          .reverse()
          .map(({ comment }, i) => (
            <div key={i} className={styles.commentItem}>
              <div className={styles.commentItem__wrapper}>
                <img className={styles.image} src={person} alt="person" />
                <p className={styles.commentItem__name}>Guest</p>
              </div>
              <p className={styles.commentItem__text}>{comment}</p>
            </div>
          ))}
    </div>
  );
}
