import React, { useState } from 'react'
import Logo from './logo'
import '../styles/navbar.css'
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import Button from './common/button';

const NavBar = (props) => {
  const [openMenu, setOpenMenu] = useState(false);
  
  const handleOnClick = () => {
    setOpenMenu(!openMenu);
  }

  return (
    <>
      <div className='navbar' style={{color: `${props.scrolled ? 'black':'white'}`} }>
        <Logo className='logo' scrolled={props.scrolled}/>
        <IoMenu onClick={handleOnClick} />
        <Button text="14 DAY FREE TRAIL" textstyle={{width: '191px', height: "44px"}} />
      </div>
      {openMenu &&
        <div className='sidebar'>
          <div className='onclose'><IoClose  onClick={handleOnClick}/></div>  
          <hr/>        
          <div className='box'>
              <Button text="14 DAY FREE TRAIL" height="10" width="100" />
              <button className='login'>Login</button>
          </div>
        </div>}
    </>
  )
}

export default NavBar