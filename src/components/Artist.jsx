import React from "react";

const Artist = ({artistShown}) => {
    console.log(`Component: ${artistShown}`)
    // ternary operator for conditional rendering
    
    return (
        <div className="artist-info">
            <h1>{artistShown.name}</h1>
            <h3>Albums: {artistShown.albums}</h3>
            <h6>**{artistShown.img} will appear here**</h6>
            {/* <img src="" alt="" /> */}
        </div>
    ) 
}

export default Artist;