import React, { useState } from 'react';
import db from '../database/db';

const SearchInput = ({ setResults }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    const results = db.search(query);
    setResults(results);
  };

  return (
    <form onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="input your search"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchInput;