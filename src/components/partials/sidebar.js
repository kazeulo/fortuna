import React from 'react';

import '../../css/partials/sidebar.css';

const Sidebar = () => { 
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-auto col-sm-2 bg-dark d-flex flex-column justify-content-between min-v100'>
                    <p className='text-white'>This is the side bar</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;