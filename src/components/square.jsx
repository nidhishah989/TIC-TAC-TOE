import React from "react";

function square({value,handleSQClick}){


    return(
        <button className="btn shadow-lg square" onClick={handleSQClick}>{value}</button>
    )
    
}

export default square;