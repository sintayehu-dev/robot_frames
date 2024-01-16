import React from "react";
const Scroll = (props) => { 
    return (
        <div  style={{overflowY: 'scroll', overflowX: 'hidden', border: '1px solid black', height: '480px'}}>
            {props.children}
        </div>
    );
}
export default Scroll;