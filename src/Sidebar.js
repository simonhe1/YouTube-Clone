import React from 'react';
import "./Sidebar.css";
import SidebarElement from './SidebarElement';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Sidebar = props => {
    return (
        <div className="sidebar">
            <SidebarElement selected title="Home" Icon={HomeIcon}/>
            <SidebarElement title="Trending" Icon={WhatshotIcon}/>
            <SidebarElement title="Subscription" Icon={SubscriptionsIcon}/>
            <hr />
            <SidebarElement title="Library" Icon={VideoLibraryIcon}/>
            <SidebarElement title="History" Icon={HistoryIcon}/>
            <SidebarElement title="Your videos" Icon={OndemandVideoIcon}/>
            <SidebarElement title="Watch Later" Icon={WatchLaterIcon}/>
            <SidebarElement title="Liked videos" Icon={ThumbUpIcon}/>
            <SidebarElement title="Show more" Icon={ExpandMoreIcon}/>
            <hr />
        </div>
    );
}
export default Sidebar;