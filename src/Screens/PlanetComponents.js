import Button from "../components/Button";
import Header from "../components/Header";
import { useParams } from "react-router";
import "./styles.css";

function PlanetComponents({ header, children }) {


    return (
        <>
            <Header />
            <section className="planetComponent">
                <div>
                    <div className="planetBox">
                    <h1>{header}</h1>
                    <Button intent="closeButton" />
                    </div>
                    {children}
                </div>
            </section>
        </>
    );
}

export default PlanetComponents;
