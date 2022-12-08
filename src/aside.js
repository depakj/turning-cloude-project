import React from 'react';
import './aside.css';
import Ad from "./imges/sideImge1.png";
import Ad2 from "./imges/sideImge2.png";


function Aside()
{
    return(
        <>
          <div className='aside-cont'>
              <div className='aside'>
               <img src={Ad} alt='ads'/>
               <div className='List'>
                   <ul className='List2'>
                       <h6> Newest In Most Viral </h6>
                       <hr></hr>
                      <li><img src="" alt='img1' song1/> YUP</li>
                      <li><img src="" alt='img1' song1/>Merry Christmas from dutch</li>
                      <li><img src="" alt='img1' song1/>Same.</li>
                   </ul>
               </div>
               <img src={Ad2} alt='ads'/>
              </div>
          </div>

          
        </>
    );
}

export default Aside;