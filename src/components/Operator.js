import React from 'react';

const Operator = (props) => {
  return(
    <select id="mode" value={props.value} onChange={props.onChange}>
        <option value="&">and</option>
        <option value="|">or</option>
        <option value="^">xor</option>
    </select>
  );
}


export default Operator;
