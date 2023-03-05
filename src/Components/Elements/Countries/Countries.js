import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Allcountry from '../Allcountry/Allcountry';

const Countries = () => {
    const countries = useLoaderData()
    return (
        <div className=' sm:grid sm:grid-cols-2  gap-10 lg:grid lg:grid-cols-3  '>
            {
                countries.map(allcountry => <Allcountry
                allcountry={allcountry}
                ></Allcountry>)
            }
            
        </div>
    );
};

export default Countries;