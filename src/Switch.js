import React from 'react';
import './Switch.css';

const Switch = (props) => {
  const {isOn,handleToggle} = props;
  return (
    <>
      <input
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
        checked = {isOn}
        onChange = {handleToggle}
      />
      
      <label
        className="react-switch-label"
        htmlFor={`react-switch-new`}
        style={{ background: isOn && '#06D6A0' }}
      >
        <span className={`react-switch-button`} />
      </label>
    </>
  );
};


  export default Switch;