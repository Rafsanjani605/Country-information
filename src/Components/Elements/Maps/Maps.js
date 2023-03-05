import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Mapp from '../Mapp/Mapp';
import imgg from './map.jpg'


const Maps = () => {
    const mp = useLoaderData()

    console.log(mp)
    return (
        <div>
            <div>
                <img className='h-106 w-full' src={imgg} alt="" />
        
            </div>

            <div className='pt-32 pb-40 h-106'>
            <div style={{width: '100%'}}><iframe width="100%" height={600} frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=dhaka+(My%20Business%20Name)&t=&z=14&ie=UTF8&iwloc=B&output=embed">&lt;a href="https://www.maps.ie/distance-area-calculator.html"&gt;measure area map&lt;/a&gt;</iframe></div>
            
            </div>
            {/* 
            practice  start */}
                   
                   <div className='pb-5'>
            <h1>Click the cointry name .then you can see Country map</h1>
          </div>



            {/* tsting end */}



            <div>
                {
                    mp.map(map => <Mapp
                    map = {map}
                    ></Mapp>)
                }

            </div>
            
        </div>
    );
};

export default Maps;