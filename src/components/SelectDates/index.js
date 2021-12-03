// SelectDates
import { useState } from 'react';
import PopulateDates from './PopulateDates';
import ApiCall from './ApiCall';



function SelectDates({ planet }){
  // initialize state for user selections from dropdown
  const [ monthSelected, setMonthSelected] = useState('01');
  const [ daySelected, setDaySelected ] = useState('01');
  const [ yearSelected, setYearSelected ] = useState('2022');
  const [ dateSelected, setDateSelected ] = useState('2022-01-01');


  // handle events for user selections of dropdowns
  const handleUserMonthSelect = (event) => {
    setMonthSelected(event.target.value); 
  }

  const handleDaySelected = (event) => {
    setDaySelected(event.target.value);
  }

  const handleYearSelected = (event) => {
    setYearSelected(event.target.value);
  }

  // set state for date when user submits form
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const date = `${yearSelected}-${monthSelected}-${daySelected}`;
    setDateSelected(date);
  }

 
  return(
    <div className='dates'>
      <h2>Plan your tour now!</h2>
      <form action='submit' onSubmit={handleFormSubmit} className='datesForm'>
        <fieldset>
          <legend>Use the drop down menu to select your launch date.</legend>
              <label htmlFor='month' className='srOnly'>Month: </label>
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


              <label htmlFor='day' className='srOnly'>Day:</label>
              <select name='day' id='day' onChange={handleDaySelected}>
                <PopulateDates month={monthSelected} />
              </select>

              <label htmlFor='year' className='srOnly'>Year:</label>
              <select name='year' id='year' onChange={handleYearSelected}>
                <option value='2022'>2022</option>
                <option value='2023'>2023</option>
                <option value='2024'>2024</option>
              </select>
        </fieldset>
        <div className='asteroidCheck'>
          <ApiCall date={dateSelected}/>
        </div>
      </form>

      

      
      
    </div>
  )
}

export default SelectDates;