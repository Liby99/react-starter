// @flow

import * as React from 'react';

import './styles/home.scss';

export default class Home extends React.Component<{}> {
  render() {
    return (
      <div className="home">
        <p>Hello World, React!</p>
        <img src="img/react.png" width="100" />
      </div>
    );
  }
}
