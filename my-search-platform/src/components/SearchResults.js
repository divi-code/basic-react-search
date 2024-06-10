import React from 'react';

const SearchResult = ({ results }) => {
  return (
    <div>
      {results.length > 0 ? (
        results.map((result, index) => <div key={index}>{result}</div>)
      ) : (
        <div>No results found.</div>
      )}
    </div>
  );
};

export default SearchResult;