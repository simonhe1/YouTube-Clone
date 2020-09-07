import React from 'react';
import './VideoRow.css';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const VideoRow = ({views, description, timestamp, channel, title, image, verified}) => {
    return (
        <div className="video_row">
            <img src={image} alt="" />
            <div className="video_row_text">
                <h3>{title}</h3>
                <p className="video_row_headline">
                    {channel} {verified && <CheckCircleIcon className="video_row_verified_icon"/>} {views} views • {timestamp}
                </p>
                <p className="video_row_description">{description}</p>
            </div>
        </div>
    );
}
export default VideoRow;