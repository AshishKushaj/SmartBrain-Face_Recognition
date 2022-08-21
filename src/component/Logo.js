import React from "react";
import Tilt from 'react-tilt';
import brain from './brain.png';

function Logo(){

    return(
        <div>
            <Tilt className="Tilt ma4 logo dib mt0" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner br2 pa3 shadow-5"> <img alt='logo' src={brain}/> </div>
            </Tilt>
        </div>
    );
    
};

export default Logo;