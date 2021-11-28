// Button
import './styles.css'

function Button ({onClick, text, type = 'button'}) {
    return (
        <button type={type} className='button' onClick={onClick}>{text}</button>
    )
}

export default Button 