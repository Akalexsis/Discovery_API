# Web Development Project 4 - *Discovery API*

Submitted by: **Kayla Thornton**

This web app uses Spotify's API to render information on RnB playlists. Users can click the "Next Playlist" button to discover 
a new playlist recommendation. When the button is clicked, the playlist name, it's owner, and the total number of tracks in the 
playlist. The playlist's cover image is also shown.

Time spent: **10** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **Clicking a button creates a new API fetch request and displays at least three attributes from the returned JSON data**
- [x] **Only one item/API call is viewable at a time**
- [x] **API calls appear random to the user**
- [x] **At least one image is displayed per API call**
- [ ] **Clicking on a displayed value for one attribute adds it to a displayed ban list**
  - [ ] To ensure an accurate grade, your recording **must** show that when clicked, an attribute in the ban list is immediately removed from the list of banned attributes
- [ ] **Attributes on the ban list prevent further images/API results with that attribute from being displayed**

The following **optional** features are implemented:

- [ ] Multiple types of attributes can be added to the ban list
- [ ] Users can see a stored history of their previously viewed items from their session

The following **additional** features are implemented:

* No additional features are added

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<a href="https://www.dropbox.com/scl/fi/pdqngzgdevwviiwprd3iv/K_Thornton_WEB102_Week4.mp4?rlkey=bd0zph0u2dkb2tiivye25g18b&st=mdnsoiyc&dl=0">Walkthrough Video</a>

GIF created with Zoom 

## Notes

Describe any challenges encountered while building the app.
- I had no idea how to find an API endpoint
  - In class, we discussed how to use an API, but not how to find it and how to read documentation for it, so I had to learn this
  before I could use it in my project
- Did not know how to work Spotify API
    - Needed to use a post to gain access to spotify WEB API but I don’t know how to write a post command yet
    - Research on YouTube and asked ChatGPT how to convert a curl request (shown in the Spotify documentation) into a fetch requst
     (a request I know how to make)
- Difficulties getting only one API request to show at a time
  - I knew useEffect would solve this issue, but I was unsure how to use it with an onClick function
  - Realized I needed to separate the onClick functionality from the API call and call the API within useEffect

## License

    Copyright [2024] [Kayla Thornton]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
