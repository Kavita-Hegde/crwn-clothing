import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import MenuItem from '../menu-item/menu-item.component';
import './directory.style.scss';

import { selectDirectorySections } from '../../redux/directory/directory.selector';

const Directory = ({sections}) => (
              
    <div className='directory-menu'> 
        {
         sections.map(({title, imageUrl,id,size, linkUrl}) =>
            <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl}></MenuItem>)
        }
    </div>            
)

const mapStateToProps = createStructuredSelector({
    sections : selectDirectorySections

})

export default connect(mapStateToProps)(Directory);
