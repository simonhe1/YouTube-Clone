import React from 'react';
import './VideoCard.css';
import Avatar from "@material-ui/core/Avatar";

const VideoCard = ({image,title,channel,views,timestamp,channelImage}) => {
    return (
        <div className="video_card">
            <img className="video_card_thumbnail" src={image} alt="" />
            <div className="video_card_info">
                <Avatar className="video_card_avatar" alt={channel} src={channelImage} />
                <div className="video_card_text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>
                        {views} views • {timestamp}
                    </p>
                </div>
            </div>
        </div>
    );
}
export default VideoCard;