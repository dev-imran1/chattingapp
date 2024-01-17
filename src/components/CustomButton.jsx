import { Button } from '@mui/material'
import React from 'react'

const CustomButton = ({variant, btnText, styleing, onClick}) => {
  return (
    <Button onClick={onClick} className={styleing} variant={variant}>{btnText}</Button>
  )
}

export default CustomButton