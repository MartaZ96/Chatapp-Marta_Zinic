import React, { Component } from 'react';
import currentTime from './Vrijemesada.js';

class Input extends Component {
  state = {
    text: '',
  };

  onChange = (e) => {
    this.setState({ text: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { text } = this.state;

    const currentFormatTime = currentTime();

    if (text.trim() === '') {
      return;
    }

    const combineMsg = `${text}\n[${currentFormatTime}]`;
    /*this.props.onSendMessage(`${text}\n[${currentFormatTime}]`);*/
    this.props.onSendMessage(combineMsg);
    this.setState({ text: '' });
  };

  render() {
    return (
      <div className='Input'>
        <form onSubmit={this.onSubmit}>
          <input
            onChange={this.onChange}
            value={this.state.text}
            type='text'
            placeholder='Your message:'
            autoFocus
          />
          <button type='submit'>Send the message</button>
        </form>
      </div>
    );
  }
}

export default Input;
