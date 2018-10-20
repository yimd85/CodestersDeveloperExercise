/* eslint no-eval: 0 */
import React, { Component } from 'react';
import Operator from './Operator.js';
import Buttons from './InitialSwitch.js';
// import Header from './Header';
import '../App.css';
const trueImage = "https://i.imgur.com/p7xyagSs.png";
const falseImage = 'https://i.imgur.com/uAPuQUSs.png';
const orImage = 'https://i.imgur.com/eGUy5qT.png';
const andImage = 'https://i.imgur.com/F2fCUuj.png';
const xorImage = 'https://i.imgur.com/8tyQKLU.png';

class Body extends Component {
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

  imageHelper(image) {
    if (image === "&" ) {
      return andImage;
    } else if (image === "|") {
      return orImage;
    } else if (image === "^") {
      return xorImage;
    } else {
      return falseImage;
    }
  }


  renderSwitches() {
    return this.state.array.map((item, index) => {
      if( index ===  0 ){
       return (
         <span key={index}>
                 <div>
                   <Buttons className={item.bineryOne ? 'true radius' : 'false radius'} indication={item.bineryOne ? 'On' : 'Off'} onClick={() => this.changebineryOne(item.bineryOne, index)}/>
                   <Operator value={item.secondOperator} onChange={(event) => this.operatorChange2(index, event)} />
                   <Buttons className={item.bineryTwo  ? 'true radius' : 'false radius'} indication={item.bineryTwo ? 'On' : 'Off'} onClick={() => this.changebineryTwo(item.bineryTwo, index)}/>
                       <Buttons className={"add"} indication={"+"} onClick={() => this.addRow()}/>
                       <Buttons className={"remove"} indication={"-"} onClick={() => this.removeRow()} />
                       <img className={"imageClass"} src={item.bineryTwo ? trueImage : falseImage} alt='test' />
                       <img className={"imageClass"} src={this.imageHelper(item.secondOperator)} alt='test' />
                       <img className={"imageClass"} src={item.bineryOne ? trueImage : falseImage} alt='test' />
                 </div>
         </span>
       );
     } else {
       return (
         <span key={index}>
           <img className={"imageClass"} src={this.imageHelper(item.firstOperator)} alt='test' />
                 <div className="container row block">

                     <Operator value={item.firstOperator} onChange={(event) => this.operatorChange1(index, event)}/>

                 </div>
                 <div>
                       <Buttons className={item.bineryOne ? 'true radius' : 'false radius'} indication={item.bineryOne ? 'On' : 'Off'} onClick={() => this.changebineryOne(item.bineryOne, index)}/>
                       <Operator value={item.secondOperator} onChange={(event) => this.operatorChange2(index, event)} />
                       <Buttons className={item.bineryTwo  ? 'true radius' : 'false radius'} indication={item.bineryTwo ? 'On' : 'Off'} onClick={() => this.changebineryTwo(item.bineryTwo, index)}/>
                       <img className={"imageClass"} src={item.bineryTwo ? trueImage : falseImage} alt='test' />
                       <img className={"imageClass"} src={this.imageHelper(item.secondOperator)} alt='test' />
                       <img className={"imageClass"} src={item.bineryOne ? trueImage : falseImage} alt='test' />
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
                  <div className={this.state.finalAnswer  ? 'light true' : 'light false'}>
                      <span>{this.state.finalAnswer  ? 'On' : 'Off'}
                          {/* <img src="https://i.imgur.com/FXDc82ls.png" alt='test' /> */}
                      </span>
                  </div>
        </div>
    );
  }


}


export default Body;
