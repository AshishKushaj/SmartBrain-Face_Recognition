import React from "react";
import {useState} from "react";

function Space({link}){


    return(
        <div className="tc mt2">
            <img
                className="image"
                alt=""
                src={link}
            />
        </div>
    );
    
}


export default Space;