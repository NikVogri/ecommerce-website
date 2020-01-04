import React from 'react';
import './custom-button.styles.scss';

const customButton = ({ children, isGoogleSignin, inverted, ...otherProps }) => {
  return (
    <button className={`${isGoogleSignin ? 'google-sign-in' : ''} ${inverted ? 'inverted' : ''} custom-button`} {...otherProps}>
      {children}
    </button>
  );
}

export default customButton;
