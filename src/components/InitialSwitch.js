import React from 'react';
// import Operator from './Operator.js';


const Buttons = (props) => {
  return (
    <span>
          <button className={props.className} datastate={props.datastate} onClick={props.onClick}>
            <span>{props.indication}</span>
          </button>
    </span>
  );
}


export default Buttons;
