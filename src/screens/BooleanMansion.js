import React, { Component } from 'react';
import Header from '../components/Header';
import Body from '../components/Body';

class BooleanMansion extends Component {
  render() {
    return(
      <div
            style={{
            backgroundImage: "url(https://i.imgur.com/0JfRsk6.jpg)",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'noRepeat',
            minHeight: 1060,
            }}
        >
        <Header />
        <Body />
      </div>
    )
  }
}

export default BooleanMansion;
