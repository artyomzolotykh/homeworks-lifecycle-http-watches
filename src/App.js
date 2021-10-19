import React, { useState } from 'react';
import './App.css';
import DataForm from './components/DataForm';
import Watch from './components/Watch';

function App() {
  const [titleValue, setTitleValue] = useState('');
  const [timeValue, setTimeValue] = useState('');
  const [listing, setListing] = useState([]);
  const [ids, setId] = useState(1);

  const handleTitleChange = value => {
    setTitleValue(value);
  }

  const handleTimeChange = value => {
    setTimeValue(value);
  }

  const handleAddWatch = () => {
    const newItem = {
      'id' : ids,
      'title' : titleValue,
      'time' : timeValue
    };
    setId(prevId => prevId + 1);
    setListing(prevListing => [...prevListing, newItem]);

    setTitleValue('');
    setTimeValue('');
  }

  const handleRemoveItem = (id) => {
    setListing(prevListing => prevListing.filter(o => o.id !== id));
  }

  return (
    <div className="App">
      <DataForm
        titleValue={titleValue}
        timeValue={timeValue}
        onTitleChange={handleTitleChange}
        onTimeChange={handleTimeChange}
        addWatch={handleAddWatch}
      />
      <div className="Wathes">
        {listing.map(item => <Watch key={item.id} item={item} removeItem={() => handleRemoveItem(item.id)} />)}
      </div>
    </div>
  );
}

export default App;
