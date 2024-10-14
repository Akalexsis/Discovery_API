import React from "react";

const Artist = ({playlistShown}) => {
    console.log(`Component: ${playlistShown}`)
    // ternary operator for conditional rendering
    
    return (
        <div className="playlist-info">
            <h1>Name of Playlist: {playlistShown.name}</h1>
            <h3>Number of tracks: {playlistShown}</h3>
            <h3>Playlist creater name</h3>
            <h6>**playlist cover will appear here**</h6>
            {/* <img src="" alt="" /> */}
            {/* <p>**description of the playlist will be shown here** {playlistShown.description}</p> */}
        </div>
    ) 
}

export default Artist;