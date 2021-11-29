// PlanetComponents
import { Link } from 'react-router-dom';
import Header from "../components/Header";
import "./styles.css";

function PlanetComponents({ header, children }) {


    return (
        <>
            <Header />
            <section className="planetComponent">
                <div>
                    <div className="planetBox">
                    <h1>{header}</h1>
                    <Link to='/travel' className='closeButton'>X</Link>
                    </div>
                    {children}
                </div>
            </section>
        </>
    );
}

export default PlanetComponents;
