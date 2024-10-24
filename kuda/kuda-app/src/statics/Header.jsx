import { IoMdArrowDropdown } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import "./Header.css"
import styled from "styled-components";
import {Link} from 'react-router-dom'
const Header = ()=>{
    return(
        <Container>
            <LogoNav>
                <Logo>
                    <img src="./kuda.png" alt="" />
                </Logo>
                <Navigation>
                    <nav>
                        <Link to="/"> <span>Personal<IoMdArrowDropdown /> </span></Link>
                        
                        <Link to="/Business"> <span>Business<IoMdArrowDropdown /> </span> </Link>
                        
                        <Link to="/Companies"> <span>Company<IoMdArrowDropdown /> </span> </Link>
                        
                        <span>Help<IoMdArrowDropdown /> </span>
                    </nav>
                </Navigation>

            </LogoNav>
            <Buttons>
                <SignBTN>Sign In</SignBTN>
                <SignuP>Sign Up</SignuP>
                <ConBtn>
                    <img src="./naija.png" alt="" />
                </ConBtn>

            </Buttons>
            
        </Container>

    )
  }
  export default Header

const Container=styled.div`
max-width:1580px;
margin-left:auto;
margin-right:auto;
height:70px;
display:flex;
justify-content:space-between;
align-items:center;

box-shadow: rgba(44, 17, 17, 0.08) 0px 2px 4px 0px;
img{
    width:30px
};
`
const LogoNav=styled.div`
display:flex;
align-items:center;
justify-content: space-between;
`


const Logo=styled.div`
margin-left:70px;`


const Navigation=styled.div`
margin-left:80px;
display:flex;
flex-direction:column;
font-weight:800px;
justify-content: space-between;
width:400px;



span{
    margin-left:30px;
    font-weight:600;
    font-size:12px;
    color:#40196D;
    
    
}

@media (max-width: 800px) {
    display:none;
    
}

`


const Buttons=styled.div`
display:flex; 
justify-content: center;
align-items:center;
gap:20px;
`


const SignBTN=styled.button`
width:138px;
height:38px;
border-radius:15px;
border:none;
background-color:transparent;
color:#40196D;
font-weight:700px;
@media (max-width: 800px) {
    display:none;
    
}
`
const SignuP=styled.button`
width:138px;
height:38px;
border-radius:15px;
border:none;
background-color:#40196D;
color:#ffff;
font-weight:700px;
@media (max-width: 800px) {
    display:none;
    
}`
const ConBtn=styled.div`
img{
    width:40px;
    margin-right:20px;
}

`