import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
text-align: center;
font-size: 40px;
margin-bottom: 120px;
`

const Body = styled.div`
text-align: center;
font-size: 25px;
margin-left: 25%;
margin-right: 25%;
`


function OurPlan() {
  return (
    <>
        <Header >
          <h1>Our Plan</h1> 
        </Header>
        <br></br>
        <Body >
        <h2>Our goal is to build a team of creatives from all walks of life to support and grow together! I always say this, If a sculptor says they are going to put out a display it may attract 5 people. Now if you have 10 sculptors all in one place, you may get 100 people all of which came to support their artist but fell in love with another. This gives the best and quickest way for rapid growth as an artist in the modern world.</h2>
        </Body>
    </>
  );
}

export default OurPlan;