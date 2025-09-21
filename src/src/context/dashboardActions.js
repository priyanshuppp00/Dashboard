// Action types
export const ADD_WIDGET = "ADD_WIDGET";
export const REMOVE_WIDGET = "REMOVE_WIDGET";
export const ADD_CATEGORY = "ADD_CATEGORY";
export const REMOVE_CATEGORY = "REMOVE_CATEGORY";
export const TOGGLE_CATEGORY = "TOGGLE_CATEGORY";
export const SET_SEARCH_TERM = "SET_SEARCH_TERM";

// Action creators
export const addWidget = (categoryId, widget) => ({
  type: ADD_WIDGET,
  payload: { categoryId, widget },
});

export const removeWidget = (categoryId, widgetId) => ({
  type: REMOVE_WIDGET,
  payload: { categoryId, widgetId },
});

export const addCategory = (category) => ({
  type: ADD_CATEGORY,
  payload: category,
});

export const removeCategory = (categoryId) => ({
  type: REMOVE_CATEGORY,
  payload: categoryId,
});

export const toggleCategory = (categoryId) => ({
  type: TOGGLE_CATEGORY,
  payload: categoryId,
});

export const setSearchTerm = (searchTerm) => ({
  type: SET_SEARCH_TERM,
  payload: searchTerm,
});
