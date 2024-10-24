
import Card from '../component/card'
import './Productpage.css'
import image1 from "../../src/assets/image1.jpg"
import image2 from "../../src/assets/image2.jpg"
import image3 from "../../src/assets/image3.jpg"
import image4 from "../../src/assets/image4.jpg"
import image5 from "../../src/assets/image5.jpg"

function Productpage() {
 

  return (
    <div className='cardcontainer'>
    <Card image = {image1} name = "Muiz Ajalekoko"  age ="60"  location= "Ikorodu"/>
    <Card image = {image2} name = "Muiz Ajalekoko"  age ="60"  location= "Ikorodu"/>
    <Card image = {image3} name = "Muiz Ajalekoko"  age ="60"  location= "Ikorodu"/>
    <Card image = {image4} name = "Muiz Ajalekoko"  age ="60"  location= "Ikorodu"/>
    <Card image = {image5} name = "Muiz Ajalekoko"  age ="60"  location= "Ikorodu"/>
    </div>
  
  )
}

export default  Productpage
