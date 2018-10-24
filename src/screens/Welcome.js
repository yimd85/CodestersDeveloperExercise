import React, { Component } from 'react';
import { Column, Row } from 'simple-flexbox';
import { Link } from 'react-router-dom';
import '../App.css';


class BooleanMansion extends Component {
  render() {
    return(
      <div className='welcome'>
        <Column flexGrow={1}>
          <Row horizontal='center'>
            <span  className='welcomeText' >Boo's Boolean Mansion</span>
          </Row>
          <Row vertical='center'>
            <Column flexGrow={1} horizontal='center'>
              <img className='booImage' src={'https://i.imgur.com/pqHTzASm.png'} alt='glasses-boo' />
            </Column>
            <Column flexGrow={1} horizontal='start'>
              <div style={{marginTop: 30 }}>
                <div className='largeDesc'> Greetings!</div>
                <div className='largeDesc'> And welcome to my mansion.</div>
                <div className='largeDesc'> We will learn about boo!-le-an operators today.</div>
                <div className='largeDesc'> Click on the next arrow to get started.</div>
              </div>
              <Link
                to='/explanation'
                >
                  <img src={'https://i.imgur.com/ErXLINXt.png'} alt='arrow' />
                </Link>
            </Column>
          </Row>
        </Column>


      </div>
    )
  }
}

export default BooleanMansion;
