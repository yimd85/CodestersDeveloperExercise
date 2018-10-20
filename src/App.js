import React, { Component } from 'react';

import Operator from './components/Operator.js';
import Buttons from './components/InitialSwitch.js';
import './App.css';

class App extends Component {
  state = {
    test: [ {b1: false, op2: "|", b2: true }]
  };

  addRow = () => {
    let piece = this.state.test;
    piece.push({op1: "^", b1: false, op2: "|", b2: true })
    this.setState ({ test: piece }
    ,
      () => { console.log(this.state.test); }
    );
  }

  removeRow = () => {
    let copy = this.state.test;
    if( copy.length > 1) {
      copy.pop();
    }
    this.setState ({ test: copy }
      ,
        () => { console.log(this.state.test); }
    );
  }

  operatorChange = (event) => {
    console.log(event);
    this.setState({ value: event.target.value})
  }

  changeB1 (event, index){
    let x;
    if(event === true) { x = false; } else { x = true; }
    let copy = this.state.test;
    copy[index].b1 = x;
    this.setState({ test: copy})
  }

  changeB2 (event, index){
    let x;
    if(event === true) { x = false; } else { x = true; }
    let copy = this.state.test;
    copy[index].b2 = x;
    this.setState({ test: copy})
  }

  renderHelperFunction() {
    return this.state.test.map((item, index) => {
      if( index ===  0 ){
       return (
         <span key={index}>
                 <div>
                       <Buttons className={item.b1 ? 'true' : 'false'} indication={item.b1 ? 'On' : 'Off'} onClick={() => this.changeB1(item.b1, index)}/>
                       <Operator value={item.op2} onChange={this.operatorChange} />
                       <Buttons className={item.b2  ? 'true' : 'false'} indication={item.b2 ? 'On' : 'Off'} onClick={() => this.changeB2(item.b2, index)}/>
                       <Buttons className={"add"} indication={"+"} onClick={this.addRow}/>
                       <Buttons className={"remove"} indication={"-"} onClick={this.removeRow} />
                 </div>
         </span>
       );
     } else {
       return (
         <span key={index}>
                 <div className="container row">
                   <Operator value={item.op1} onChange={this.operatorChange}/>
                 </div>

                 <div>
                       <Buttons className={item.b1 ? 'true' : 'false'} indication={item.b1 ? 'On' : 'Off'} onClick={() => this.changeB1(item.b1, index)}/>
                       <Operator value={item.op2} onChange={this.operatorChange} />
                       <Buttons className={item.b2  ? 'true' : 'false'} indication={item.b2 ? 'On' : 'Off'} onClick={() => this.changeB2(item.b2, index)}/>
                 </div>
         </span>
       );
     }
    });
  }

	render() {
    return (
      <div className="container row">
                  {this.renderHelperFunction() }
                  <div className="light true"><span>OFF</span></div>
        </div>
    );
  }
}

export default App;


//
// function init_jquery(){
//   var $root = $('#jquery-root');
//   var $light = $('.light');
//   var $mode = $('#mode');
//
//   function setOn($element){
//     $element.data('state', 'on');
//     $element.addClass('on');
//     $element.removeClass('off');
//     $element.html("<span>ON</span>");
//   }
//
//   function setOff($element){
//     $element.data('state', 'off');
//     $element.addClass('off');
//     $element.removeClass('on');
//     $element.html("<span>OFF</span>");
//   }
//
//   function switchLogic(s1, s2){
//     switch($mode.val()){
//       case "or":
//         return s1 || s2;
//       case "xor":
//         return (s1 || s2) && !(s1 && s2);
//       case "and":
//         return s1 && s2;
//       default:
//         return false;
//     }
//   }
//
//   function updateLight(){
//     var switches = $('.switch')
//     var sw1 = switches[0];
//     var sw2 = switches[1];
//
//     var state1 = $(sw1).data('state') === 'on';
//     var state2 = $(sw2).data('state') === 'on';
//     if (switchLogic(state1, state2)){
//       setOn($light);
//     }
//     else{
//       setOff($light);
//     }
//   }
//
//   $('button.switch').click(function(){
//     var $btn = $(this);
//     if ($btn.data('state') === 'on'){
//       setOff($btn);
//     }
//     else if ($btn.data('state') === 'off'){
//       setOn($btn);
//     }
//     updateLight();
//   })
//
//   $('select#mode').change(function(){
//     updateLight();
//   })
//
// }
//
// $(init_jquery);


// Plans
// console.log((true^false)&(true^false)&(true^false));
//
//
//
// const x = ['true', '^', 'false', '&','true', '^', 'false','&','true', '^', 'false', '&','true', '^', 'false'];
//
// console.log(eval(x.join('')));
// line (add a line)
// operator
// line (remove a line)
//  operator
// line (remove a line)

// push operator, a button, operator and button.
// use ternary operatorrs for true and false.
// use case for operators
