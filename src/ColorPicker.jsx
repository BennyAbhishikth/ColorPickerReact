import  { useState } from 'react';
import './ColorPicker.css';

const ColorPicker = () => {
  const [color, setColor] = useState('#ffffff');

  const handleColorChange = (e) => {
    const newColor = e.target.value;
    setColor(newColor);
    copyToClipboard(newColor);
  };

  const copyToClipboard = (color) => {
    navigator.clipboard.writeText(color).then(() => {
      alert(`Color code ${color} copied to clipboard!`);
    }, (err) => {
      console.error('Could not copy text: ', err);
    });
  };

  return (
    <div className="container">
      <h1>Choose Color</h1>
      <input 
        type="color" 
        value={color} 
        onChange={handleColorChange} 
      />
      <div 
        className="color-box" 
        style={{ backgroundColor: color }}
      />
    </div>
  );
};

export default ColorPicker;
