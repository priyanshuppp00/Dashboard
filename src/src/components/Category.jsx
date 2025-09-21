import { useState } from "react";
import { useDashboard } from "../context/useDashboard";
import { addWidget, removeWidget } from "../context/dashboardActions";
import Widget from "./Widget";
import AddWidgetModal from "./AddWidgetModal";

const Category = ({ category }) => {
  const { dispatch } = useDashboard();
  const [showAddModal, setShowAddModal] = useState(false);

  const handleAddWidget = (widgetData) => {
    const newWidget = {
      id: `w${Date.now()}`,
      title: widgetData.title,
      text: widgetData.text,
    };
    dispatch(addWidget(category.id, newWidget));
    setShowAddModal(false);
  };

  const handleRemoveWidget = (widgetId) => {
    dispatch(removeWidget(category.id, widgetId));
  };

  return (
    <div className="category-card">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-900">{category.name}</h2>
        <button
          onClick={() => setShowAddModal(true)}
          className="btn-primary text-sm"
        >
          + Add Widget
        </button>
      </div>

      <div className="space-y-3">
        {category.widgets.length === 0 ? (
          <p className="text-gray-500 text-center py-4">
            No widgets in this category
          </p>
        ) : (
          category.widgets.map((widget) => (
            <Widget
              key={widget.id}
              widget={widget}
              onRemove={() => handleRemoveWidget(widget.id)}
            />
          ))
        )}
      </div>

      {showAddModal && (
        <AddWidgetModal
          onClose={() => setShowAddModal(false)}
          onAdd={handleAddWidget}
        />
      )}
    </div>
  );
};

export default Category;
