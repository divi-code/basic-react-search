import React, { useState } from 'react';
import './App.css';
import SearchInput from './components/SearchInput';
import AddPanel from './components/AddPanel';
import UpdatePanel from './components/UpdatePanel';
import SearchResult from './components/SearchResults';

function App() {
  const [results, setResults] = useState([]);

  return (
    <div className="container mx-auto p-4 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-4">Search Platform</h1>
      <SearchInput setResults={setResults} />
      <AddPanel />
      <UpdatePanel />
      <SearchResult results={results} />
    </div>
  );
}

export default App;