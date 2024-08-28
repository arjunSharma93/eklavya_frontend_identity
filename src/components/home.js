import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';



export default function Home(){

     return(
        <div className="text-center">
           <div className="buttons text-center">
                <Link to="/login">
                    <button className="primary-button" id="lgn_btn"><span> Log in</span></button>
                </Link>
                <Link to="/register">
                    <button className="primary-button" id="reg_btn"><span> Register </span></button>
                </Link>
            </div>
        </div>
     )
}