// API CALL 

import { useState, useEffect } from 'react';
import axios from 'axios';

function ApiCall({ date='2022-01-01' }) {
  const [ safe, setSafe ] = useState(false);
  const [ messageToDisplay, setMessageToDisplay ] = useState('');
 


  const arrayOfAsteroids = [];
  let message;

  console.log(date)

  useEffect(() => {
    // axios call: Asteroids NeoWs
    axios({
      // only likes to return one week at a time?
      url:'https://api.nasa.gov/neo/rest/v1/feed',
      method: 'GET',
      responseType: 'json',
      params:{
        start_date: date,
        api_key: 'X4WfjYooUbriBSQODcWwLkcOgGZuUlO2JrirMCZN'
      }
    })
      .then((response) => {
        console.log(response)
       
     
          const asteroidResponse = response.data.near_earth_objects[date];
          console.log(asteroidResponse)


  
          const isItSafe = asteroidResponse.filter((asteroid) => {
            if(asteroid.is_potentially_hazardous_asteroid === true){
              return asteroid
            }
          });


          if (isItSafe.length > 0 ){
            console.log('not safe')
            setSafe(false)           
          }else {
            setSafe(true);
            console.log('safe')
          }
          
          console.log(isItSafe.length)
          console.log("end of API call useeffect")
        
        })
  }, [date])

  useEffect(() => {
    getMessage(safe);
  }, [safe])

  const getMessage = (safe) => {
    if (safe){
      message =  `${date} is free from near earth objects. You are good to launch.`;
      
    }else {
      message = `${date} is not safe to launch as there are near earth objects`;
      
    }  
    setMessageToDisplay(message);  
    console.log(message)
  }
    

  return(
    <>
    {
      messageToDisplay
    }
  </>
  )
}

export default ApiCall;
