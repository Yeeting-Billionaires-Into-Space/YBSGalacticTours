// Gallery
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Gallery() {

  const [ imgRefs, setImgRefs ] = useState([]);

  const mars = [ 'PIA04591', 'PIA05036', 'PIA08431', 'PIA03923' ];
  // const uranus = [ 'PIA18182', 'PIA00037', 'PIA01488', 'PIA00143' ];
  // const saturn = [ 'PIA01383', 'PIA06060', 'PIA01957', 'PIA08931' ];

  const planetObj = useParams();
  const planet = planetObj.planetID;
  console.log(planet)


  // api call: Nasa Image and Video Library
  useEffect(() => {
    
    // maps through the array of chosen planet
    const requests = mars.map((id) => {
      return fetch(`https://images-api.nasa.gov/asset/${id}`)
        .then((response) => {
          return response.json();
        });
    });


    Promise.all(requests)
      .then((jsonData) => {

        // gets the image paths from the data returned
        const data = jsonData;
        const imagePaths = data.map((obj) => {
          return obj.collection.items[0].href;
        })
        setImgRefs(imagePaths);
        console.log(imagePaths);
      })

  }, [])




  return (
    <div>
      
    </div>
  )
}

export default Gallery;
