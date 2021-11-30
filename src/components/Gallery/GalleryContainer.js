// GalleryContainer
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import GalleryItem from './GalleryItem';


function GalleryContainer() {
  // setting states
  const [imgRefs, setImgRefs] = useState([]);
  const [filteredImgRefs, setFilteredImgRefs] = useState([]);
  const planetID = useParams();
  const planet = planetID.planetID;


  // api calls: Nasa Image and Video Library
  useEffect(() => {

    const planets = ['mars', 'uranus', 'saturn'];

    const requests = planets.map((planet) => {
      return fetch(`https://images-api.nasa.gov/search?q=${planet}&media_type=image`)
        .then((response) => {
          return response.json();
        });
    });

    // creating a promise to return all the api call results at once
    Promise.all(requests)
      .then((jsonData) => {
        // sorting the jsonData returned from the api calls
        const marsData = jsonData[0].collection.items;
        const uranusData = jsonData[1].collection.items;
        const saturnData = jsonData[2].collection.items;

        

        // saving only the items we want from the call
        const marsArray = [ marsData[49], marsData[79], marsData[87], marsData[94] ];
        const uranusArray = [ uranusData[1], uranusData[4], uranusData[7], uranusData[21] ];
        const saturnArray = [ saturnData[5], saturnData[7], saturnData[8], saturnData[20] ];


        // adding a planet property to each array to allow us to filter through them later
        const marsWithPlanet = marsArray.map((obj) => {
          return { ...obj, planet: 'mars' };
        });

        const uranusWithPlanet = uranusArray.map((obj) => {
          return { ...obj, planet: 'uranus' };
        });

        const saturnWithPlanet = saturnArray.map((obj) => {
          return { ...obj, planet: 'saturn' };
        });


        // combining all into one array
        const allWithPlanet = [...marsWithPlanet, ...uranusWithPlanet, ...saturnWithPlanet];

        // sets state of imgRefs
        setImgRefs(allWithPlanet);
      })

  }, [])


  // filters the images
  const getImages = (nameOfPlanet) => {
    const copyOfImgRefs = [...imgRefs]

    // conditional filtering
    if (nameOfPlanet) {
      const imgFiltered = copyOfImgRefs.filter((eachImg) => {
        return eachImg.planet === nameOfPlanet;
      });
      // sets the state of filteredImgRefs
      setFilteredImgRefs(imgFiltered)
    }
  }


  // gets filtered images when filteredImgRefs has changed state
useEffect(()=> {
  getImages(planet)
}, [filteredImgRefs])


  return (
    <ul className='gallery'>
      {
        // for each image in the filteredImgRefs array, returns GalleryItem component
      filteredImgRefs.map(image => {
        return (
          <GalleryItem image={image} key={image.data[0].nasa_id} />
        )
      })
      }
    </ul>
  )
}

export default GalleryContainer; 
