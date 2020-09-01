import React from 'react';
import '../css/bar.css';



  
function Bar(props) {
  const color = props.color;

  return (
    <ol  style={{ height:props.height + "%" , width: 1+ "%" ,  backgroundColor: color }} className="Bar">
        
    </ol>
  );
}

export default Bar;
