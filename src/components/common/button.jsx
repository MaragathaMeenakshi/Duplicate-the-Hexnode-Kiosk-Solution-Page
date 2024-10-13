import React from 'react'
import '../../styles/button.css'
const Button = (props) => {
  return (
    <button className='buttonstyle' style={props.textstyle}>{props.text}</button>
  )
}

export default Button