import { useDashboard } from "../context/useDashboard";
import { toggleCategory, addCategory } from "../context/dashboardActions";

const CategoryManager = () => {
  const { state, dispatch } = useDashboard();

  const handleToggleCategory = (categoryId) => {
    dispatch(toggleCategory(categoryId));
  };

  const handleAddNewCategory = () => {
    const categoryName = prompt("Enter new category name:");
    if (categoryName && categoryName.trim()) {
      const newCategory = {
        id: `cat${Date.now()}`,
        name: categoryName.trim(),
        widgets: [],
      };
      dispatch(addCategory(newCategory));
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-900">
          Category Management
        </h2>
        <button onClick={handleAddNewCategory} className="btn-primary text-sm">
          + Add Category
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {state.availableCategories.map((category) => (
          <label
            key={category.id}
            className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50"
          >
            <input
              type="checkbox"
              checked={category.checked}
              onChange={() => handleToggleCategory(category.id)}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="text-sm font-medium text-gray-900">
              {category.name}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default CategoryManager;
