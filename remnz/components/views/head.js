import React, { Component } from 'react';
import { Button, ButtonToolbar, ButtonGroup,Carousel,Item,Caption } from 'react-bootstrap';

class Head extends React.Component{
  render(){
    return(
      <div>
        <h1>Hello {this.props.name}</h1>
        <ButtonToolbar>
          <ButtonGroup>
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>4</Button>
          </ButtonGroup>

          <ButtonGroup>
            <Button>5</Button>
            <Button>6</Button>
            <Button>7</Button>
          </ButtonGroup>

          <ButtonGroup>
            <Button>8</Button>
          </ButtonGroup>
        </ButtonToolbar>
        <Carousel>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src="/images/1.jpg"/>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src="/images/2.jpg"/>
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src="/images/3.jpg"/>
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src="/images/4.jpg"/>
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    )
  }
}
module.exports = Head;
