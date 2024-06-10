import React, { useState } from 'react';
import db from '../database/db';

const AddPanel = () => {
  const [entry, setEntry] = useState('');

  const handleAdd = () => {
    db.add(entry);
    setEntry('');
  };

  return (
    <form onSubmit={(e) => { e.preventDefault(); handleAdd(); }}>
      <input
        type="text"
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        placeholder="Add a new entry"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddPanel;