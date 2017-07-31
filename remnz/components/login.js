import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { FormGroup,ControlLabel,FormControl,ButtonToolbar,Button,Glyphicon,Feedback } from 'react-bootstrap';

class Zhao extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
      <form  action="/api/login" method="post">
        <FormGroup controlId="name">
          <ControlLabel>name:</ControlLabel>
          <FormControl type="text" name="username"  placeholder="text" />
          <FormControl.Feedback />
        </FormGroup>

        <FormGroup controlId="passwd1">
          <ControlLabel>password:</ControlLabel>
          <FormControl type="text" name="password"  placeholder="text" />
          <FormControl.Feedback />
        </FormGroup>

        <ButtonToolbar>
          <Button
            type="submit" bsStyle="primary" bsSize="large" ><Glyphicon glyph="star" />OK</Button>
        </ButtonToolbar>
      </form>
    </div>
    )
  }
}

ReactDOM.render(
  <Zhao />,
  document.getElementById("three")
);
