import React from 'react';

const Country = ({country}) => {
    return (
        <div>
            {/* table start */}

            <div className="overflow-x-auto">
  <table className="table w-full">
    {/* <!-- head --> */}
   
    <tbody>
      {/* <!-- row 1 --> */}
      <tr className=' grid grid-cols-4 sm:px-6 lg:px-14 xl:px-20'>
        <td><img className='w-10' src={country.flags.png} alt="" /></td>
        <td className='text-start'>{country.name.official}</td>
        <td>{country.capital}</td>
        <td>{country.region}</td>
      </tr>
      
     
    </tbody>
  </table>
</div>
{/* table end */}
            
        </div>
    );
};

export default Country;