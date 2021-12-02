// ASTEROID API CALL 

import { useState, useEffect } from 'react';
import axios from 'axios';
import ConvertDates from './ConvertDate';
import Loading from '../Loading';

function ApiCall({ date = '2022-01-01' }) {
  // initialize state 
  // date selected is free of asteroids
  const [ safe, setSafe ] = useState(false);
  // change button text
  const [ buttonText, setButtonText ] = useState('Book Trip');
  // disable book trip button
  const [ buttonDisabled, setButtonDisabled ] = useState(false);
  // loading image state
  const [ isLoading, setIsLoading ] = useState(false);
  // date converted to string to display
  const [ convertedDate, setConvertedDate ] = useState();

  // when date changes, call function to convert date 
  useEffect(() => {
    const dateToDisplay = ConvertDates(date);
    setConvertedDate(dateToDisplay);
  }, [date])


  useEffect(() => {
    setIsLoading(true)
    
    // axios call: Asteroids NeoWs
    axios({
      // only likes to return one week at a time
      url:'https://api.nasa.gov/neo/rest/v1/feed',
      method: 'GET',
      responseType: 'json',
      params:{
        start_date: date,
        api_key: 'X4WfjYooUbriBSQODcWwLkcOgGZuUlO2JrirMCZN'
      }
    })
      .then((response) => {
          // save section of response with array of asteroids for the date
          const asteroidResponse = response.data.near_earth_objects[date];
          
          setIsLoading(false)

          // filter out any true hazardous events and return the array
          const isItSafe = asteroidResponse.filter((asteroid) => {
            if(asteroid.is_potentially_hazardous_asteroid === true){
              return asteroid
            }else {
              return null
            }
          });

          // determine if array contains any hazardous events and set state to safe or unsafe
          if (isItSafe.length > 0 ){
            setSafe(false)  ;
            
          }else {
            setSafe(true);
          }

        })
  }, [date])


    
   // on button click text will change and button is disabled
  const handleButtonChange = () => {
    setButtonText('Booked!');
    setButtonDisabled(true);
  }

  return(
    <>
      {isLoading ?
      <Loading />
      :
        safe
        ? 
        <>
        <button className='warning noAsteroids'>{convertedDate} is asteroid free!</button> 
        <button className='default book' onClick={handleButtonChange} disabled={buttonDisabled} >{buttonText}</button>
        </>
        : <button className='warning yesAsteroids'>Incoming asteroids on {convertedDate}! Please select another date</button> 
      }
      

    </>
  )
}

export default ApiCall;
