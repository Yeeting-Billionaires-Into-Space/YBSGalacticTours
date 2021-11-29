// SelectDates
import { Link } from 'react-router-dom';
import { useState } from 'react';
import PopulateDates from './PopulateDates';
import ApiCall from './ApiCall';


function SelectDates({ planet }){
  // initialize state for user selections from dropdown
  const [ monthSelected, setMonthSelected] = useState('01');
  const [ daySelected, setDaySelected ] = useState('01');
  const [ yearSelected, setYearSelected ] = useState('2022');
  const [ dateSelected, setDateSelected ] = useState('2022-01-01');
  const [ buttonText, setButtonText ] = useState('Book Trip');
  const [ buttonDisabled, setButtonDisabled ] = useState(false);

  // handle events for user selections of dropdowns
  const handleUserMonthSelect = (event) => {
    console.log('month', event.target.value)
    setMonthSelected(event.target.value) 
  }

  const handleDaySelected = (event) => {
    console.log('day', event.target.value)
    setDaySelected(event.target.value);
  }

  const handleYearSelected = (event) => {
    console.log('year', event.target.value)
    setYearSelected(event.target.value)
  }

  // set state for date when user submits form
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const date = `${yearSelected}-${monthSelected}-${daySelected}`;
    setDateSelected(date);

    console.log(`year:${yearSelected}  month:${monthSelected}  day:${daySelected}   date: ${date}  `)
  }

  // on button click text will change and button is disabled
  const handleButtonChange = () => {
    setButtonText('Booked');
    setButtonDisabled(true);
  }

     
  return(
    <div>
      <div className='datesTitle'>
        <h1>{planet}</h1>
        <button>X</button>
      </div>
      <div className='dates'>
        <h2>Plan your tour now!</h2>
        <form action='submit' onSubmit={handleFormSubmit}>
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

                <label htmlFor='day'>Day:</label>
                <select name='day' id='day' onChange={handleDaySelected}>
                  <PopulateDates month={monthSelected} />
                </select>

                <label htmlFor='year'>Year:</label>
                <select name='year' id='year' onChange={handleYearSelected}>
                  <option value='2022'>2022</option>
                  <option value='2023'>2023</option>
                  <option value='2024'>2024</option>
                </select>
          </fieldset>
          <button className='default'>Check date</button>
        </form>

        <ApiCall date={dateSelected}/>

        <button className='default' onClick={handleButtonChange} disabled={buttonDisabled} >{buttonText}</button>
       
      </div>
    </div>
  )
}

export default SelectDates;