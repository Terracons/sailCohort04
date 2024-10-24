import Business from "./Pages/Business"
import Companies from "./Pages/Companies"
import Personal from "./Pages/Personal"
import Footer from "./statics/Footer"
import Header from "./statics/Header"
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const App = ()=>{
  return(
  <div>
    <BrowserRouter>
    

    <Header/>
    <Routes>
      <Route path ="/" element= { <Personal/>}/>
      <Route path = "/Companies" element = {<Companies/>} />
      <Route path = '/Business' element  = {<Business/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>

  </div>

  )
}
export default App

