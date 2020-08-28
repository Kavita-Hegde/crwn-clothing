import React from 'react';

import './collection-preview.style.scss';

import CollectionItem from '../collection-item/collection-item.componenet';


const CollectionPreview = ({title,items}) =>(
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items.filter((item,index) => index < 4).map(item =>
                (<CollectionItem key={item.id} item={item}></CollectionItem>))
            }

        </div>
    </div>
)


export default CollectionPreview;