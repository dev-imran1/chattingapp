import React from 'react';
import './layout.css'
import { Outlet } from 'react-router-dom';
import { Grid } from '@mui/material';

const RootLayOut = () => {
  return (
    <>
        <div>
    <Grid container>
      <Grid item xs={2}>
        <div className='side_bar'>

        </div>
      </Grid>
      <Grid item xs={10}>
        <Outlet />
      </Grid>
    </Grid>
  </div>
    </>
  )
}

export default RootLayOut