import React from 'react';
 
import { Route } from 'react-router-dom';

import CollectionOverview from '../../component/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
 
const ShopPage = ({match}) => (
       
            <div className='shop-page'>
               <Route exact path={`${match.path}`} component={CollectionOverview} />
               <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
            </div>
    )


export default ShopPage;