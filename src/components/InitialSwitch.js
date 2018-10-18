import React from 'react';
// import Operator from './Operator.js';


const Buttons = (props) => {
  return (
    <div>
          <button className={props.className} datastate={props.datastate}>
            <span>OFF</span>
          </button>
    </div>
  );
}


export default Buttons;
