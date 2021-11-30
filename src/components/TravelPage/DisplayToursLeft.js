// COUNTER to track number of virtual tours
// max 3 per day

function DisplayToursLeft({toursDone=0}) {

  console.log(toursDone)
  const remainingTours = 3 - toursDone;

  return(
    <p className='toursLeft'>You have {remainingTours} tours left today</p>
  )
}

export default DisplayToursLeft;