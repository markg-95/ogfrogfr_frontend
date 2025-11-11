
import React, { useEffect } from 'react';
function TestComp(props) {

    useEffect(() => {
        console.log("TestComp mounted");
    }, []); 

    function getText(){
        return "Hello world from function!";
    }

    return (
        <div>
            {getText()}
        </div>
    )
}

export default TestComp;