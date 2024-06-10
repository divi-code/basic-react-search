import React, { useState } from 'react';
import SearchInput from './components/SearchInput';
import AddPanel from './components/AddPanel';
import UpdatePanel from './components/UpdatePanel';
import SearchResult from './components/SearchResult';

function App() {
  const [results, setResults] = useState([]);

  return (
    <div>
      <h1>Search Platform</h1>
      <SearchInput setResults={setResults} />
      <AddPanel />
      <UpdatePanel />
      <SearchResult results={results} />
    </div>
  );
}

export default App;
