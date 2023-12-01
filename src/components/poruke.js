import { Component } from 'react';
import React from 'react';
import currentTime from './Vrijemesada';

class Messages extends Component {
  render() {
    const { messages } = this.props;
    return (
      <ul className='Messages-list'>
        {messages.map((m, index) => this.renderMessage(m, index))}
      </ul>
    );
  }

  renderMessage(message, index) {
    const { member, text } = message;
    const { currentMember } = this.props;

    if (!member || !member.id) {
      return null;
    }

    const messageFromMe = member.id === currentMember.id;
    const className = messageFromMe
      ? 'Messages-message currentMember'
      : 'Messages-message';
    const avatarLetter = member.clientData.username.charAt(0).toUpperCase();

    return (
      <li key={`${member.id}-${index}`} className={className}>
        <span
          className='avatar'
          style={{ backgroundColor: member.clientData.color }}
        >
          {avatarLetter}
        </span>
        <div className='Message-content'>
          <div className='username'>{member.clientData.username}</div>
          <div className='text'>{text}</div>
          <div className='time'>{currentTime}</div>
        </div>
      </li>
    );
  }
}

export default Messages;
