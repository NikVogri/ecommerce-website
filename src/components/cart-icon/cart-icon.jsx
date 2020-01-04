import React from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-icon.styles.scss';

const cartIcon = (props) => {
  return (
    <div className='cart-icon'>
      <ShoppingIcon className='shopping-icon' onClick={props.toggleCartHidden} />
      <span className="item-count">0</span>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(null, mapDispatchToProps)(cartIcon);
