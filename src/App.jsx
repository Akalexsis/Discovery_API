import { useState, useEffect } from 'react'
import './App.css'
import Playlist from './components/Playlist';
// import getAuth from './components/AuthToken';

function App() {
  
  // displays playlist name
  const [playlistName, setPlaylistName] = useState(null);
  // displays playlist total tracks in playlist
  const [playlistTracks, setPlaylistTracks] = useState(null);
  // displays playlist image
  const [playlistImg, setPlaylistImg] = useState(null);
  // displays playlist owner
  const [playlistOwner, setPlaylistOwner] = useState(null);
  // indexes JSON doc to get the next playlist
  const [index, setIndex] = useState(5);

  // funciton displays next playlist in API 
  const onNextPlaylist = async () => {
    try {
      // if (index == 25) {
      //   // resets index once all playlists have been displayed
      //   setIndex(0)
      // } else {
        let currentIndex = index;
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
        // return data.playlists.items
        setPlaylistName(data.playlists.items[currentIndex].name);
        setPlaylistTracks(data.playlists.items[currentIndex].tracks.total);
        setPlaylistOwner(data.playlists.items[currentIndex].owner.display_name);
        setPlaylistImg(data.playlists.items[currentIndex].images[0].url);
        
        // updates index value on next click
        setIndex(index+1);

    } catch (error) {
      console.log(error)
    }
  }

  console.log(onNextPlaylist())

  return (
    <div className='App'>
      <header>
        <h1>World of RnB</h1>
        <p>Hello there! Interested in discovering new RnB playlists? Well this site is just for you! Here, you can find 
          many playlists within this genre that can be found on Spotify. Click the 'Next Playlist' button to start browsing!
        </p>
      </header>
      <div>
        { playlistName === null ? (<h1>Playlists will appear here</h1>) : ( <Playlist name={playlistName} owner={playlistOwner} track={playlistTracks} image={playlistImg} /> ) }
        <button onClick={onNextPlaylist}>Next Playlist</button>
      </div>
      
    </div>
  )
}

export default App
