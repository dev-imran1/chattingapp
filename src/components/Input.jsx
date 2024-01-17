import { TextField } from '@mui/material'
import React from 'react'

const Input = ({variant, labelText, type, style, name, onChange}) => {
  return (
    <TextField onChange={onChange} className={style} label={labelText} variant={variant} type={type} name={name}/>
  )
}

export default Input