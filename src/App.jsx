import { useState, useEffect } from 'react'
import './App.css'
import Playlist from './components/Playlist';


 // gets authorization for API requests
 async function getAuth() {
  // endpoint to grant access to Spotify endpoints
  const accessURL = 'https://accounts.spotify.com/api/token'
  // client credentials to access API
  const cid = 'abcdefg';
  const csecret = 'abcdefg'

  // put all info together to make POST request for authentication
  const access = {
    method: 'POST', 
    // headers provided by Spotify API
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded', 
    }, 
    // URLSearchParams encodes data and builds request from access tokens
    body: new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: cid,
        client_secret: csecret
      })
    }

  // Spotify API that grants authorization
  const response = await fetch(accessURL, access);
  const authData = await response.json();
  console.log(authData);
  return authData;
}
console.log(getAuth())

function App() {
  const apiAuth = getAuth()
  // // access token needed to access Spotify API
  // const apiKEY = ''



 
  // // makes API call to Spotify
  // const getPlaylist = async () => {
  //   // Spotify API endpoint to rnb playlists
  //   // const apiURL = 'https://api.spotify.com/v1/search?q=rnb&type=playlist&limit=25'
  // need authorization to access info from endpoint
    // const response = await fetch(apiURL, {
    //   method: 'GET',
    //   headers: { 'Authorization': `Bearer ${access}`} });
  //   const data = await response.json;
  //   console.log(data);

  //   // all information returned in object items
  //   const [currentPlaylist, setCurrentPlaylist] = useState(data[items]);
  // }

  // holds value of current playlist displayed on screen
  const [currentPlaylist, setCurrentPlaylist] = useState(null);
  // indexes JSON doc to get the next playlist
  const [index, setIndex] = useState(0);

  // funciton displays next playlist in API doc
  const onNextPlaylist = () => {
    try {
      // if (index <= playlistInfo.length) {
        // holds value of index when bttn clicked
        useEffect(() => {getPlaylist()}, [])
        let currentIndex = index;
        // playlist at currentIndex
        // setCurrentPlaylist(artistInfo[currentIndex]);
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
  console.log(`Current playlist ${currentPlaylist}`)

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
