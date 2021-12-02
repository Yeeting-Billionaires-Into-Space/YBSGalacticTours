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
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi veritatis dolor ex. Eos alias illo possimus ut tempore, nihil repudiandae!</p>

      </div>
    </section>
    <div className='aboutFooter'>
      <Footer />
    </div>
  </>
  )
}

export default AboutPage;
