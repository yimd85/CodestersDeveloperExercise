import React from 'react';

const Operator = (prop) => {
  return(
    <select id="mode">
        <option value="and">and</option>
        <option value="or">or</option>
        <option value="xor">xor</option>
    </select>
  );
}


export default Operator;
