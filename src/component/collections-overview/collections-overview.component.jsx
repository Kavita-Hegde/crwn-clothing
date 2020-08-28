import React from 'react';

import './collections-overview.style.scss';

import {selectCollectionForPreview} from '../../redux/shop/shop.selector';

import  CollectionPreview  from '../collection-preview/collection-preview.component';

import { connect } from 'react-redux';
import { createStructuredSelector }  from 'reselect';

const CollectionOverview = ({collections}) => (
    <div className='collection-overview'>
        {
            collections.map(({id, ...otherCollectionProps} )=>(
                <CollectionPreview key={id} {...otherCollectionProps}></CollectionPreview>
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections : selectCollectionForPreview
})

export default connect(mapStateToProps)(CollectionOverview);