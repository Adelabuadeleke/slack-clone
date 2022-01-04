import React, { useState } from 'react'
import './Header'
import './Header.css'
import {Avatar} from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime"
import SearchIcon from "@material-ui/icons/Search"
import { HelpOutline } from '@material-ui/icons';
import {useStateValue} from './StateProvider';


function Header() {
  const [{user}] =  useStateValue();
  return (
    <div className="header">
      <div className="header__left">
        {/* Avatars for logged in user */}
        <Avatar className='header__avatar'
        alt={user?.displayName}
        src={user?.photoURL}
        />
        <AccessTimeIcon />
        {/* Time Icon */}
        
      </div>
      <div className="header__search">
        <SearchIcon />
        <input placeholder='Search Agba Coder!🚀' />
      </div>
      <div className="header__right">
        <HelpOutline />
        {/* help icon */}
      </div>
    </div>
  )
}

export default Header;
