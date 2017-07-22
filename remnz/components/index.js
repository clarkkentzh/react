import React from 'react';
import ReactDOM from 'react-dom';
import Head from './views/head';
import Foot from './views/foot';
import { Router, Route} from 'react-router';

class Zhao extends React.Component{
  render(){
    return (
      <div>
        <h1>这是开始的文件</h1>
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
