import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { JoinForm } from '../../components';


export default class Join extends React.Component {
  handleSubmit(data) {
    window.alert('Data submitted!' + JSON.stringify(data));
  }

  render() {
    return (
      <div className="join-page">
        <Helmet title="Join" />
        <Row>
          <Col md={8} mdPush={2}>
            <h1> Join the Auction </h1>
            <JoinForm onSubmit={this.handleSubmit} />
          </Col>
        </Row>
      </div>
    );
  }
}
