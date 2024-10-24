const App = (props)=>{
    return(
        <div>
           <div className= {`appcard ${props.color}`}>
            <img src={props.image} alt="" />
            <h2>{props.heading}</h2>
            <p>{props.paragraph}</p>
           </div>
        </div>
    )

}
export default App;