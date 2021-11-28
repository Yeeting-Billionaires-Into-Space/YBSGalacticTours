// SelectDates

import { useState, useEffect } from 'react';





function SelectDates({ planet }){
  // array of months with 30 days
  const monthsWith30Days = ['09', '04', '06', '11'];
  let content = [];
  
  // initialize state for month thats user selects from dropdown
  const [ userMonthSelected, setUserMonthSelected] = useState('01');

  const [days, setDays] = useState("");

  // when state of month selected by user changes call getDates function
  useEffect(() => {
    getDates(userMonthSelected);
  }, [userMonthSelected])

  // when state of days changes, call populateDateSelected function
  useEffect(() => {
    populateDateSelect(days);
    console.log("this state of days inside useEffect popultateDateSelected", days)
  }, [days])


  // handle event for user select of dropdown
  const handleUserMonthSelect = (event) => {
    content = [];
    console.log(event.target.value)
    setUserMonthSelected(event.target.value) 
  }
  
  // function takes month selected by user and determines number of days the day select should have
  const getDates = (month) => {
    console.log("this is month in getDates", month)
    if ( month === '02'){
      setDays(28);
    }else if (monthsWith30Days.includes(month)){
      setDays(30);
    }else {
      setDays(31);
    }
    console.log("number of days inside getDates state",days)
  }
    

  // function populates an array with the number of days that will be used to populate teh day select
  function populateDateSelect(numberOfDays) {
    for (let index = 1; index < numberOfDays + 1; index ++){
        content.push(index);
      }
      console.log(content)
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
                <select name="day" id="day"  >
                  <option value="0" disabled>Choose one</option>
                  {
                    
                    // NOTE: This part below is not working. It is not mapping through the array or rendering anything 

                    content.map((day) => {
                      console.log(day);
                      return(
                       
                        <option value={day}>{day}</option>
                   
                      )
                    })
                  }
                
                </select>

          </fieldset>
        </form>
      </div>
    </div>
  )
}

export default SelectDates;