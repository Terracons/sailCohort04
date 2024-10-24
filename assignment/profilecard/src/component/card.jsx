
import './Card.css'
function Card(props) {
  return (
    <div className='container'>
    <img src={props.image} alt="" />
    <div className="text">
    <h2>{props.name}</h2>
    <h3>Age : {props.age}</h3>   
    <h3>Location : {props.location}</h3>  
    </div>
 
    </div>
  )
}
export default  Card;
