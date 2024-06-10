import React, { useState } from 'react';
import db from '../database/db';

const AddPanel = () => {
  const [entry, setEntry] = useState('');

  const handleAdd = () => {
    db.add(entry);
    setEntry('');
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleAdd();
      }}
      className="flex flex-col space-y-2 mb-4"
    >
      <input
        type="text"
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        placeholder="Add a new entry"
        className="p-2 border rounded-md"
      />
      <button
        type="submit"
        className="p-2 bg-green-500 text-white rounded-md hover:bg-green-600"
      >
        Add
      </button>
    </form>
  );
};

export default AddPanel;