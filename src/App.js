/* eslint no-eval: 0 */
import React, { Component } from 'react';

import Operator from './components/Operator.js';
import Buttons from './components/InitialSwitch.js';
import './App.css';

class App extends Component {
  state = {
    array: [ {parenOne: "(", bineryOne: true, secondOperator: "&", bineryTwo: false, parenTwo: ")" }],
    finalAnswer: 0
  };

  addRow() {
    let copy = this.state.array;
    copy.push({parenOne: "(", firstOperator: "&", bineryOne: true, secondOperator: "&", bineryTwo: false, parenTwo: ")" })
    this.setState ({ array: copy }, () => { this.calculate(); });
  }

  removeRow() {
    let copy = this.state.array;
    if( copy.length > 1) { copy.pop(); }
    this.setState ({ array: copy }, () => { this.calculate(); });
  }

  operatorChange1 (index, event) {
    let copy = this.state.array;
    copy[index].firstOperator = event.target.value;
    this.setState ({ array: copy }, () => { this.calculate(); });
  }

  operatorChange2 (index, event) {
      let copy = this.state.array;
      copy[index].secondOperator = event.target.value;
    this.setState ({ array: copy }, () => { this.calculate(); });
  }

  changebineryOne (event, index){
    let x;
    if( event === true ) { x = false; } else { x = true; }
    let copy = this.state.array;
    copy[index].bineryOne = x;
    this.setState ({ array: copy }, () => { this.calculate(); });
  }

  changebineryTwo (event, index){
    let x;
    if( event === true ) { x = false; } else { x = true; }
    let copy = this.state.array;
    copy[index].bineryTwo = x;
    this.setState ({ array: copy }, () => { this.calculate(); });
  }

  calculate() {
    let copy = this.state.array;
    var vals=[];
    for(let i=0; i< copy.length; i++){
      if(i===0){
        vals.push(copy[i].parenOne, copy[i].bineryOne, copy[i].secondOperator, copy[i].bineryTwo, copy[i].parenTwo);
      } else {
        vals.push( copy[i].firstOperator, copy[i].parenOne, copy[i].bineryOne, copy[i].secondOperator, copy[i].bineryTwo, copy[i].parenTwo);
      }
    }
    let x = eval(vals.join(''));
    this.setState({ finalAnswer: x });
  }

  renderSwitches() {
    return this.state.array.map((item, index) => {
      if( index ===  0 ){
       return (
         <span key={index}>
                 <div>
                       <Buttons className={item.bineryOne ? 'true' : 'false'} indication={item.bineryOne ? 'On' : 'Off'} onClick={() => this.changebineryOne(item.bineryOne, index)}/>
                       <Operator value={item.secondOperator} onChange={(event) => this.operatorChange2(index, event)} />
                       <Buttons className={item.bineryTwo  ? 'true' : 'false'} indication={item.bineryTwo ? 'On' : 'Off'} onClick={() => this.changebineryTwo(item.bineryTwo, index)}/>
                       <Buttons className={"add"} indication={"+"} onClick={() => this.addRow()}/>
                       <Buttons className={"remove"} indication={"-"} onClick={() => this.removeRow()} />
                 </div>
         </span>
       );
     } else {
       return (
         <span key={index}>
                 <div className="container row">
                   <Operator value={item.firstOperator} onChange={(event) => this.operatorChange1(index, event)}/>
                 </div>
                 <div>
                       <Buttons className={item.bineryOne ? 'true' : 'false'} indication={item.bineryOne ? 'On' : 'Off'} onClick={() => this.changebineryOne(item.bineryOne, index)}/>
                       <Operator value={item.secondOperator} onChange={(event) => this.operatorChange2(index, event)} />
                       <Buttons className={item.bineryTwo  ? 'true' : 'false'} indication={item.bineryTwo ? 'On' : 'Off'} onClick={() => this.changebineryTwo(item.bineryTwo, index)}/>
                 </div>
         </span>
       );
     }
    });
  }

	render() {
    return (
        <div className="container row">
                  {this.renderSwitches() }
                  <div className={this.state.finalAnswer  ? 'light true' : 'light false'}><span>{this.state.finalAnswer  ? 'On' : 'Off'}</span></div>
        </div>
    );
  }
}

export default App;
