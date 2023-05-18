import React from "react";

function square({value,handleSQClick}){
    
  
    return(
        <button className='btn shadow-lg square'  onClick={handleSQClick}><h4 className={`buttonmark my-auto mx-auto ${value==='X'? ' xmark': ' omark'} `}>{value}</h4></button>
    )
    
}

export default square;