import React from 'react'
import styled from "styled-components";
import Section from "./Section";
function Home() {
  return (
    <Container>
      <Section
           title="Model S"
           description="Order Online For Touchless Delivery"
           backgroundImg="model-s.jpg"
           leftBtnText="Custom order"
           rightBtnText ="Existing Inventory"
      />
      <Section 
           title="Model Y"
           description="Order Online For Touchless Delivery"
           backgroundImg="model-y.jpg"
           leftBtnText="Custom order"
           rightBtnText ="Existing Inventory"
      
      />
       <Section 
           title="Model 3"
           description="Order Online For Touchless Delivery"
           backgroundImg="model-3.jpg"
           leftBtnText="Custom order"
           rightBtnText ="Existing Inventory"
      
    /> 
    <Section 
      title="Model X"
      description="Order Online For Touchless Delivery"
      backgroundImg="model-x.jpg"
      leftBtnText="Custom order"
      rightBtnText ="Existing Inventory"
    />
    <Section
        title="Lowest Cost Solar Panels in America"
        description="Mooney-back guarantee"
        backgroundImg="solar-panel.jpg"
        leftBtnText="Order now"
        rightBtnText ="Learn more"
    />
    <Section
        title="Solar for New Roofs"
        description="Solar Roof Costs Less Than a New Roof "
        backgroundImg="solar-roof.jpg"
        leftBtnText="Order now"
        rightBtnText ="Learn more"
    />
     <Section
        title="Accessories"
        description=""
        backgroundImg="accessories.jpg"
        leftBtnText="Shop now"
    
      
    />

    </Container>
  )
}

export default Home
const Container =styled.div`
    height:100vh;
    z-index:10;
    li{
      display: flex;
      align-items: center;
      flex: 1;
      justify-content: center;
      padding-bottom: 23px;
      flex-wrap: nowrap;
      padding: 0 10px;
      
    }
    
  // @media (max-width: 768px) {
  //   display: none;
  // }
`

// const Footer = styled.div`
//     display:flex;
//     flex-direction:column;
//     a{
//       display:flex;
//       justify-content:space-between;
//       align-items:flex-start;
//       flex-direction:column;
//       text-align:left
//       marign:12px;

//     }
// `

  // li:not(:last-child)::before {
  //   content: '';
  // //   position: absolute;
  // //   top: 20%;
  // //   right: -3px; /* Adjust this value to control the spacing */
  // //   transform: translateY(-50%);
  // //   width: 10px; /* Adjust this value to control the spacing */
  // //   height: 80%; /* Adjust this value to control the spacing */
  // // /* Adjust the color if needed */
  // }
