import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { FormGroup,ControlLabel,FormControl,ButtonToolbar,Button,Glyphicon,Feedback } from 'react-bootstrap';

let name = "";
let passwd = "";
class Zhao extends React.Component{
  constructor(props){
    super(props);
    this.state = {result:true,inputs:null,oks:""}
  }
  handle1(event){
    name = event.target.value;
  }
  handle2(event){
    passwd = event.target.value;
  }
  handle3(event){
    if(passwd === event.target.value){
      this.setState({
        result:false,
        inputs:"success"
      })
    }else {
      this.setState({
        result:true,
        inputs:"error"
      })
    }
  }
  handle(event){
    event.preventDefault();
    let datas = {
      username:name,
      password:passwd
    };
    $.post("/api/login",datas,(data) => {
      var ok1 = data.result;
      this.setState({oks:ok1})
    })
  }
  render(){
    var result = this.state.result;
    var inputs = this.state.inputs;
    console.log(this.state.oks);
    return (
      <div>
      <h1>{this.state.oks}</h1>
      <form onSubmit={this.handle.bind(this)}>
        <FormGroup controlId="name">
          <ControlLabel>Textarea</ControlLabel>
          <FormControl type="text" onChange={this.handle1.bind(this)} placeholder="text" />
          <FormControl.Feedback />
        </FormGroup>

        <FormGroup controlId="passwd1" validationState={inputs}>
          <ControlLabel>Textarea</ControlLabel>
          <FormControl type="text" onChange={this.handle2.bind(this)} placeholder="text" />
          <FormControl.Feedback />
        </FormGroup>

        <FormGroup controlId="passwd2" validationState={inputs}>
          <ControlLabel>Textarea</ControlLabel>
          <FormControl type="text" onChange={this.handle3.bind(this)} placeholder="text" />
          <FormControl.Feedback />
        </FormGroup>

        <ButtonToolbar>
          <Button
            type="submit" bsStyle="primary" bsSize="large" disabled={result}><Glyphicon glyph="star" />OK</Button>
        </ButtonToolbar>
      </form>
    </div>
    )
  }
}

ReactDOM.render(
  <Zhao />,
  document.getElementById("two")
);
