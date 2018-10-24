import React, { Component } from 'react';
import { Column, Row } from 'simple-flexbox';
import { Link } from 'react-router-dom';
import '../App.css';


class Explanation extends Component {
  render() {
    return(
      <div className='welcome'>
        <Column flexGrow={1}>
          <Row horizontal='center'>
            <span  className='welcomeText' >Boo's Boolean Mansion</span>
          </Row>
          <Row vertical='center'>
            <Column flexGrow={1} horizontal='center'>
              <div style={{marginTop: 30 }}>
                <div className='largeDesc'> The Button! represents on and off. </div>
                <div className='largeDesc'> Drop downs! pick our operators</div>
                <div className='largeDesc'> Bottom Results Line! shows results. </div>
                <div className='largeDesc'> Add or Remove Rows!</div>
                <div className='largeDesc'> Click the arrow if you dare ~Heeheehee~ </div>
              </div>
              <Link
                to="/booleanMansion"
                >
                  <img src={'https://i.imgur.com/ErXLINXt.png'} alt='arrow' />
                </Link>
            </Column>
            <Column flexGrow={1} horizontal='center'>
              <img className='booImage' src={'https://i.imgur.com/pqHTzASm.png'} alt='glasses-boo' />
            </Column>
          </Row>
        </Column>


      </div>
    )
  }
}

export default Explanation;
