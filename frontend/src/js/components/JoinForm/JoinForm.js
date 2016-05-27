import React, { PropTypes } from 'react';
// import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import validate from './joinValidation';
import { Button, ControlLabel, FormGroup, FormControl } from 'react-bootstrap';
export const fields = ['fullName', 'company', 'phone', 'email'];

const JoinForm = (props) => {
  const {
    fields: { fullName, company, phone, email },
    handleSubmit,
    submitting
  } = props;

  const btnContainerStyle = {
    maxWidth: 400,
    margin: '0 auto'
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormGroup controlId="txtName">
        <ControlLabel>Name</ControlLabel>
        <FormControl type="text" placeholder="Full Name" {...fullName} />
        {fullName.error && fullName.touched && <div className="text-danger">{fullName.error}</div>}
      </FormGroup>
      <FormGroup controlId="txtCompany">
        <ControlLabel>Company Name</ControlLabel>
        <FormControl type="text" placeholder="Company" {...company} />
        {company.error && company.touched && <div className="text-danger">{company.error}</div>}
      </FormGroup>
      <FormGroup controlId="txtPhone">
        <ControlLabel>Phone Number</ControlLabel>
        <FormControl type="text" placeholder="Phone Number" {...phone} />
        {phone.error && phone.touched && <div className="text-danger">{phone.error}</div>}
      </FormGroup>
      <FormGroup controlId="txtEmail">
        <ControlLabel>Email Address</ControlLabel>
        <FormControl type="text" placeholder="Email Address" {...email} />
        {email.error && email.touched && <div className="text-danger">{email.error}</div>}
      </FormGroup>
      <div style={btnContainerStyle}>
        <Button type="submit" bsStyle="primary" block bsSize="large" disabled={submitting}>
          {submitting ? "Joining..." : "Start!"}
        </Button>
      </div>
    </form>
  );
};

JoinForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
};

export default reduxForm({
  form: 'survey',
  fields,
  validate
})(JoinForm);
