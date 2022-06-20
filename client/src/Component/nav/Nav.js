import React from "react";
import './Nav.css';

function Nav(){

    return(
        <div className="navbar">
            <h1 id="logo">SHEMACH</h1>
            <div className="btns">
                <button className='uploadbtn'>logout</button>  
            </div>
        </div>
    );
}
export default Nav;