import React from 'react';
import spacex from '../spacex.jpeg'

export const Launch = ({launchPast}) => {

    // display first 3 flickr images if array not empty, if array is empty, display default spacex image
    let image;
    if  (launchPast.links.flickr_images.length > 0) {
        image = launchPast.links.flickr_images
        .slice(0,3)
        .map(image => (<img className="img" key={`${launchPast.mission_name}-${image}`} src={image} alt="{launchPast.mission_name}" />))
    } else {
        image = <img className="alt-img" src={spacex} alt="Placeholder" />
    }

    return (
        <div className="launch">
            <div className="launch-img">
                {image}
            </div>
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