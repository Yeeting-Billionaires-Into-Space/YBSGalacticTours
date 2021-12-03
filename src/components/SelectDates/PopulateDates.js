// POPULATE DATES

import { useState, useEffect } from 'react'

function PopulateDates ({ month }) {

  const [days, setDays] = useState(null);

  
  let content = [];


  // when state of month selected by user changes call getDates function
  useEffect(() => {

    // array of months with 30 days
    const monthsWith30Days = ['09', '04', '06', '11'];

    if ( month === '02'){
      setDays(28);
    }else if (monthsWith30Days.includes(month)){
      setDays(30);
    }else {
      setDays(31);
    };
    // eslint-disable-next-line
  }, [month])



  // function populates an array with the number of days that will be used to populate the day select
  function populateDateSelect(numOfDays) {
    content = [];
  
    for (let index = 1; index < numOfDays + 1; index ++){
      if (index < 10){
        const date = `0${index}`
        content.push(date);
      }else {
        content.push(index);
      }
    }
  }

  if (days){
    populateDateSelect(days)
  }


  return(
    <>
      {
        content
        ?
        content.map((day) => {
          return(
            <option key={day} value={day}>{day}</option>
          )
        })
        : null
      }
    </>
  )
}


export default PopulateDates;