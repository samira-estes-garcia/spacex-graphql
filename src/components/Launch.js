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
    const getImage = (imgArr) => {
        let randomImage = imgArr[Math.floor(Math.random() * imgArr.length)];
        console.log(randomImage);
        if (imgArr.length > 0) {
            return <img className="img" key={`${imgArr[randomImage]}`} src={randomImage} alt={randomImage} />
        } else {
           return <img className="alt-img" src={spacex} alt="Placeholder" />
        }
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
                    {getImage(launch.links.flickr_images)}
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