// AboutPage
import './styles.css'
import Header from '../Header';
import Footer from '../Footer';

function AboutPage() {
  return (
    
  <>
    <Header />
    <section className='wrapper'>
      <div className='textContainer about'>
        <h1>about</h1>
        <h2>company</h2>
        <p>Connect with our clients! Here at YBS we put the customer in the driver seat. From Earth to space we let you be number 1. See below to see reviews from a select amount of our clients.<span>We assure you that your safety is paramount.</span> </p>
        <h2>meet the team</h2>
          <p>We believe that space travel will one day become as common as airline travel is today. I’m convinced, however, that the true future of space travel does not lie with government agencies — NASA is still obsessed with the idea that the primary purpose of the space program is science — but real progress will come from private companies competing to provide the ultimate adventure ride, and NASA will receive the trickle-down benefits. <span>- Buzz Aldrin</span></p>

      </div>
    </section>
    <Footer />
  </>
  )
}

export default AboutPage;
