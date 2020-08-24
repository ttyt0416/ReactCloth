import React from 'react';

import { Route } from 'react-router-dom';
import CollectionOverview from '../../components/collections-overview/collections-overview.components';
import CollectionPage from '../collection/collection.components';

const ShopPage = ({ match }) => (
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route path={`${match.path}/:categoryId`} component={ CollectionPage } />
    </div>

)



export default ShopPage;