import React, { Component } from 'react';
import Messages from './components/poruke';
import Input from './components/2';
import './App.css';

function Ime() {
  const charname = [
    'Emma',
    'Liam',
    'Olivia',
    'Noah',
    'Ava',
    'Isabella',
    'Sophia',
    'Jackson',
    'Lucas',
    'Mia',
    'Elijah',
    'Oliver',
    'Amelia',
    'Harper',
    'Ethan',
    'Aiden',
    'Aria',
    'Grayson',
    'Charlotte',
    'Mason',
  ];

  const charusername = [
    'Smith',
    'Johnson',
    'Williams',
    'Brown',
    'Jones',
    'García',
    'Rodriguez',
    'Martínez',
    'Hernández',
    'López',
    'González',
    'Perez',
    'Wilson',
    'Anderson',
    'Thomas',
    'Taylor',
    'Moore',
    'Jackson',
    'White',
    'Harris',
  ];

  const charnames = charname[Math.floor(Math.random() * charname.length)];
  const charusernames =
    charusername[Math.floor(Math.random() * charusername.length)];
  return charnames + ' ' + charusernames;
}

function randomColor() {
  return '#' + Math.floor(Math.random() * 0xffffff).toString(16);
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      member: {
        username: Ime(),
        color: randomColor(),
      },
    };

    this.drone = new window.Scaledrone('mnK8C2UNe6fUTjj9', {
      data: this.state.member,
    });
  }

  componentDidMount() {
    this.drone.on('open', (error) => {
      if (error) {
        return console.error(error);
      }
      const member = { ...this.state.member };
      member.id = this.drone.clientId;
      this.setState({ member });
    });

    const room = this.drone.subscribe('observable-room');
    room.on('data', (data, member) => {
      const messages = [...this.state.messages];
      messages.push({ member, text: data });
      this.setState({ messages });
    });
  }

  onSendMessage = (message) => {
    this.drone.publish({
      room: 'observable-room',
      message,
    });
  };

  render() {
    return (
      <div className='App'>
        <div className='App-logo'></div>
        <div className='App-header'>
          <h1>Započni razgovor!</h1>
        </div>
        <Messages
          messages={this.state.messages}
          currentMember={this.state.member}
        />
        <Input onSendMessage={this.onSendMessage} />
      </div>
    );
  }
}

export default App;
