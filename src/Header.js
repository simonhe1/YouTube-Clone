import React, { useState } from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

const Header = props => {
    const [searchInput,setSearchInput] = useState('');

    return (
        <div className="header">
            <div className="header_left">
                <MenuIcon />
                <Link to="/">
                    <img 
                        className="header_logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
                        alt="" 
                    />                
                </Link>
            </div>
            <div className="header_input">
                <input type="text" placeholder="Search" onChange={e => setSearchInput(e.target.value)} />
                <Link to={`/search/${searchInput}`} className="header_input_search">
                    <SearchIcon className="header_input_search_icon"/>                
                </Link>
            </div>
            <div className="header_icons">
                <VideoCallIcon className="header_icon" />
                <AppsIcon className="header_icon" />
                <NotificationsIcon className="header_icon" />
                <Avatar 
                    alt="Simon He"
                    src="https://media-exp1.licdn.com/dms/image/C4D03AQFCU_OIgxG5kg/profile-displayphoto-shrink_100_100/0?e=1605139200&v=beta&t=evKG_8PoeksRlFro_KK5R6auTUmqQ1ouzyVeDC0-7E4"
                />
            </div>
        </div>
    );
}
export default Header;