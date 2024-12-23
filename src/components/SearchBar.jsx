import React, { useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", query);
  };

  return (
    <div className="flex items-center justify-center py-8">
      <div className="flex items-center overflow-hidden w-96 relative ">
        <input
          type="text"
          placeholder="Search...."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-4 py-2 text-gray-700 outline-none border-2 focus:border-blue-500"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-3 hover:bg-blue-700 transition absolute -right-1 "
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
