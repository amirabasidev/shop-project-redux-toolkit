import { FILTER_CATEGORY, FILTER_PRICE, FILTER_SEARCH } from "./filtersTypes";

export const filterSearch = (word) => (dispatch) => {
  dispatch({ type: FILTER_SEARCH, payload: word });
};

export const filterCategory = (categoryId) => (dispatch) => {
  dispatch({ type: FILTER_CATEGORY, payload: categoryId });
};

export const filterPrice = (range) => (dispatch) => {
  dispatch({ type: FILTER_PRICE, payload: range });
};
