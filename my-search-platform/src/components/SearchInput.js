import React, { useState } from 'react';
import db from '../database/db';

const SearchInput = ({ setResults }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    const results = db.search(query);
    setResults(results);
  };

  return (
    <div>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchInput;