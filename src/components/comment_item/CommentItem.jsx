import { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../button/Button";
import styles from "./CommentItem.module.css";
import person from "./images/person.jpg";
import { replyComment } from "../../redux/suggestions/suggestions_operations";
import CommentRepliesBlock from "../commentRepliesBlock/commentRepliesBlock";

export default function CommentItem({ comment, commentId, suggestionId }) {
  const dispatch = useDispatch();
  const [isReplyFormShown, setIsReplyFormShown] = useState(false);

  const replyToComment = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    dispatch(
      replyComment({
        comment: data.get("reply_comment"),
        id: suggestionId,
        parentCommentId: commentId,
      })
    );
    event.currentTarget.reset();
    setIsReplyFormShown(false);
  };

  const handleClick = () => {
    setIsReplyFormShown(true);
  };

  return (
    <div className={styles.commentItem}>
      <div className={styles.commentItem__wrapper}>
        <img className={styles.image} src={person} alt="person" />
        <p className={styles.commentItem__name}>Guest</p>
        <button onClick={handleClick} className={styles.commentItem__replyBtn}>
          Reply
        </button>
      </div>
      <p className={styles.commentItem__text}>{comment}</p>
      {isReplyFormShown && (
        <form onSubmit={replyToComment} className={styles.replyForm}>
          <textarea
            className={styles.replyText}
            name="reply_comment"
          ></textarea>
          <Button
            handleClick={replyToComment}
            buttonType="submit"
            bkgColor="#AD1FEA"
          >
            Post Reply
          </Button>
        </form>
      )}
      <CommentRepliesBlock commentId={commentId} />
    </div>
  );
}
