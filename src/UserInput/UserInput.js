import React from 'react';

const userInput = (props) => {
  const inputStyle ={
    border: '2px solid red'
  }
  console.log('props input', props);

  return <input 
    type="text" 
    onChange={props.changed} 
    style={inputStyle}
    value={props.currentName} 
    />

};

export default userInput;