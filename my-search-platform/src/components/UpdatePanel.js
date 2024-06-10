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
    <div>
      <input type="number" value={index} onChange={(e) => setIndex(e.target.value)} />
      <input type="text" value={newEntry} onChange={(e) => setNewEntry(e.target.value)} />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default UpdatePanel;