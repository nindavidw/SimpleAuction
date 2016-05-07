import React from 'react';
import Helmet from 'react-helmet';
import {
  Button,
  ControlLabel,
  FormControl,
  FormGroup,
  Row,
  Col
} from 'react-bootstrap';

export default class Join extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
    alert(this.refs.name);
  }

  render() {
    const btnContainerStyle = {
      maxWidth: 400,
      margin: '0 auto'
    };

    return (
      <div className="join-page">
        <Helmet title="Join" />
        <Row><Col md={8} mdPush={2}>
          <h1> Join the Auction </h1>
          <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="txtName">
              <ControlLabel>Name</ControlLabel>
              <FormControl type="text" placeholder="" ref="name" />
            </FormGroup>
            <FormGroup controlId="txtCompany">
              <ControlLabel>Company Name</ControlLabel>
              <FormControl type="text" placeholder="" />
            </FormGroup>
            <FormGroup controlId="txtPhone">
              <ControlLabel>Phone Number</ControlLabel>
              <FormControl type="text" placeholder="" />
            </FormGroup>
            <FormGroup controlId="txtEmail">
              <ControlLabel>Email Address</ControlLabel>
              <FormControl type="email" placeholder="" />
            </FormGroup>
            <div style={btnContainerStyle}>
              <Button type="submit" bsStyle="primary" block bsSize="large">
                Start!
              </Button>
            </div>
          </form>
        </Col></Row>
      </div>
    );
  }
}
