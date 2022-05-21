import React from 'react'

const Button = ({color,text}) => {
  return <button className={`py-2 px-3 ${color} rounded-sm`}>{text}</button>;
}

export default Button