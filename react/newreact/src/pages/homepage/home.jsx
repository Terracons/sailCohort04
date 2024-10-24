import App from "../../component/Apps/App";
import Button from "../../component/button/button";
import Compines from "../../component/compines/compines";
import Hero from "../../component/hero/Hero";
import "../../component/button/button.css"


const Home = ()=>{
    return(
        <div>
            <Button text="Sign up" class="button-card"/>
            <Button  text = "Log in" class = "button-card1"/>
            <Button  text = "Download on Andriod" class = "button-card2"/>
            <Hero/>
            <Compines/>
            <App/>
        </div>
    )

}
export default Home;