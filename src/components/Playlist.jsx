import React from "react";

const Artist = ({name, owner, track, image}) => {
    console.log(`Component: ${name}`)
    // ternary operator for conditional rendering
    
    return (
        <div className="playlist-info">
            <h1>Playlist: <span id='underline'>{name}</span> by {owner}</h1>
            <h3>Playlist cover</h3>
            <img src={image} alt={`Image of ${name} playlist`} width='250' />
            <p>Total tracks: {track}</p>
        </div>
    ) 
}

export default Artist;