import React from 'react';
import './SidebarElement.css';
const SidebarElement = ({selected, Icon,title}) => {
    return (
        <div className={`sidebar_element ${selected && "selected"}`}>
            <Icon className="sidebar_element_icon"/>
            <h2 className="sidebar_element_title">{title}</h2>
        </div>
    );
}
export default SidebarElement;