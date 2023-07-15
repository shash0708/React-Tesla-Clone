import React,{useState} from 'react';
import styled from "styled-components";
import "./Header.css"
// import MenuIcon from '@material-ui/icons/Menu';
// import CloseIcon from '@material-ui/icons/Close';
// import {selectCars} from '../features/car/carSlice';
// import {useSelector} from 'react-redux';
export default function Header() {
  const [burgerStatus,setBurgerStatus] = useState(false);
  // const cars= useSelector(selectCars)
  return (
    <Container>
      <a href="/">
        <img src="/images/logo.svg" alt=""/>
      </a>
      <Buttons>
      <Menu className='nav-link' style={{fontFamily: 'Ubuntu, sans-serif'}}>
       <p className='py-1 px-3 hover:rounded hover:bg-black/5'><a href="/">Model 3</a></p>
       <p><a href="/" className='one' >Model X</a></p>
       <p><a href="/"  className='two'>Model S</a></p>
       <p><a href="/"  className='three'>Model Y</a></p>

      </Menu>
      </Buttons>
      <RightMenu>
        <a href="/">Shop</a>
        <div>       
          <a href="/">Account</a> 
        </div>
       <p onClick={()=>setBurgerStatus(true)} ><i class="fa-solid fa-bars" ></i></p>
         {/* <CustomMenuIcon onClick={()=>setBurgerStatus(true)}/>  */}
      </RightMenu>
      <BurgerNav show={burgerStatus}>
             <CloseWrapper>
              <p  onClick={()=>setBurgerStatus(false)} ><i class="fa-solid fa-circle-xmark"></i></p>
                  {/* <CustomClose onClick={()=>setBurgerStatus(false)}/> */}
             </CloseWrapper>
             <li><a href='/'>Existing Inventory</a></li>
             <li><a href='/'>Used Inventory</a></li>
             <li><a href='/'>Trade-in</a></li>
             <li><a href='/'>Existing Inventory</a></li>
             <li><a href='/'>Existing Inventory</a></li>
             <li><a href='/'>Existing Inventory</a></li>
             <li><a href='/'>Existing Inventory</a></li>
             <li><a href='/'>Existing Inventory</a></li>





 
      </BurgerNav>
    </Container>
  );
}

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0 

  
 
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  
  justify-content: center;


  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }


  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  cursor:pointer;

  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;

// const CustomMenuIcon = styled(MenuIcon)`
//   cursor: pointer;
// `
const BurgerNav = styled.div`
    position: fixed;
    top:0;
    bottom:0;
    right:0;
    background :white;
    width:300px;
    z-index: 16;
    list-style:none;
    padding:20px;
    display:flex;
    flex-direction:column;
    text-align:start;
   
    transform:${props=> props.show ? 'translateX(0)':  'translateX(100%)'};
    transition: transform 0.2s ease-in;
    li{
         padding:15px 0;
         border-bottom:1px solid rgba(0,0,0,0.2);
    
    a{
          font-weight:600;
    }
  }

 
`
// const CustomClose = styled(CloseIcon)`
//               cursor:pointer;
  
 
// `
const CloseWrapper = styled.div`
        display:flex;
        justify-content:flex-end;
        cursor:pointer;



`
const Buttons = styled.div`
`