import React from 'react'
import MenuItem from '../menu-item/menu-item';
import { selectDirectorySection } from '../../redux/directory/directory.selector';
import { createStructuredSelector } from 'reselect';
import './directory.styles.scss';

import { connect } from 'react-redux'

const Directory = ({ sections }) => {
  return (
    <div className='directory-menu'>
      {
        sections.map(({ imageUrl, id, ...otherSectionProps }) => <MenuItem key={id} image={imageUrl} {...otherSectionProps} />)
      }
    </div>
  )
};
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection
});

export default connect(mapStateToProps)(Directory);