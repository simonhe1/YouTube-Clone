import React from 'react';
import './SearchPage.css';
import TuneIcon from '@material-ui/icons/Tune';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

const SearchPage = props => {
    return (
        <div className="search_page">
            <div className="search_page_filter">
                <TuneIcon />
                <h2>Filter</h2>
            </div>
            <hr />       

            <ChannelRow
                image="https://yt3.ggpht.com/a-/AOh14Gi7cZhlFOTZTAd_Y9fD4snepXqBNJbuqEoP2Mel=s288-c-k-c0xffffffff-no-rj-mo"
                channel="Simon He"
                verified
                subs="23"
                numOfVideos={13}
                description="Personal channel where I made our ASIA club videos"
            />

            <VideoRow 
                title="Korea Trip I Didn't Even Go To LMFAO"
                views="90"
                channel="Simon He"
                timestamp="3 months ago"
                image="https://i.ytimg.com/vi/xYFfHKIiVQw/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCMJ0ZXc2EahkJaHsl8uGMXe2D9-g"
                description="Brandon Shim for 2020 Club President!"
                verified
            />
        </div>
    );
}
export default SearchPage;