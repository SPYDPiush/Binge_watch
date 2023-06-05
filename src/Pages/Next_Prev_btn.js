import React,{useState} from "react";

export default function Next_prev_btn(props){
    const [curpage,setCurpage]=useState(props.Page);
    const Previous = ()=>{
        const newpage=curpage-1;
        setCurpage(newpage);
        props.onpagechange(newpage)

      }
    
      const Next =()=>{
        const newpage=curpage+1;
        setCurpage(newpage);
        props.onpagechange(newpage);
      }
    return(
        <div className='container'>
            <div className="row d-flex justify-content-between m-4">
                {
                    curpage>1 ?(
                    <div className="col-3 col-md-1">
                        <button type="button" className="btn btn-outline-success btn-lg" onClick={Previous}>Previous</button>
                    </div>

                ):(
                    <div></div>
                )
                }
                <div className="col-3 col-md-1">
                <button type="button" className="btn btn-outline-success btn-lg" onClick={Next}>Next</button>
                </div>
            </div>
        </div>
    )


}