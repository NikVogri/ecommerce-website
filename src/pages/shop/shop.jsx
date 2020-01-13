import React from 'react'
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import Collection from '../collection/collection.container';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux'
import { fetchCollectionsAsync } from '../../redux/shop/shop.actions';

class Shop extends React.Component {
  componentDidMount() {
    const { fetchCollectionsAsync } = this.props;
    fetchCollectionsAsync();
  }

  render() {
    const { match } = this.props;
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
        <Route path={`${match.path}/:categoryId`} component={Collection} />
      </div>
    )
  }

};

const mapDispatchToProps = dispatch => ({
  fetchCollectionsAsync: () => dispatch(fetchCollectionsAsync())
})
export default connect(null, mapDispatchToProps)(Shop);
