import React from 'react';
import { Header, AuctionTimer } from '../../components';

export default class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.object.isRequired
  };

  render() {
    return (
      <div>
        <Header />
        <AuctionTimer initialTimeRemaining={180000} />
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}
