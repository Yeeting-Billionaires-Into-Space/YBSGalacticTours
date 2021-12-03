// Button
import './styles.css'
import { Link } from 'react-router-dom';

const styles = {
    closeButton: 'closeButton'
}

function Button ({ to, text, intent='default' }) {
    const buttonText = intent === styles.closeButton ? "X" : text
    return (
        <Link to={to} className={intent} >{buttonText}</Link>
    )
}

export default Button; 