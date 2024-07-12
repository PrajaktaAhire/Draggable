import React, { useState } from 'react';
import DraggableBox from './DraggableBox.jsx';
import './App.css';

function App() {
  const [components, setComponents] = useState([]);

  const addParent = () => {
    setComponents([...components, components.length + 1]);
  };

  const renderNestedComponents = (components, index) => {
    if (index < 0)
      return <div className="blank-box" />;

    return (
      <DraggableBox key={index}>
        {renderNestedComponents(components, index - 1)}
      </DraggableBox>
    );
  };

  return (
    <div className="App">
      <button onClick={addParent}>Add Parent</button>
      <div className="main-area">
        {renderNestedComponents(components, components.length)}
      </div>
    </div>
  );
}

export default App;