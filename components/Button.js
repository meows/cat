import React from 'react'
import PropTypes from 'prop-types'

// -----------------------------------------------------------------------------
// Component

const Button = ({ text, onClick, disabled = false }) => (
   <button type="button" onClick={onClick} disabled={disabled}>{text}</button>
)

// -----------------------------------------------------------------------------
// Type

Button.PropTypes = {
   text: PropTypes.string.isRequired,
   disabled: PropTypes.bool,
   onClick: PropTypes.func.isRequired,
}

export default Button