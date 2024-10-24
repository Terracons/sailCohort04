import './Header.css'

const Header = ()=>{
    return(
        <div className='container'>
            <div className="logo">
                <h2>coolors</h2>
            </div>
            <div className="nav">
                <nav>Tools</nav>
                <nav>Go Pro</nav>
                <nav>Sign in</nav>
                <button>Sign Up</button>
            </div>
            
        </div>
    )


}
export default Header;