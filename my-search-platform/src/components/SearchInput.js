import React, { useState } from 'react';
import db from '../database/db';

const SearchInput = ({ setResults }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    const results = db.search(query);
    setResults(results);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSearch();
      }}
      className="flex flex-col space-y-2 mb-4"
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search query"
        className="p-2 border rounded-md"
      />
      <button
        type="submit"
        className="p-2 bg-purple-500 text-white rounded-md hover:bg-purple-600"
      >
        Search
      </button>
    </form>
  );
};

export default SearchInput;