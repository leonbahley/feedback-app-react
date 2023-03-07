import styles from "./SuggestionsItemPage.module.css";
import { nanoid } from "nanoid";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import SuggestionItem from "../../components/suggestions/suggestion_item/SuggestionItem";
import Button from "../../components/button/Button";
import GobackButton from "../../components/go-back-button/GobackButton";
import CommentItem from "../../components/comment_item/CommentItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchSuggestionItem } from "../../redux/suggestions/suggestions_operations";
import { comment } from "../../redux/suggestions/suggestions_operations";
import ClipLoader from "react-spinners/ClipLoader";

export default function SuggestionsItemPage() {
  const commentsAreLoading = useSelector(
    (state) => state.suggestions.commentsAreLoading
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const fetchedItem = useSelector((state) => state.suggestions.fetchedItemById);
  const backLinkHref = location.state?.to
    ? "/roadmap"
    : location.state?.from ?? "/";

  const { suggestionId } = useParams();

  const [commentLength, setCommentLength] = useState(null);

  useEffect(() => {
    dispatch(fetchSuggestionItem(suggestionId));
  }, [dispatch, suggestionId]);

  const goBack = () => {
    navigate(backLinkHref);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const commentId = nanoid();
    dispatch(
      comment({ comment: data.get("comment"), id: suggestionId, commentId })
    );
    setCommentLength(null);
    e.currentTarget.reset();
  };

  return (
    <div className={styles.primaryWrapper}>
      <div className={styles.secondaryWrapper}>
        <GobackButton handleClick={goBack} />
        <Button
          handleClick={() =>
            navigate(`/edit-suggestion/${suggestionId}`, {
              state: {
                from: location,
              },
            })
          }
          bkgColor="#4661E6"
        >
          Edit Feedback
        </Button>
      </div>

      {fetchedItem && (
        <SuggestionItem
          title={fetchedItem.title}
          category={fetchedItem.category}
          detail={fetchedItem.detail}
          id={fetchedItem._id}
          upvote_count={fetchedItem.upvote_count}
          comments_qty={
            fetchedItem.comments.length + fetchedItem.commentsReplies.length
          }
        />
      )}
      <div className={styles.commentsBlock}>
        {commentsAreLoading && (
          <div className={styles.spinner}>
            <ClipLoader
              loading={true}
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        )}
        <h2 className={styles.commentsBlock__title}>
          {fetchedItem?.comments.length} Comments
        </h2>
        {fetchedItem?.comments &&
          fetchedItem.comments
            .slice()
            .reverse()
            .map(({ comment, commentId, parentCommentId }) => (
              <CommentItem
                key={commentId}
                suggestionId={fetchedItem._id}
                comment={comment}
                commentId={commentId}
                parentCommentId={parentCommentId}
              />
            ))}
      </div>
      <div className={styles.commentsBlock__addCommentBlock}>
        <h3 className={styles.commentsBlock__secondaryTitle}>Add Comment</h3>
        <form onSubmit={handleSubmit}>
          <textarea
            onChange={(e) => setCommentLength(e.target.value.length)}
            name="comment"
            className={styles.commentsBlock__input}
            maxLength="250"
            type="text"
            placeholder="Type your comment here"
          />
          <div className={styles.commentsBlock__wrapper}>
            <p className={styles.commentsBlock__charQty}>
              <span>{commentLength ? 250 - commentLength : 250} </span>
              Characters left
            </p>
            <Button buttonType="submit" bkgColor="#AD1FEA">
              Post Comment
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
