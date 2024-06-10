import React from 'react';

const SearchResult = ({ results }) => {
  return (
    <div className="results mt-4">
      {results.length > 0 ? (
        results.map((result, index) => (
          <div key={index} className="p-2 border-b last:border-none">
            {result}
          </div>
        ))
      ) : (
        <div className="p-2">No results found.</div>
      )}
    </div>
  );
};

export default SearchResult;