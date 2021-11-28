// Gallery

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


function Gallery() {
  const [ imgRefs, setImgRefs ] = useState([]);

  
  // api calls: Nasa Image and Video Library
  useEffect(() => {
    
    const planets = [ 'mars', 'uranus', 'saturn'];

    const requests = planets.map((planet) => {
      return fetch(`https://images-api.nasa.gov/search?q=${planet}&media_type=image`)
        .then((response) => {
          return response.json();
        });
    });

    // creating a promise to return all the api call results at once
    Promise.all(requests)
      .then((jsonData) => {

        const marsData = jsonData[0].collection.items;
        const uranusData = jsonData[1].collection.items;
        const saturnData = jsonData[2].collection.items;

        // taking only the items we want from the call
        const marsArray = [ marsData[49], marsData[60], marsData[79], marsData[83] ];
        const uranusArray = [ uranusData[1], uranusData[4], uranusData[7], uranusData[21] ];
        const saturnArray = [ saturnData[5], saturnData[7], saturnData[8], saturnData[20] ];
        

        // adding a planet property to each array to allow us to filter through them later
        const marsWithPlanet = marsArray.map((obj) => {
          return { ...obj, planet: 'mars'};
        });

        const uranusWithPlanet = uranusArray.map((obj) => {
          return { ...obj, planet: 'uranus'};
        });

        const saturnWithPlanet = saturnArray.map((obj) => {
          return { ...obj, planet: 'saturn'};
        });

        // combining all into one array
        const allWithPlanet = [ ...marsWithPlanet, ...uranusWithPlanet, ...saturnWithPlanet ];

        setImgRefs(allWithPlanet);
      })

  }, [])



  return (
    <div className='gallery'>
      
    </div>
  )
}

export default Gallery;
