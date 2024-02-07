import React from "react";

const Search = () => {
  return (
    <div className=" sticky top-[9%] z-1">
      <form >
        <label className="mb-2 text-sm font-medium text-gray-900 sr-only">
          Search
        </label>
        <div >
          <input
            type="search"
            id="default-search"
            className=" w-full p-4 ps-10 text-sm text-gray-900  border-b border-gray-300 bg-white"
            placeholder="Search by Category/Item Name..."
            required
          />

        </div>
      </form>
    </div>
  );
};

export default Search;
