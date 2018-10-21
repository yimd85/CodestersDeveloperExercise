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
            <h1 style={{color: 'hotpink', fontSize: 70, }}>Boo's Boolean Mansion</h1>
          </Row>
          <Row vertical='center'>
            <Column flexGrow={1} horizontal='center'>
              <h3 style={{color: 'white', fontSize: 30 }}> The Button! represents on and off. Drop downs! pick our operators</h3>
              <h3 style={{color: 'white', fontSize: 30 }}> The Bottom Results Line! shows results. Add or Remove! lines</h3>
              <h3 style={{color: 'white', fontSize: 30 }}> Click the arrow if you dare ~Heeheehee~ </h3>
              <Link
                to="/booleanMansion"
                >
                  <img src={'https://i.imgur.com/ErXLINXt.png'} alt='test' />
                </Link>
            </Column>
            <Column flexGrow={1} horizontal='center'>
              <img src={'https://i.imgur.com/9fKxIhnm.png'} alt='test' />
            </Column>
          </Row>
        </Column>


      </div>
    )
  }
}

export default Explanation;
