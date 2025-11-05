// import React, { useState } from 'react';
import '../../css/partials/sidebar.css';
import '../../App.css';
import '../../css/variables.css';

import {SidebarData} from './sidebarData';

const Sidebar = () => { 

  return (
    <div className="sidebar">

        <div className="userProfile">
            <div className='profilePicture'>

            </div>
            <h3 className='userName'>User name</h3>
        </div>

        <ul className='sidebar-list'> {
            SidebarData.map((val, key) =>{
                return (
                    <li key={key} className='item' onClick = {() => {window.location.pathname = val.link}}> 
                        <div id="icon">{val.icon}</div>
                        <div id="title">{val.title}</div>
                    </li>
                );
            })
            
        } </ul>
    </div>
  )
}

export default Sidebar;