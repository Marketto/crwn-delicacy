import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils'
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';
 
import {
    HeaderContainer,
    LogoContainer,
    LogoImage,
    OptionsContainer,
    OptionContainer,
    CartIconStyled,
    OptionLink,
    Title
} from './header.style';

const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <LogoImage></LogoImage>
        </LogoContainer>
        <Title>Palate Wonders</Title>
        <OptionsContainer>
            <OptionLink to='/shop'>
                Shop
            </OptionLink>
            <OptionLink to='/shop'>
                Contact
            </OptionLink>
            {
                currentUser ?
                <OptionContainer onClick={() => auth.signOut()}>Sign Out</OptionContainer>
                :
                <OptionLink to='/sign-in'>Sign In</OptionLink>
            }
            <CartIconStyled />
        </OptionsContainer>
        {
            hidden || <CartDropdown />
        }
        
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);