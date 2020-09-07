import React from 'react';
import './ChannelRow.css';
import Avatar from '@material-ui/core/Avatar';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const ChannelRow = ({image,channel,verified,subs,numOfVideos,description}) => {
    return (
        <div className="channel_row">
            <Avatar 
                className="channel_row_logo"
                alt={channel}
                src={image}
            />
            <div className="channel_row_text">
                <h4>{channel} {verified && <CheckCircleIcon />}</h4>
                <p>{subs} subscribers • {numOfVideos} videos</p>
                <p>{description}</p>
            </div>
        </div>
    );
}
export default ChannelRow;