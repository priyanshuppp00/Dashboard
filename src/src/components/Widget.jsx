const Widget = ({ widget, onRemove }) => {
  return (
    <div className="widget-card">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <h3 className="font-medium text-gray-900 mb-2">{widget.title}</h3>
          <p className="text-gray-600 text-sm">{widget.text}</p>
        </div>
        <button
          onClick={onRemove}
          className="btn-danger ml-2 flex-shrink-0"
          title="Remove widget"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default Widget;
