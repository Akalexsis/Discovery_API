import { useState } from 'react'
import './App.css'
import artistInfo from './components/practice';
import Artist from './components/Artist';

// access token needed to access Spotify API
// const accessToken = ''
// // Spotify API endpoint
// const apiURL = ''

// const getArtist = async () => {
//   const response = await fetch(apiURL);
//   const data = await response.json;
//   console.log(data);
// }

console.log(artistInfo)
function App() {
  // // access token needed to access Spotify API
  // const apiKEY = ''
  // // Spotify API endpoint
  // const apiURL = ''

  // const getArtist = async () => {
  //   const response = await fetch(apiURL);
  //   const data = await response.json;
  //   console.log(data);
  // }

  // holds value of current artist displayed on screen
  const [currentArtist, setCurrentArtist] = useState(null);
  // indexes JSON doc to get the next artist
  const [index, setIndex] = useState(0);

  // funciton displays next artist in API doc
  const onNextArtist = () => {
    try {
      // if (index <= artistInfo.length) {
        // holds value of index when bttn clicked
        let currentIndex = index;
        // artist at currentIndex
        setCurrentArtist(artistInfo[currentIndex]);
        setIndex(index+1);
      // } 
      // // atp can only reset once users looked at them all 
      // else {
      //   // resets index and shows artist at index
      //   setIndex(0)
      // }
    } catch (error) {
      console.log(error)
    }
  }

  console.log(`Artist at index ${index} is ${artistInfo[index].name}`);
  console.log(`Current artist ${currentArtist}`)

  return (
    <div className='App'>
      <header>
        <h1>World of RnB</h1>
        <p>Hello there! Interested in finding RnB artists? Well this site is just for you! Here, you can find information
          on any artist in this genre. Click the 'Next Artist' button to find a new artist!
        </p>
      </header>
      { currentArtist === null ? (<h1>Artists will appear here</h1>) : ( <Artist artistShown={currentArtist}/> ) }
      <button onClick={onNextArtist}>Next Artist</button>
    </div>
  )
}

export default App
