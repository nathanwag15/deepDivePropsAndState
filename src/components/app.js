import React, { Component } from 'react';
import { JournalList } from './journals/journal_list';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>DevCamp React Starter</h1>
        <JournalList heading="List 1"/>
      </div>
    );
  }
}
