import { useState } from "react";

const AddWidgetModal = ({ onClose, onAdd }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && text.trim()) {
      onAdd({ title: title.trim(), text: text.trim() });
      setTitle("");
      setText("");
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Add New Widget
        </h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="widget-title"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Widget Title
            </label>
            <input
              type="text"
              id="widget-title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="input-field"
              placeholder="Enter widget title"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="widget-text"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Widget Description
            </label>
            <textarea
              id="widget-text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="input-field"
              rows="3"
              placeholder="Enter widget description"
              required
            />
          </div>

          <div className="flex justify-end space-x-3">
            <button type="button" onClick={onClose} className="btn-secondary">
              Cancel
            </button>
            <button
              type="submit"
              className="btn-primary"
              disabled={!title.trim() || !text.trim()}
            >
              Add Widget
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddWidgetModal;
