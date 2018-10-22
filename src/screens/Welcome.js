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
            <h1 style={{color: 'hotpink', fontSize: 70, }}>Boo's Boolean Mansion</h1>
          </Row>
          <Row vertical='center'>
            <Column flexGrow={1} horizontal='center'>
              <img src={'https://i.imgur.com/pqHTzASm.png'} alt='test' />
            </Column>
            <Column flexGrow={1} horizontal='start'>
              <h3 style={{color: 'white', fontSize: 40 }}> Greetings! And welcome to my mansion.</h3>
              <h3 style={{color: 'white', fontSize: 25 }}> We will learn about boo!-le-an operators today.</h3>
              <h3 style={{color: 'white', fontSize: 25 }}> Click on the next arrow to get started.</h3>
              <Link
                to='/explanation'
                >
                  <img src={'https://i.imgur.com/ErXLINXt.png'} alt='test' />
                </Link>
            </Column>
          </Row>
        </Column>


      </div>
    )
  }
}

export default BooleanMansion;
