import React from 'react';
import './countryList.css'

import aus from '../assets/australia.jfif'
import us from '../assets/usa.png'
import uk from '../assets/uk.webp'
import canada from '../assets/canada.webp'

const CountryList = () => {

    const countryList=[
        {
            name:"Australia",
            cntryimg:aus
        },
        {
            name:"USA",
            cntryimg:us
        },{
            name:"UK",
            cntryimg:uk
        },
        {
            name:"Canada",
            cntryimg:canada
        }
    ]

    return (
        <div className='countryContainer d-flex justify-content-start pt-2 flex-column align-items-center gap-5'>
            <h3 className='text-light mb-2'>Gain Your Higher Education In The Best Countries</h3>
            <div className='countryList'>
                <div className=' d-flex justify-content-evenly pt-4'>
              {countryList.map(country=>{
                return (
                    <div className='country d-flex flex-column pt-4'>
                        <img height={"100"} src={country.cntryimg} alt="cn"/>
                        <b>{country.name}</b>
                    </div>
                )
              })}
            </div>
          <div className='d-flex justify-content-start'>
          <button className=' btn btn-danger m-5 btn-border-none'>More Countries</button>
          </div>
            </div>
        </div>
    );
}

export default CountryList;
