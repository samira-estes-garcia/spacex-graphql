import React from 'react';

export const Launch = ({launchPast}) => {
    return (
        <div className="launch">
            <div className="launch-name">
                <p>{launchPast.mission_name}</p>
            </div>
            <div className="launch-site">
                <p>{launchPast.launch_site.site_name_long}</p>
            </div>
            <div className="launch-time">
                <p>{launchPast.launch_date_local}</p>
            </div>
            <div className="launch-details">
                <p>{launchPast.details}</p>
            </div>
            <div className="links">
                <a href={launchPast.links.video_link}>{launchPast.links.video_link}</a>
            </div>
        </div>
    )
}