import React from "react";

const TextField = props => {
  const { value, handleChange, label, id, name } = props;
  return (
    <React.Fragment>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        name={name}
        id={id}   
      />
    </React.Fragment>
  );
};

export default TextField;
