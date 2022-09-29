import React, { Component } from 'react';
import "./ColorBox.css";

class ColorBox extends Component {
  render() {
    const {name, background} = this.props;
    return (
      <div style={{ background }}  className='ColorBox'>
        <div className='copy-container'>
          <div className='content'>
            <span class="name">{name}</span>
          </div>
          <button className='copy-button'>Copy</button>
        </div>
        <span class="more">MORE</span>
      </div>
    );
  }
}

export default ColorBox;