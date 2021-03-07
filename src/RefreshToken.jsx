import React from 'react';
import { useEffect } from 'react';


const RefreshToken = () => {

    useEffect(() => {
        console.log("start");
        
        console.log("end");
        window.close();

    });

    return (
        <div>
            refreshed ^_^<br/>
        </div>
    );
}



export default RefreshToken;