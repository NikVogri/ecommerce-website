import React from 'react';
import './header.styles.scss';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { connect } from 'react-redux';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink } from './header.styles';

import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';



const header = ({ currentUser, hidden }) => {
  return (
    <HeaderContainer className='header'>
      <LogoContainer to='/' className='logo-container'>
        <Logo className='logo' />
      </LogoContainer>
      <OptionsContainer className="options">
        <OptionLink to='/shop' className='option'>SHOP</OptionLink>
        <OptionLink to='/shop' className='option'>CONTACT</OptionLink>
        {
          currentUser ? <OptionDiv className='option' onClick={() => auth.signOut()}>SIGN OUT</OptionDiv> : <OptionLink className='option' to='/signin'>SIGN IN</OptionLink>
        }
        <CartIcon />
      </OptionsContainer>
      {
        hidden ? null : <CartDropdown />
      }
    </HeaderContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden

});

export default connect(mapStateToProps)(header);
