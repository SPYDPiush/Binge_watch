import React,{useState} from 'react'; 
 function Navbar(props) {
    const [inputvalue,setInputvalue]=useState("");
    const searches=(event)=>{
        const value=event.target.value;
        setInputvalue(value);
        props.searchvalue(value);
    }   
    return(
    <>
        <nav className="navbar ">
            <div className="container-fluid">
                <a className="navbar-brand">Binge Watch..</a>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={searches}/>
                    <button className="btn btn-outline-success" type="submit">Search</button>  
                </form>
            </div>
        </nav>
    </>
    )
}

export default Navbar;