import React from 'react';
import './Styles/App.css';

import Auth from './Auth/AuthContainer';
import Registration from './Registration/RegContainer';
import Debug from './Debug/DebugContainer';

export default class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <h1>Complex State</h1>

        <div className="forms">
          <Auth />
          <Registration />
        </div>

        <Debug />
      </div>
    )
  }
}