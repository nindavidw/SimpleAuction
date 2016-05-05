import React from 'react';

export default class AuctionTimer extends React.Component {
  static propTypes = {
    initialTimeRemaining: React.PropTypes.number.isRequired,
    completeCallback: React.PropTypes.func,
    interval: React.PropTypes.number
  };

  static defaultProps = {
    completeCallback: null,
    interval: 1000
  };

  constructor(props) {
    super(props);

    this.state = {
      timeRemaining: props.initialTimeRemaining,
      timeoutId: null,
      prevTime: null
    };
  }

  componentDidMount() {
    this.tick();
  }

  componentWillUnmount() {
    clearTimeout(this.state.timeoutId);
  }

  getFormattedTime(milliseconds) {
    const totalSeconds = Math.round(milliseconds / 1000);

    let seconds = parseInt(totalSeconds % 60, 10);
    let minutes = parseInt(totalSeconds / 60, 10);

    seconds = seconds < 10 ? `0${seconds}` : seconds;
    minutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${minutes}:${seconds}`;
  }

  tick() {
    const currentTime = Date.now();
    const dt = this.state.prevTime ? (currentTime - this.state.prevTime) : 0;
    const { interval } = this.props;

    // correct for small variations in actual timeout time
    const timeRemainingInInterval = (interval - (dt % interval));
    let timeout = timeRemainingInInterval;

    if (timeRemainingInInterval < (interval / 2.0)) {
      timeout += interval;
    }

    const timeRemaining = Math.max(this.state.timeRemaining - dt, 0);
    const countdownComplete = (this.state.prevTime && timeRemaining <= 0);

    if (this.state.timeoutId) { clearTimeout(this.state.timeoutId); }

    this.setState({
      timeoutId: countdownComplete ? null : setTimeout(this.tick.bind(this), timeout),
      prevTime: currentTime,
      timeRemaining
    });

    if (countdownComplete) {
      if (this.props.completeCallback) { this.props.completeCallback(); }
      return;
    }
  }

  render() {
    const timeRemaining = this.state.timeRemaining;

    return (
      <div className="timer container text-right">
        Auction Closes in: {this.getFormattedTime(timeRemaining)}
      </div>
    );
  }
}
