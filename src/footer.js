import React from "react";
import './Footer.css';
import dots from './imges/more.png';

function Footer()
{
    return(
        <>
         <div className="footer_wrapper">
             <div className="footer">
                 <ul className="footer-navbar">
                    <li>© 2022 Imgur, Inc</li>
                    <li><a href="">about</a></li>
                    <li><a href="">Terms</a></li>
                    <li><a href="">privacy</a></li>
                    <li><a href="">Rules</a></li>
                    <li><a href="">Help</a></li>
                 </ul>
                 <div className="Dropdown-center">
                     <div className="Dropdown-title">
                       <span></span>
                       <img src={dots} alt="icone"/>
                     </div>
                 </div>
                 <div></div>
                 <div className="Footer-app">
                     <a href="" >Get the App</a>
                 </div>
             </div>
         </div>
        </>
    );
}

export default Footer;