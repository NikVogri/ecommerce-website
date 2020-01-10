import React from 'react';
import './custom-button.styles.scss';
import { CustomButtonContainer } from './custom-button.style';

const customButton = ({ children, ...props }) => {
  return (
    <CustomButtonContainer {...props}>
      {children}
    </CustomButtonContainer>
  );
}

export default customButton;
