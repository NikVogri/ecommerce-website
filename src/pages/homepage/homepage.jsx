import React from 'react';
import HomePageContainer from './homepage.styles';
import Directory from '../../components/directory/directory';

const Homepage = () => {
  return (
    <HomePageContainer className='homepage'>
      <Directory />
    </HomePageContainer>
  );
}

export default Homepage;
