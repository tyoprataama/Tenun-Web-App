import React from 'react';
import { Feature } from '../../components';
import './whatTenun.css';

function whatTenun() {
  return (
    <div className='tenun_whattenun section_margin' id='whttn'>
      <div className='tenun_whattenun-feature'>
        < Feature title = 'What is Tenun. ?'
        text = 'Tenun is website provider information  all you need to know about Batik from Kediri made by local hand or UKM  distribute to your address through this website with one Click and you can purchased some apparel with ethereum .' / >
      </div>
      <div className='tenun_whattenun-heading'>
        <h1 className='gradient_text'>Sneak peak from our web is beyond your imagination.</h1>
        <p>Explore The Library</p>
      </div>
      <div className='tenun_whattenun-container'>
        <Feature title='Apparel' text='Best services to provide highly class product. Made with  heart and best designer.' />
        <Feature title='Local Brand' text='Made from local people in our beloved city Kediri, design from scratch and  recommended for you who looking Batik for your daily-basis'/>
        <Feature  title='Culture' text='Batik  is a technique of wax-resist dyeing applied to the whole cloth. This technique originated from the island of Java, Indonesia.'/>
      </div>
    </div>
  )
}

export default whatTenun