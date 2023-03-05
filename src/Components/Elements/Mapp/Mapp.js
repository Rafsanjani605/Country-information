import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Mapp = ({map}) => {
    const {maps , name} = map;
    
    return (
        <div>

         
            <div>
                {/* <Link to= {maps.openStreetMaps}>{name.common} : {maps.openStreetMaps} </Link> */}
<a href= {maps.openStreetMaps}>{name.common}</a>
            </div>
            
        </div>
    );
};

export default Mapp;