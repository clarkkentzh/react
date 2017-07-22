import React, { Component } from 'react';
import { Button, Jumbotron,ProgressBar } from 'react-bootstrap';

class Foot extends React.Component{
  render(){
    return(
      <div>
        <Jumbotron>
          <h1>Hello, world!</h1>
          <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <p><Button bsStyle="primary">点击</Button></p>
        </Jumbotron>
        <ProgressBar striped bsStyle="success" now={40} />
        <ProgressBar striped bsStyle="info" now={20} />
        <ProgressBar striped bsStyle="warning" now={60} />
        <ProgressBar striped bsStyle="danger" now={80} />
      </div>
    )
  }
}
module.exports = Foot;
