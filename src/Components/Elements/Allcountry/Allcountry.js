import React from 'react';
import './allcountries.css'

const Allcountry = ({allcountry}) => {
      console.log(allcountry)
    const {flags,name,capital,continents,region,population,timezones, startOfWeek, subregion, status, maps, translations, coatOfArms} = allcountry;
    // console.log(capital)
    

    
    return (
        <div>
            <div className='allcountries'>
            <div className="card w-96 bg-base-100 shadow-2xl">
  <figure><img className='img-fluid ' src={flags.png} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-xl">{name.common}</h2>
    <p>capital:{capital}</p>
    <p>continents:{continents}</p>
  <p>region:{region}</p>
  <p>population:{population}</p>
  <p>oo:{name.official}</p>
    <p></p>
    
{/* modal details start */}
    <div className="card-actions ">
      {/* <button className="btn btn-primary w-full">details</button> */}
      <label className="btn btn-primary w-full" htmlFor="my-modal" className="btn w-full">Details</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box text-center">
    <h1 className='font-bold text-2xl pb-3'>{name.common}</h1>
    <img className='justify-center text-center w-80 ml-16' src={flags.png} alt="" />
    <h3 className="font-bold text-lg">official name: {name.official}</h3>
    <p><span className='font-bold'>Arabic name</span>{translations.ara.official}</p>

    <div className='grid grid-cols-2 justify-center align-middle items-center	py-5'>
      <div>
        <h3>
        Coat of Arms:
        </h3>
      </div>
      <div>
      <img className='w-28 center text-center items-center	'  src={coatOfArms.png} alt="" />
      </div>
    </div>
    <h4>Status: {status}</h4>
    <p>region: {region}</p>
    <p>Subregion: {subregion}</p>
    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <p>Timezone: {timezones}</p>
    <p>Start of weak: {startOfWeek}</p>

    <iframe>{maps.googleMaps}</iframe>

    <div className="modal-action">
      <label htmlFor="my-modal" className="btn">close</label>
    </div>
  </div>
</div>

    </div>
  </div>
</div>
            </div>
            
        </div>
    );
};

export default Allcountry;