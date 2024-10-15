import { useState, useEffect } from 'react'
import './App.css'
import Playlist from './components/Playlist';
import getAuth from './components/AuthToken';

function App() {
  
  // holds value of current playlist displayed on screen
  const [currentPlaylist, setCurrentPlaylist] = useState(null);
  // indexes JSON doc to get the next playlist
  const [index, setIndex] = useState(0);

  // only makes one API call to get playlists
    const getPlaylist = async () => {
    // gets authorization token for API request
    const apiAuth = "abcdefg";
    console.log(`My API access ${apiAuth}`)
    // Spotify API endpoint to rnb playlists
    const apiURL = 'https://api.spotify.com/v1/search?q=genre%3AR%26b&type=playlist&limit=25'
    // need authorization to access info from endpoint
    const response = await fetch(apiURL, {
      method: 'GET',
      // grants access to playlist endpoint
      headers: { 'Authorization': `Bearer ${apiAuth}`} });
    const data = await response.json();
    
    // .playlist.items get information from API about each playlist
    console.log(data.playlists.items);
  }
  
  // console.log(getPlaylist())
  // funciton displays next playlist in API doc
  const onNextPlaylist = () => {
    try {
        let currentIndex = index;
        // playlist at currentIndex
        setCurrentPlaylist(playlistData[currentIndex]);
        setIndex(index+1);
      // } 
      // // atp can only reset once users looked at them all 
      // else {
      //   // resets index and shows playlist at index
      //   setIndex(0)
      // }
    } catch (error) {
      console.log(error)
    }
  }

  // console.log(`Playlist at index ${index} is ${artistInfo[index].name}`);
  console.log(`Current playlist ${getPlaylist()}`)

  return (
    <div className='App'>
      <header>
        <h1>World of RnB</h1>
        <p>Hello there! Interested in discovering new RnB playlists? Well this site is just for you! Here, you can find 
          many playlists within this genre that can be found on Spotify. Click the 'Next Playlist' button to start browsing!
        </p>
      </header>
      { currentPlaylist === null ? (<h1>Playlists will appear here</h1>) : ( <Playlist playlistShown={currentPlaylist}/> ) }
      <button onClick={onNextPlaylist}>Next Playlist</button>
    </div>
  )
}

export default App
