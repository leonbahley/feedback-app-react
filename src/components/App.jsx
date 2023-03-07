import { Route, Routes } from "react-router-dom";
import RoadmapPage from "../pages/roadmap_page/RoadmapPage";
import SuggestionsPage from "../pages/suggestions_page/SuggestionsPage";
import AddSuggestionPage from "../pages/add_suggestion_page/AddSuggestionPage";
import EditSuggestionPage from "../pages/edit_suggestion_page/EditSuggestionPage";
import SuggestionsItemPage from "../pages/suggestions_item_page/SuggestionsItemPage";

export const App = () => {
  return (
    <>
      <Routes basename="/feedback-app">
        <Route path="/" element={<SuggestionsPage />} />
        <Route path="add-suggestion" element={<AddSuggestionPage />} />
        <Route
          path="edit-suggestion/:suggestionId"
          element={<EditSuggestionPage />}
        />
        <Route path="roadmap" element={<RoadmapPage />} />
        <Route path="/:suggestionId" element={<SuggestionsItemPage />} />
        <Route path="*" element={<SuggestionsPage />} />
      </Routes>
    </>
  );
};
