import React from 'react'

// -----------------------------------------------------------------------------
// Component

const Button = ({ text, disabled, onClick }) => (
   <button type="button" onClick={onClick} disabled={disabled}>{text}</button>
)

export default Button