import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'

const Header = () => {
    return (
        <div>

          <div className='nav'>
          <div>
            <h1 className='text-2xl text-white'>Country Information</h1>
          </div>



<div className=' header font-bold p-4 flex justify-between px-2  lg:text-white lg:flex-row'>
                <Link  className={({isActive}) => isActive ? 'active': undefined} to ='/'>Home</Link>
            <Link to ='/Countries'>Countries</Link>
            <Link to ='/Cities'>Cities</Link>
            <Link to ='/Languages'>Languages</Link>
            <Link to ='/Maps'>Maps</Link>
            

                </div>
 
          </div>
          
            
            
            
        </div>
    );
};

export default Header;