import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import head from '../../assets/head1.png';

function Header() {
  return (
    <div className='tenun_header section_padding' id='home'>
      <div className='tenun_header-content'>
        <h1 className='gradient_text'>Let’s Explore  More Batik Kediri, with Tenun.</h1>
        <p>Tenun is the best platform provider the information about Batik made from 100% local  of Kediri City. Not just for that in this website you will be able making transactions with Ethereum  which is one of most popular cryptocurrency in the world with BlockChain system will allow you making more safe security.</p>
        <div className='tenun_header-content_input'>
          <input type='email' placeholder='Your Email Address'></input>
          <button type='button'>Get Started</button>
        </div>
        <div className='tenun_header-content_people'>
            <img src={people} alt='people'/>
            <p> 1,623 people visit our website in last 24 hours </p>
        </div>
        </div>
        <div className='tenun_header-image'>
          <img src={head} alt='head'/>
      </div>
    </div>
  )
}

export default Header