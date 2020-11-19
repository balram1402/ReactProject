import React from 'react';
import Navs from './Navs';

const prof = <img src = {process.env.PUBLIC_URL + 'pro.jpg'} width = "1366" height = "600"/>

function Prof(){
    return(
        <>

            <div className = "b">
                <Navs/>
                <div className="h3s">
                    Name - Mr.Balram Shrihari Potabatti<br/>
                    Completed - BBA<br/>
                    City - Solapur<br/>
                    Hobbies - Coding(As you judge)<br/>
                </div> {prof}</div>
            </>
    )
}
export default Prof;