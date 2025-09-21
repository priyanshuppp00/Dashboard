import { useReducer } from "react";
import { initialData } from "../initialData";
import {
  ADD_WIDGET,
  REMOVE_WIDGET,
  ADD_CATEGORY,
  REMOVE_CATEGORY,
  TOGGLE_CATEGORY,
  SET_SEARCH_TERM,
} from "./dashboardActions";

// Reducer
const dashboardReducer = (state, action) => {
  switch (action.type) {
    case ADD_WIDGET: {
      const { categoryId, widget } = action.payload;
      return {
        ...state,
        categories: state.categories.map((category) =>
          category.id === categoryId
            ? { ...category, widgets: [...category.widgets, widget] }
            : category
        ),
      };
    }

    case REMOVE_WIDGET: {
      const { categoryId, widgetId } = action.payload;
      return {
        ...state,
        categories: state.categories.map((category) =>
          category.id === categoryId
            ? {
                ...category,
                widgets: category.widgets.filter(
                  (widget) => widget.id !== widgetId
                ),
              }
            : category
        ),
      };
    }

    case ADD_CATEGORY: {
      const category = action.payload;
      return {
        ...state,
        categories: [...state.categories, category],
        availableCategories: state.availableCategories.map((cat) =>
          cat.id === category.id ? { ...cat, checked: true } : cat
        ),
      };
    }

    case REMOVE_CATEGORY: {
      const categoryId = action.payload;
      return {
        ...state,
        categories: state.categories.filter((cat) => cat.id !== categoryId),
        availableCategories: state.availableCategories.map((cat) =>
          cat.id === categoryId ? { ...cat, checked: false } : cat
        ),
      };
    }

    case TOGGLE_CATEGORY: {
      const categoryId = action.payload;
      const category = state.availableCategories.find(
        (cat) => cat.id === categoryId
      );

      if (!category) return state;

      const newCheckedState = !category.checked;

      return {
        ...state,
        availableCategories: state.availableCategories.map((cat) =>
          cat.id === categoryId ? { ...cat, checked: newCheckedState } : cat
        ),
        categories: newCheckedState
          ? // Add category back if it was removed
            state.categories.find((cat) => cat.id === categoryId)
            ? state.categories
            : [
                ...state.categories,
                {
                  id: category.id,
                  name: category.name,
                  widgets: [],
                },
              ]
          : // Remove category
            state.categories.filter((cat) => cat.id !== categoryId),
      };
    }

    case SET_SEARCH_TERM: {
      return {
        ...state,
        searchTerm: action.payload,
      };
    }

    default:
      return state;
  }
};

import { DashboardContext } from "./DashboardContextContext";

// Provider component
export const DashboardProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dashboardReducer, initialData);

  const value = {
    state,
    dispatch,
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};
