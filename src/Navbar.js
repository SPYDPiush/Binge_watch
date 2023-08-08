import React,{useState} from 'react'; 
import img from '../src/Images/logo.png';






 function Navbar(props) {
    const [inputvalue,setInputvalue]=useState("");
    const searches=(event)=>{
        const value=event.target.value;
        setInputvalue(value);
        props.searchvalue(value);
    }   
    return(
    <>
        <nav className="navbar " style={{background:"#EEE2DE"}}>
            <div className="container-fluid">
                <img src={img} alt='logo' style={{width:"6rem",}}/>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={searches}/>
                    <button className="btn btn-outline-primary" style={{color:"#080202", fontSize:"1.5rem"}} type="submit">Search</button>  
                </form>
            </div>
        </nav>
    </>
    )
}

export default Navbar;