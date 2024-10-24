import styled from "styled-components"
import { FaApple } from "react-icons/fa";
import heroimg from '../../src/assets/heroimg.png'
const Hero = ()=>{
    return(
        <Cointainer>
            <Wrapper>
                <Textbox>
                    <h1>The money app for Africans.</h1>
                    <p>Make free transfers, enjoy cashless payment options and earn interest on your savings with Kuda.</p>
                    <Button>
                        <button> <span><FaApple /> <p>Download on  </p> </span>Apple store</button>
                        <button></button>
                    </Button>

                </Textbox>
                <Imagebox>
                    <img src={heroimg} alt="" />

                </Imagebox>
            </Wrapper>
        </Cointainer>

    )
  }
  export default Hero


  const Cointainer = styled.div`
  max-width: 1280px;
  
  
 
  margin-left:auto;
  margin-right:auto;
  justify-content:center;
  align-items:center;
  
  `


  const Wrapper = styled.div`
  display:flex;
  
  margin-left:50px;
  margin-right:50px;
  justify-content:center;
  align-items: center;
  height:100vh;
  
  `


const Textbox = styled.div`
 width:500px;
 

  h1{
    font-size:36px;
    color:#40196D;
  };
  p{
    font-family:"Montserrat";
    font-weight:600;
    
  }


  `


  const Imagebox = styled.div`
  width:500px;

  img{
    max-width:100%
    
  }
  
  `

    
  const Button = styled.div``