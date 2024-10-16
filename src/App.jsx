import { useState, useEffect } from 'react'
import './App.css'
import Playlist from './components/Playlist';
import getAuth from './components/AuthToken';

// gets authorization token
// console.log(getAuth)

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
  const [index, setIndex] = useState(0);
  // stores playlist data
  const [playlistData, setPlaylistData] = useState([]);

  // makes API call to store playlist data in var playlistData
  const getPlaylist = async () => {
    // gets authorization token for API request
    const apiAuth = "BQBDm0MvIqWP7y6SqionnJSKNDy3Vjzf82SJggmPE6QOT4YkEb65LhJKZXf-TOV0dW1-d1dfCzmDl9YQGeW77DOt4crgJCmhLr9B3SJNWM0AJoKV7ck";
    console.log(`My API access ${apiAuth}`)

    // Spotify API endpoint to rnb playlists
    const apiURL = 'https://api.spotify.com/v1/search?q=genre%3AR%26b&type=playlist&limit=25'
    // need authorization to access info from endpoint
    const response = await fetch(apiURL, {
      method: 'GET',
      // grants access to playlist endpoint
      headers: { 'Authorization': `Bearer ${apiAuth}`} }).then((response) => {
        response.json().then((data) => {
          setPlaylistData(data.playlists.items)
          
        })
      });
  }
  
  // makes API call to store data in playlistData
  useEffect(() => {getPlaylist()}, [])
  console.log(playlistData)
  // console.log(`playlists ${JSON.stringify(playlistData)}`)

  const onNextPlaylist = () => {
    try {
      let currentIndex = index;
      if (index == 25) {
        // resets index once all playlists have been displayed
        setIndex(0)
      } else {
      // gets the specific information from the doc
      setPlaylistName(playlistData[currentIndex].name);
      setPlaylistTracks(playlistData[currentIndex].tracks.total);
      setPlaylistOwner(playlistData[currentIndex].owner.display_name);
      setPlaylistImg(playlistData[currentIndex].images[0].url);
      
      // updates index value on next click
      setIndex(index+1);
      }
    } catch (error) {
      console.log(error)
    }
  }

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
