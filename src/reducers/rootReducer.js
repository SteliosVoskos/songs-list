import { combineReducers } from "redux";
import songFetcher from "./songFetcher";
import songMutator from "./songMutator";

const rootReducer = combineReducers({
  songFetcher,
  songMutator
});

export default rootReducer;
