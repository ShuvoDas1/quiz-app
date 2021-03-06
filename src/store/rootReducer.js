import { combineReducers } from "redux";
import quizReducer from "./quiz/quizReducer";

const rootReducer = combineReducers({
  quiz: quizReducer,
});

export default rootReducer;
