import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [
    {
      id: "cspm",
      name: "CSPM Executive Dashboard",
      widgets: [
        {
          id: "w1",
          title: "Cloud Accounts",
          text: "Total connected cloud accounts across all providers",
        },
        {
          id: "w2",
          title: "Cloud Account Risk Assessment",
          text: "Risk assessment score for all connected cloud accounts",
        },
      ],
    },
    {
      id: "cwpp",
      name: "CWPP Dashboard",
      widgets: [
        {
          id: "w3",
          title: "Workload Alerts",
          text: "Critical and high severity alerts from workload protection",
        },
      ],
    },
    {
      id: "registry",
      name: "Registry Scan",
      widgets: [
        {
          id: "w4",
          title: "Image Risk Assessment",
          text: "Risk assessment for container images in registry",
        },
        {
          id: "w5",
          title: "Image Security Issues",
          text: "Security vulnerabilities found in container images",
        },
      ],
    },
  ],
  searchTerm: "",
  availableCategories: [
    { id: "cspm", name: "CSPM Executive Dashboard", checked: true },
    { id: "cwpp", name: "CWPP Dashboard", checked: true },
    { id: "registry", name: "Registry Scan", checked: true },
    { id: "tickets", name: "Ticket Dashboard", checked: false },
  ],
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    addWidget: (state, action) => {
      const { categoryId, widget } = action.payload;
      const category = state.categories.find((cat) => cat.id === categoryId);
      if (category) {
        category.widgets.push(widget);
      }
    },
    removeWidget: (state, action) => {
      const { categoryId, widgetId } = action.payload;
      const category = state.categories.find((cat) => cat.id === categoryId);
      if (category) {
        category.widgets = category.widgets.filter(
          (widget) => widget.id !== widgetId
        );
      }
    },
    addCategory: (state, action) => {
      const category = action.payload;
      state.categories.push(category);
      state.availableCategories = state.availableCategories.map((cat) =>
        cat.id === category.id ? { ...cat, checked: true } : cat
      );
    },
    removeCategory: (state, action) => {
      const categoryId = action.payload;
      state.categories = state.categories.filter(
        (cat) => cat.id !== categoryId
      );
      state.availableCategories = state.availableCategories.map((cat) =>
        cat.id === categoryId ? { ...cat, checked: false } : cat
      );
    },
    toggleCategory: (state, action) => {
      const categoryId = action.payload;
      const category = state.availableCategories.find(
        (cat) => cat.id === categoryId
      );
      if (category) {
        category.checked = !category.checked;
        if (category.checked) {
          // Add category back if it was removed
          const existingCategory = state.categories.find(
            (cat) => cat.id === categoryId
          );
          if (!existingCategory) {
            state.categories.push({
              id: category.id,
              name: category.name,
              widgets: [],
            });
          }
        } else {
          // Remove category
          state.categories = state.categories.filter(
            (cat) => cat.id !== categoryId
          );
        }
      }
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const {
  addWidget,
  removeWidget,
  addCategory,
  removeCategory,
  toggleCategory,
  setSearchTerm,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;
