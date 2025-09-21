import { useDashboard } from "../context/useDashboard";
import { setSearchTerm } from "../context/dashboardActions";
import SearchBar from "./SearchBar";
import Category from "./Category";
import CategoryManager from "./CategoryManager";

const Dashboard = () => {
  const { state, dispatch } = useDashboard();

  const filteredCategories = state.categories.filter(
    (category) =>
      category.name.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
      category.widgets.some(
        (widget) =>
          widget.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
          widget.text.toLowerCase().includes(state.searchTerm.toLowerCase())
      )
  );

  const handleSearch = (term) => {
    dispatch(setSearchTerm(term));
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="mt-2 text-gray-600">
            Manage your widgets and categories
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <CategoryManager />

        <div className="mb-8">
          <SearchBar onSearch={handleSearch} searchTerm={state.searchTerm} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <Category key={category.id} category={category} />
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No categories or widgets found matching your search.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
