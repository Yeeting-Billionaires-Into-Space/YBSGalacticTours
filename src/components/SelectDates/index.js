// SelectDates

import { useState } from 'react';
import PopulateDates from './PopulateDates';





function SelectDates({ planet }){
  // initialize state for month that user selects from dropdown
  const [ monthSelected, setMonthSelected] = useState('01');
  const [ dateSelected, setDateSelected ] = useState('');


  // handle event for user selection of dropdown
  const handleUserMonthSelect = (event) => {
    console.log(event.target.value)
    setMonthSelected(event.target.value) 
  }

  const handleDateSelected = (event) => {
    console.log(event.target.value)
    setDateSelected(event.target.value);
  }

     
  return(
    <div>
      <div className="title">
        <h1>{planet}</h1>
        <button>X</button>
      </div>
      <div>
        <h2>Plan your tour now!</h2>
        <form action="">
          <fieldset>
            <legend>Use the drop down menu to select your launch date.</legend>
                  <label htmlFor='month'>Month:
                  <select name='month' id='month' onChange={handleUserMonthSelect}>
                    <option value='01'>January</option>
                    <option value='02'>February</option>
                    <option value='03'>March</option>
                    <option value='04'>April</option>
                    <option value='05'>May</option>
                    <option value='06'>June</option>
                    <option value='07'>July</option>
                    <option value='08'>August</option>
                    <option value='09'>September</option>
                    <option value='10'>October</option>
                    <option value='11'>November</option>
                    <option value='12'>December</option>
                  </select>
                </label>

                <label htmlFor="day">Day:</label>
                <select name="day" id="day" onChange={handleDateSelected}>
                  <PopulateDates month={monthSelected} />
                </select>
          </fieldset>
        </form>
      </div>
    </div>
  )
}

export default SelectDates;