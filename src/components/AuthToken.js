// gets authorization for API requests
  async function getAuth() {
    // endpoint to grant access to Spotify endpoints
    const accessURL = 'https://accounts.spotify.com/api/token'
    // client credentials to access API
    const cid = '85f0549218c24ed28e354abf37dc9095';
    const csecret = 'c104e775771647579e44efe7adaccddc';

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
    
    // access token key value in authentication request
    console.log(authData);
    return authData;
}

console.log(getAuth())

export default getAuth;