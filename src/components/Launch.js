import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip'
import spacex from '../spacex.jpeg'

export const Launch = ({launch}) => {

    // set state for card flip
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
            setIsFlipped(!isFlipped);
    }

    // calculates how many years ago the mission launched
    const yearsAgo = (year) => {
        let currentYear = new Date().getFullYear();
        if (currentYear > year) {
          let yearsAgo = currentYear - year
          console.log(yearsAgo);
          <p>{yearsAgo}</p>
        } else {
          console.log("Hasn't happened yet")
        }
    }

    // display first 3 flickr images if array not empty, if array is empty, display default spacex
    let image;
    if  (launch.links.flickr_images.length > 0) {
        image = launch.links.flickr_images
        .slice(0,3)
        .map(image => (<img className="img" key={`${launch.mission_name}-${image}`} src={image} alt="{launch.mission_name}" />))
    } else {
        image = <img className="alt-img" src={spacex} alt="Placeholder" />
    }

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <div className="launch front" onClick={handleClick}>
                <div className="launch-img">
                    {image}
                </div>
                <div className="launch-name">
                    <p>{launch.mission_name}</p>
                </div>
                <div className="launch-site">
                    <p>{launch.launch_site.site_name_long}</p>
                </div>
                <div className="launch-year">
                    <p>{yearsAgo(launch.launch_year)}</p>
                </div>
            </div>

            <div className="launch back" onClick={handleClick}>
                <div className="launch-details">
                    <p>{launch.details}</p>
                </div>
                <div className="links">
                    <a href={launch.links.video_link}>{launch.links.video_link}</a>
                </div>
            </div>
    </ReactCardFlip>
    )
};