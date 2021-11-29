// Button
import './styles.css'

const styles = {
    closeButton: 'closeButton'
}


function Button ({onClick, text, type = 'button', intent='default'}) {
    const buttonText = intent === styles.closeButton ? "X" : text
    return (
        <button type={type} className={intent} onClick={onClick} >{buttonText}</button>
    )
}

export default Button 