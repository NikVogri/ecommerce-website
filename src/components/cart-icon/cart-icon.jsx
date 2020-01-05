import React from 'react';

import { selectCartItemsCount } from '../../redux/cart/cart.selectors.js';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-icon.styles.scss';

const cartIcon = ({ itemCount, toggleCartHidden }) => {
  return (
    <div className='cart-icon'>
      <ShoppingIcon className='shopping-icon' onClick={toggleCartHidden} />
      <span className="item-count">{itemCount}</span>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});
const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(cartIcon);
