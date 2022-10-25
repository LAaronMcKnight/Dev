import PropTypes from 'prop-types'

const Button = ({ color, text, onClick, buttonWidth }) => {

  return <button onClick={onClick} style={{backgroundColor: color, width: buttonWidth}} className='btn'>{text}</button>
}

Button.defaultProps = {
  color: 'goldenrod',
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button