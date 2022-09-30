import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import "./ColorBox.css";

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {copied: false};
    this.handleCopy = this.handleCopy.bind(this);
  }
  handleCopy() {
    if (this.state.copied) return;
    this.setState({copied: true}, () => {
      setTimeout(() => this.setState({copied: false}), 1500);
    })
  }
  render() {
    const {name, background} = this.props;
    const {copied} = this.state;
    return (
      <CopyToClipboard text={background} onCopy={this.handleCopy}>
        <div style={{ background }}  className='ColorBox'>
          <div style={{ background }} className={`copy-overlay ${copied && "show"}`} />
          <div className={`copy-msg ${copied && "show"}`}>
            <h1>Copied!</h1>
            <p>{background}</p>
          </div>
          <div className='copy-container'>
            <div className='content'>
              <span className="name">{name}</span>
            </div>
            <button className='copy-button'>Copy</button>
          </div>
          <span className="more">MORE</span>
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;