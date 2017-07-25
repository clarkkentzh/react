import React from 'react';
import ReactDOM from 'react-dom';
import Head from './views/head';
import Foot from './views/foot';
import { Router, Route} from 'react-router';

class Zhao extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      names:'',
      ages:''
    }
  }
  componentWillMount(){
    $.get("/api/userlist",(result) => {
      var str = result[0];
      console.log(result);
      this.setState({
        names : str._id,
        ages : str.name
      })
    });
  }
  render(){
    return (
      <div>
        <h1>START</h1>
        <h2>{this.state.names}</h2>
        <h2>{this.state.ages}</h2>
        <Head name="react-bootstrap"></Head>
        <Foot></Foot>
      </div>
    )
  }
}

ReactDOM.render(
  <Zhao />,
  document.getElementById("first")
);
