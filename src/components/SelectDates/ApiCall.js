// API CALL 

import { useState, useEffect } from 'react';
import axios from 'axios';
import ConvertDates from './ConvertDate';
import Loading from '../Loading';

function ApiCall({ date='2022-01-01' }) {
  // initialize state if date selected is free of asteroids
  const [ safe, setSafe ] = useState(false);
  // sets state of warning message
  const [ messageToDisplay, setMessageToDisplay ] = useState('');
  // changes state on book trip button
  const [ buttonText, setButtonText ] = useState('Book Trip');
  // changes state to disable book trip button
  const [ buttonDisabled, setButtonDisabled ] = useState(false);
  // initialize state for loading
  const [ isLoading, setIsLoading ] = useState(false);


  // inititalize variables
  let message;


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
          // save response 
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
            setSafe(false)         
          }else {
            setSafe(true);
          }
        })
  }, [date])

  // calls function to get message whenever state of safe changes
  useEffect(() => {
    getMessage(safe);
    // eslint-disable-next-line
  }, [safe])

  // sets state of message
  const getMessage = (safe) => {

    if (safe){
      const dateToDisplay = ConvertDates(date)
      message = `${dateToDisplay} is asteroid free!`;
      
    }else {
      const dateToDisplay = ConvertDates(date)
      message = `Incoming asteroids on ${dateToDisplay}! Please select another date`;
    }  
    setMessageToDisplay(message);
    
  }
    
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
        messageToDisplay === 'Asteroid free!'
        ? <button className='warning noAsteroids'>{messageToDisplay}</button> 
        : <button className='warning yesAsteroids'>{messageToDisplay}</button> 
      }
      
      {
        safe
        ? <button className='default book' onClick={handleButtonChange} disabled={buttonDisabled} >{buttonText}</button>
        : null
      }

    </>
  )
}

export default ApiCall;
