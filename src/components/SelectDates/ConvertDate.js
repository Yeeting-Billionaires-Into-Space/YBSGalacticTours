// converts date as numbers to string to display

function ConvertDates(numberDate){
  // object of months
  const monthObject = {1: 'January', 2: 'February', 3: 'March', 4: 'April', 5: 'May', 6: 'June', 7: 'July', 8: 'August', 9: 'September', 10: 'October', 11: 'November', 12: 'December'};



  // getting values from full date
  const year = numberDate.slice(0, 4);
  let month = numberDate.slice(5, 7);
  if (month[0] === '0'){
    month = month.slice(1);
  }

  const day = numberDate.slice(8);

  
  // get string name of month
  const monthString = monthObject[month];

  // create string date
  const dateString = `${monthString} ${day}, ${year}`;

  return dateString;
}

export default ConvertDates;