import React, { Component } from 'react';

import Operator from './components/Operator.js';
import './App.css';

class App extends Component {

   initialswitch() {
     return (
       <div>
        <button className="switch switch-1 off" data-state="off"><span>OFF</span></button>
                    <Operator />
              <button className="switch switch-2 off" data-state="off"><span>OFF</span></button>
         </div>
     )
   }

    additionalSwitch(){
      return (
        <div>
          <div class="row">
            <Operator />
          </div>
          {this.initialswitch()}
        </div>
      );
    }


    switchCountRender() {
          return (
              <div className="row">
                {this.initialswitch()}
              </div>
          );
        }



  	render() {
      return (
        <div>
          {this.switchCountRender()}
            <div className="row">
              <div className="light off"><span>OFF</span></div>
            </div>
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
