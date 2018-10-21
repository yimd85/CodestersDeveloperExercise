import React from 'react';

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
