import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as HomeActions from '../../actions/HomeActions';

@connect(state => state.Sample)
export default class Home extends Component {
  static propTypes = {
    title: React.PropTypes.string.isRequired,
    dispatch: React.PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.actions = this.createActions(props.dispatch);
  }

  createActions(dispatch) {
    return bindActionCreators(HomeActions, dispatch);
  }

  render() {
    const { title } = this.props;
    return (
      <main>
        <h1 className="text">Welcome {title}!</h1>
        <button onClick={e => this.actions.changeTitle(prompt())}>
          Update Title
        </button>
      </main>
    );
  }
}
