import React, { Profiler } from 'react';
import HomePageContainer from './homepage.styles';
import Directory from '../../components/directory/directory';

const Homepage = () => {
  return (
    <HomePageContainer className='homepage'>
      <Profiler id='directory' onRender={(id, phase, actualDuration) => {
        console.log({
          id,
          phase,
          actualDuration
        })
      }}>
        <Directory />
      </Profiler>
    </HomePageContainer>
  );
}

export default Homepage;
