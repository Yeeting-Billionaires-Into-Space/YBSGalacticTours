// POPULATE DATES

import { useState, useEffect } from 'react'

function PopulateDates ({ month }) {
  const [days, setDays] = useState(31);

   // array of months with 30 days
  const monthsWith30Days = ['09', '04', '06', '11'];
  let content = [];
  let optionsToDisplay = null;

  // when state of month selected by user changes call getDates function
  useEffect(() => {
    getDates(month);
  }, [month])

  // when state of days changes, call populateDateSelected function
  useEffect(() => {
    populateDateSelect(days);
  }, [days])

  // function takes month selected by user and determines number of days the day select should have
  const getDates = (month) => {
    if ( month === '02'){
      setDays(28);
    }else if (monthsWith30Days.includes(month)){
      setDays(30);
    }else {
      setDays(31);
    }
  }
    

  // function populates an array with the number of days that will be used to populate teh day select
  function populateDateSelect() {
    content = [];
  
    for (let index = 1; index < days + 1; index ++){
        content.push(index);
      }
      
  }

  if (days){
    populateDateSelect()
  }


  return(
    <>
        <option value="0" disabled >Choose day</option>
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