import React from 'react';
import Draggable from 'react-draggable';

const DraggableBox = ({ children}) => {
  return (
    <Draggable handle=".handle">
      <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
        <div className="handle" style={{ cursor: 'move', background: '#ddd', padding: '5px' }}>
          {`Title`}
        </div>
        <div style={{ padding: '10px', minHeight: '100px' }}>
          {children}
        </div>
      </div>
    </Draggable>
  );
};

export default DraggableBox;