import React, { useState } from 'react';
import db from '../database/db';

const UpdatePanel = () => {
  const [index, setIndex] = useState('');
  const [newEntry, setNewEntry] = useState('');

  const handleUpdate = () => {
    db.update(Number(index), newEntry);
    setIndex('');
    setNewEntry('');
  };

  return (
    <form onSubmit={(e) => { e.preventDefault(); handleUpdate(); }}>
      <input
        type="number"
        value={index}
        onChange={(e) => setIndex(e.target.value)}
        placeholder="Update details"
      />
      <input
        type="text"
        value={newEntry}
        onChange={(e) => setNewEntry(e.target.value)}
        placeholder="New Details"
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default UpdatePanel;