export const filteredSuggestions = (suggestions, filter, sortBy) => {
  let filteredSuggestions;
  filter === "all"
    ? (filteredSuggestions = suggestions)
    : (filteredSuggestions = suggestions.filter(
        ({ category }) => category === filter
      ));
  // eslint-disable-next-line default-case
  switch (sortBy) {
    case "most-upvotes":
      return filteredSuggestions
        .slice()
        .sort((a, b) => b.upvote_count - a.upvote_count);
    case "least-upvotes":
      return filteredSuggestions
        .slice()
        .sort((a, b) => a.upvote_count - b.upvote_count);
    case "most-comments":
      return filteredSuggestions
        .slice()
        .sort(
          (a, b) =>
            b.comments.concat(b.commentsReplies).length -
            a.comments.concat(a.commentsReplies).length
        );
    case "least-comments":
      return filteredSuggestions
        .slice()
        .sort(
          (a, b) =>
            a.comments.concat(a.commentsReplies).length -
            b.comments.concat(b.commentsReplies).length
        );
  }
};
