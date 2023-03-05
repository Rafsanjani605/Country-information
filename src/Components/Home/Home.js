import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Country from './Country/Country';
import img from '../images/mp.png'

const Home = () => {
   const countries = useLoaderData()
   console.log(countries)
    return (
        <div className='mt-4'>
            <div className='text-start px-7'>
                <h1 className='bold text-xl'>
                How many countries are there in the world?
                </h1>
                <p>
                Since South Sudan became an independent state on 9 July 2011, there are now 195 independent sovereign nations in the world (not including the disputed but de facto independent Taiwan), plus some 60 dependent areas, and several disputed territories, like Kosovo.

                </p>
                <p>
                193 sovereign states are members of the United Nations and are equally represented in the UN General Assembly.

                </p>
                <p>
                Two non-member countries have permanent observer states: the Holy See and the State of Palestine.

                </p>
                <p>
                Below is a list of countries and areas of the world in alphabetical order, with official names and alternative designations. The list contains English and French country names as well as the local names of the countries.

                </p>
                <p>
                Links will lead you to the respective One World - Nations Online country information and internet resources page.

                </p>
                <p>
                Each country profile provides links to official web sites of a nation/territory, information on geography, maps, the national flag, history, culture, tourist destinations, its population and languages, the capital and the largest cities, education, economy, newspapers, and much more.

                </p>
            </div>

            <div className='h-fit pb-10 grid justify-center'>
                <img src={img} alt="" />
                
            </div>
            <div>
    {/* ////////////// */}

    <table className="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr className='grid grid-cols-4 sm:px-6 lg:px-14 xl:px-20'>
        <th>flags</th>
        <th>Official name</th>
        <th>Capital</th>
        <th>Region</th>
      </tr>
    </thead>
    
  </table>
    

    {/*  */}


                {
                   countries.map(country => <Country
                   country = {country}
                
                   ></Country> )
                }
            </div>
            
        </div>
    );
};

export default Home;