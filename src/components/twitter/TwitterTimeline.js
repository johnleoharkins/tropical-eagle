import React from "react";
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton,
    TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed,
    TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

const TwitterTimeline = ({source, screenName, listId}) => {

    return (
        <React.Fragment>
            <TwitterTimelineEmbed sourceType={"list"} screenName={screenName} id={listId} noScrollbar={false} />
        </React.Fragment>
    )
}

export default TwitterTimeline;