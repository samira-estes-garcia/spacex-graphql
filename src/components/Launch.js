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
        //   console.log(yearsAgo);
          return <p>Launched: {yearsAgo} years ago</p>
        } else {
          console.log("Hasn't happened yet")
        }
    }

    // display random flickr image if flickr image array not empty
    let image;
    let randomImage = launch.links.flickr_images[Math.floor(Math.random() * launch.links.flickr_images.length)]
    if  (launch.links.flickr_images.length > 0) {
        image = <img className="img" key={`${launch.mission_name}-${randomImage}`} src={randomImage} alt={launch.mission_name} />;
    } else {
        image = <img className="alt-img" src={spacex} alt="Placeholder" />
    }

    //reformat date to readable string
    const date = (launch_date_local) => {
        let date = new Date(launch_date_local);
        let reformatDate = date.toDateString();
        return <p>Launched: {reformatDate}</p>
    }


    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <div className="launch front" onClick={handleClick}>
                <div className="launch-img">
                    {image}
                </div>
                <div className="launch-name">
                    <h1>{launch.mission_name}</h1>
                </div>
                <div className="launch-site">
                    <p>{launch.launch_site.site_name_long}</p>
                </div>
                <div className="launch-year">
                    {yearsAgo(launch.launch_year)}
                </div>
            </div>

            <div className="launch back" onClick={handleClick}>
                <div className="launch-details">
                    <p>{launch.details}</p>
                </div>
                <div className="launch-time">
                    {date(launch.launch_date_local)}
                </div>
                <div className="launch-links">
                    <a href={launch.links.video_link} target="_blank" rel="noopener noreferrer" className="youtube-link">Youtube Video</a>
                </div>
            </div>
    </ReactCardFlip>
    )
};