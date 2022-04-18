import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import animeReducer from "./anime/reducer";
import searchReducer from "./searchAnime/reducer";
import thunk from "redux-thunk";
import mainPageNumberReducer from "./pageNumber/reducer";
import searchPageNumberReducer from "./searchPageNumber/reducer";

const reducer = combineReducers({
  anime: animeReducer,
  searchedAnime: searchReducer,
  mainPageNumber: mainPageNumberReducer,
  searchPageNumber: searchPageNumberReducer,
});
const middleWares = [logger, thunk];

const store = createStore(reducer, applyMiddleware(...middleWares));

export default store;
