import { TextField } from '@mui/material'
import React from 'react'

const Input = ({variant, labelText, type, style, name, onChange, value}) => {
  return (
    <TextField onChange={onChange} className={style} label={labelText} value={value} variant={variant} type={type} name={name}/>
  )
}

export default Input