import React from 'react';
import ReactDOM from 'react-dom';
import Head from './views/head';
import Foot from './views/foot';
import { Router, Route} from 'react-router';

class Two extends React.Component{
  render(){
    return (
      <li>{this.props.data.username}</li>
    )
  }
}

class First extends React.Component{
  render(){
    if(this.props.results){
      return (
        <ul>
          {this.props.results.map(function(result){
            return <Two data={result} />
          })}
        </ul>
      )
    }else {
      return ( <ul></ul> )
    }
  }
}


class Zhao extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      result:''
    }
  }
  componentWillMount(){
    $.get("/api/userlist",(result) => {
      this.setState({
        result:result
      })
    });


  // 豆瓣api，put和delete用下面的方式发送请求
  //   $.ajax({
  //     method:"put",
  //     async:false,
  //     // url:"https://api.douban.com/v2/movie/coming_soon",
  //     url:"/api/register",
  //
  // //下面是浏览模式，jsonp是跨服务器，本地服务器不用
  //     // dataType:"jsonp",
  //     success:function(data){
  //       console.log(data);
  //     },
  //     error:function(err){
  //       alert("err");
  //     }
  //   })
  }
  render(){
    console.log("+++++++++++++++++",this.state.result);
    return (
      <div>
        <h1>START</h1>
        <First results={this.state.result} />
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
