import React from 'react';

import './homepage.style.scss';
import '../../component/directory/directory.component';
import Directory from '../../component/directory/directory.component';

const HomePage = () => (
    <div className="homepage">
       <Directory></Directory>
    </div>
)

export default HomePage;