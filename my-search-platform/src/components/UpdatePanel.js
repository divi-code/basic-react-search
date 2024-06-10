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
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleUpdate();
      }}
      className="flex flex-col space-y-2 mb-4"
    >
      <input
        type="number"
        value={index}
        onChange={(e) => setIndex(e.target.value)}
        placeholder="Index"
        className="p-2 border rounded-md"
      />
      <input
        type="text"
        value={newEntry}
        onChange={(e) => setNewEntry(e.target.value)}
        placeholder="New entry"
        className="p-2 border rounded-md"
      />
      <button
        type="submit"
        className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Update
      </button>
    </form>
  );
};

export default UpdatePanel;