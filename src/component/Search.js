import React from "react";
import back from './back.jpg';
import {useState} from "react";
import Space from "./Space";



function Search(){

    const [ link , setLink] = useState("");

    
    const onChange = (event) =>{
        setLink(event.target.value);

    }
     
    return(
        <div>
            <div className="tc f3">
              
                <p className="mt0">
                    This app will detect faces in the picture
                </p>
            </div>

            <div className="tc pa4 back">

                <input 
                    className="br2 w-60" 
                    type="text"

                    onChange={onChange}
                />

                <button className="br2 grow pointer w-20 button">Search</button>

            </div> 

        
            <Space
                link={link}
            /> 
        
        
        </div>
    );
}

export default Search;