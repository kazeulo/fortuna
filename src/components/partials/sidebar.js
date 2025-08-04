// import React, { useState } from 'react';

// styling
import '../../css/partials/sidebar.css';
import '../../App.css'

import {SidebarData} from './sidebarData';

const Sidebar = () => { 

  return (
    <div className="sidebar">
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