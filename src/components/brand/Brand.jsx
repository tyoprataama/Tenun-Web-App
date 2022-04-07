import React from 'react';
import './brand.css';
import {google, shopee, tokped, kdr} from './import.js';

const Brand = () => {
  return (
    <div className='tenun_brand section_padding'>
      <div>
        <img src={google} alt='google'/>
      </div>
      <div>
        <img className='kdr' src={kdr} alt='kdr'/>
      </div>
      <div>
        <img className='shopee' src={shopee} alt='shopee'/>
      </div>
      <div>
        <img className='tokped' src={tokped} alt='tokped'/>
      </div>
    </div>
  )
}

export default Brand