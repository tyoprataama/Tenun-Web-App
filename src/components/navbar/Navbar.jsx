import React, {useState} from 'react';
import './navbar.css';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';

const Menu = () => (
  <>
  <p><a href='#home'>Home</a></p>
  <p><a href='#home'>What is Tenun</a></p>
  <p><a href='#home'>About</a></p>
  <p><a href='#home'>Collections</a></p>
  <p><a href='#home'>Library</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false); 
  return (
    <div className='tenun_navbar'>
        <div className='tenun_navbar-links'>
            <div className='tenun_navbar-links_logo'>
                <h3>Tenun.</h3>
            </div>
            <div className='tenun_navbar-links_container'>
             <Menu />
            </div>
        </div>
        <div className='tenun_navbar-sign'>
          <p> Sign in </p>
          <button type='button'>Sign Up</button>
        </div>
        <div className='tenun_navbar-menu'>
        {toggleMenu ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)}/> 
        : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)}/>  }
        {toggleMenu && (
          <div className='tenun_navbar-menu_container scale-up-center'>
            <div className='tenun_navbar-menu_container-links'>
              <Menu />
               <div className='tenun_navbar-menu_container-links_sign'>
            <p> Sign in </p>
          <button type='button'>Sign Up</button>
        </div>
            </div>
          </div>
        )}
        </div>
    </div>
  )
}

export default Navbar