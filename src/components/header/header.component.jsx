import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';
 
import './header.styles.scss';

export default () => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo'></Logo>
        </Link>
        <h1 className="title">Palate Wonders</h1>
        <div className='options'>
            <Link className='option' to='/shop'>
                Shop
            </Link>
            <Link className='option' to='/shop'>
                Contact
            </Link>
        </div>
    </div>
);