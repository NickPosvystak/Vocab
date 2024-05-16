import { combineReducers } from "redux";
import { wordsReducer } from "./wordsReducer";

const rootReducer = combineReducers({
  words: wordsReducer,
});

export default rootReducer;
