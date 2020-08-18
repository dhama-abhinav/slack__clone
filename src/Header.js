import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HelpIcon from '@material-ui/icons/Help';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { Avatar } from '@material-ui/core'
import { useStateValue } from './StateProvider';

export const Header = () => {
    const [{user}]=useStateValue()
    return (
        <div className='header'>
            <div className='header__left'>
                <Avatar
                    className='header__avatar'
                    alt={user?.displayName}
                    src={user?.photoURL}
                ></Avatar>
                <AccessTimeIcon />
            </div>
            <div className='header__search'>
                <SearchIcon  />
                <input placeholder='search here...' />
            </div>
            <div className='header__right'>
                <HelpIcon />
            </div>
        </div>
    )
}
