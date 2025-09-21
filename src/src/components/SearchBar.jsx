const SearchBar = ({ onSearch, searchTerm }) => {
  return (
    <div className="flex items-center space-x-4">
      <div className="flex-1 max-w-md">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Search widgets..."
          className="input-field"
        />
      </div>
      {searchTerm && (
        <button
          onClick={() => onSearch("")}
          className="text-gray-500 hover:text-gray-700"
          title="Clear search"
        >
          ×
        </button>
      )}
    </div>
  );
};

export default SearchBar;
