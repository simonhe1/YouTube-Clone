import React from 'react';
import './RecommendedVideos.css';
import VideoCard from './VideoCard';

const RecommendedVideos = props => {
    return (
        <div className="recommended_videos">
            <h2>Recommended</h2>
            <div className="recommended_videos_video_cards">
                <VideoCard 
                    title="Korea Trip I Didn't Even Go To LMFAO" 
                    views="90" 
                    channel="Simon He" 
                    timestamp="3 months ago" 
                    channelImage="https://yt3.ggpht.com/a-/AOh14Gi7cZhlFOTZTAd_Y9fD4snepXqBNJbuqEoP2Mel=s288-c-k-c0xffffffff-no-rj-mo" 
                    image="https://i.ytimg.com/vi/xYFfHKIiVQw/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCMJ0ZXc2EahkJaHsl8uGMXe2D9-g"
                />
                <VideoCard 
                    title="ASIA Hiking Trip 2018" 
                    views="209" 
                    channel="Simon He" 
                    timestamp="1 year ago" 
                    channelImage="https://yt3.ggpht.com/a-/AOh14Gi7cZhlFOTZTAd_Y9fD4snepXqBNJbuqEoP2Mel=s288-c-k-c0xffffffff-no-rj-mo" 
                    image="https://i.ytimg.com/vi/k3lKH4b7g3s/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDVFjTN2RwZuLw7vyTaYiEWid1neQ"
                />
                <VideoCard 
                    title="Whatever You Build, I'll Pay For!" 
                    views="21M" 
                    channel="MrBeast Gaming"
                    timestamp="1 month ago" 
                    channelImage="https://yt3.ggpht.com/a-/AOh14GjFWfOrwDETAGPwewuffgSCchLIzo0s8LSuIw=s68-c-k-c0x00ffffff-no-rj-mo" 
                    image="https://i.ytimg.com/vi/QsUfsZzxi9c/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLD1dGRyFpKXr5z0fpkkSSEB-LPoYQ"
                />
                <VideoCard 
                    title="Final iPhone 12 Pro Max Leaks, '12S', AirPods 3,AirTags & iOS 14 Beta 7!" 
                    views="1.2M" 
                    channel="EverythingApplePro"
                    timestamp="1 day ago" 
                    channelImage="//yt3.ggpht.com/a/AATXAJwfqCFpplCVBfC24odA3fNna-Zt9eG0Bv3LODRknQ=s176-c-k-c0x00ffffff-no-rj-mo" 
                    image="https://i.ytimg.com/vi/aVyx51a1yCI/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCeG4cM0N6NZI_UvOwz9kG7RxFvUQ"
                />
                <VideoCard 
                    title="What Happens When You Plug 10 Chargers in an iPhone? - One Mega Charger!" 
                    views="5.9M" 
                    channel="TechRax"
                    timestamp="4 weeks ago" 
                    channelImage="//yt3.ggpht.com/a/AATXAJz9BvejJy7RJqtKdOo1qQ86Y48q3dVckMUXIkw7=s176-c-k-c0x00ffffff-no-rj-mo" 
                    image="https://i.ytimg.com/vi/c-IiRa3BbLE/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAGAdNJ-7e1mKc0mpfkeDUmewjyPA"
                />
                <VideoCard 
                    title="Korea Trip I Didn't Even Go To LMFAO" 
                    views="90" 
                    channel="Simon He" 
                    timestamp="3 months ago" 
                    channelImage="https://yt3.ggpht.com/a-/AOh14Gi7cZhlFOTZTAd_Y9fD4snepXqBNJbuqEoP2Mel=s288-c-k-c0xffffffff-no-rj-mo" 
                    image="https://i.ytimg.com/vi/xYFfHKIiVQw/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCMJ0ZXc2EahkJaHsl8uGMXe2D9-g"
                />
                <VideoCard 
                    title="ASIA Hiking Trip 2018" 
                    views="209" 
                    channel="Simon He" 
                    timestamp="1 year ago" 
                    channelImage="https://yt3.ggpht.com/a-/AOh14Gi7cZhlFOTZTAd_Y9fD4snepXqBNJbuqEoP2Mel=s288-c-k-c0xffffffff-no-rj-mo" 
                    image="https://i.ytimg.com/vi/k3lKH4b7g3s/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDVFjTN2RwZuLw7vyTaYiEWid1neQ"
                />
                <VideoCard 
                    title="Whatever You Build, I'll Pay For!" 
                    views="21M" 
                    channel="MrBeast Gaming"
                    timestamp="1 month ago" 
                    channelImage="https://yt3.ggpht.com/a-/AOh14GjFWfOrwDETAGPwewuffgSCchLIzo0s8LSuIw=s68-c-k-c0x00ffffff-no-rj-mo" 
                    image="https://i.ytimg.com/vi/QsUfsZzxi9c/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLD1dGRyFpKXr5z0fpkkSSEB-LPoYQ"
                />
                <VideoCard 
                    title="Final iPhone 12 Pro Max Leaks, '12S', AirPods 3,AirTags & iOS 14 Beta 7!" 
                    views="1.2M" 
                    channel="EverythingApplePro"
                    timestamp="1 day ago" 
                    channelImage="//yt3.ggpht.com/a/AATXAJwfqCFpplCVBfC24odA3fNna-Zt9eG0Bv3LODRknQ=s176-c-k-c0x00ffffff-no-rj-mo" 
                    image="https://i.ytimg.com/vi/aVyx51a1yCI/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCeG4cM0N6NZI_UvOwz9kG7RxFvUQ"
                />
                <VideoCard 
                    title="What Happens When You Plug 10 Chargers in an iPhone? - One Mega Charger!" 
                    views="5.9M" 
                    channel="TechRax"
                    timestamp="4 weeks ago" 
                    channelImage="//yt3.ggpht.com/a/AATXAJz9BvejJy7RJqtKdOo1qQ86Y48q3dVckMUXIkw7=s176-c-k-c0x00ffffff-no-rj-mo" 
                    image="https://i.ytimg.com/vi/c-IiRa3BbLE/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAGAdNJ-7e1mKc0mpfkeDUmewjyPA"
                />
                <VideoCard 
                    title="Korea Trip I Didn't Even Go To LMFAO" 
                    views="90" 
                    channel="Simon He" 
                    timestamp="3 months ago" 
                    channelImage="https://yt3.ggpht.com/a-/AOh14Gi7cZhlFOTZTAd_Y9fD4snepXqBNJbuqEoP2Mel=s288-c-k-c0xffffffff-no-rj-mo" 
                    image="https://i.ytimg.com/vi/xYFfHKIiVQw/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCMJ0ZXc2EahkJaHsl8uGMXe2D9-g"
                />
                <VideoCard 
                    title="ASIA Hiking Trip 2018" 
                    views="209" 
                    channel="Simon He" 
                    timestamp="1 year ago" 
                    channelImage="https://yt3.ggpht.com/a-/AOh14Gi7cZhlFOTZTAd_Y9fD4snepXqBNJbuqEoP2Mel=s288-c-k-c0xffffffff-no-rj-mo" 
                    image="https://i.ytimg.com/vi/k3lKH4b7g3s/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDVFjTN2RwZuLw7vyTaYiEWid1neQ"
                />
                <VideoCard 
                    title="Whatever You Build, I'll Pay For!" 
                    views="21M" 
                    channel="MrBeast Gaming"
                    timestamp="1 month ago" 
                    channelImage="https://yt3.ggpht.com/a-/AOh14GjFWfOrwDETAGPwewuffgSCchLIzo0s8LSuIw=s68-c-k-c0x00ffffff-no-rj-mo" 
                    image="https://i.ytimg.com/vi/QsUfsZzxi9c/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLD1dGRyFpKXr5z0fpkkSSEB-LPoYQ"
                />
                <VideoCard 
                    title="Final iPhone 12 Pro Max Leaks, '12S', AirPods 3,AirTags & iOS 14 Beta 7!" 
                    views="1.2M" 
                    channel="EverythingApplePro"
                    timestamp="1 day ago" 
                    channelImage="//yt3.ggpht.com/a/AATXAJwfqCFpplCVBfC24odA3fNna-Zt9eG0Bv3LODRknQ=s176-c-k-c0x00ffffff-no-rj-mo" 
                    image="https://i.ytimg.com/vi/aVyx51a1yCI/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCeG4cM0N6NZI_UvOwz9kG7RxFvUQ"
                />
                <VideoCard 
                    title="What Happens When You Plug 10 Chargers in an iPhone? - One Mega Charger!" 
                    views="5.9M" 
                    channel="TechRax"
                    timestamp="4 weeks ago" 
                    channelImage="//yt3.ggpht.com/a/AATXAJz9BvejJy7RJqtKdOo1qQ86Y48q3dVckMUXIkw7=s176-c-k-c0x00ffffff-no-rj-mo" 
                    image="https://i.ytimg.com/vi/c-IiRa3BbLE/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAGAdNJ-7e1mKc0mpfkeDUmewjyPA"
                />

            </div>
        </div>
    );
}
export default RecommendedVideos;