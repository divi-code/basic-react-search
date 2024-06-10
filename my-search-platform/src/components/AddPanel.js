import React, { useState } from 'react';
import db from '../database/db';

const AddPanel = () => {
  const [entry, setEntry] = useState('');

  const handleAdd = () => {
    db.add(entry);
    setEntry('');
  };

  return (
    <div>
      <input type="text" value={entry} onChange={(e) => setEntry(e.target.value)} />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddPanel;