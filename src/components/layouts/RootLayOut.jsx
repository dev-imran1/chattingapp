import React from 'react';
import './layout.css'
import { Outlet } from 'react-router-dom';
import { Grid } from '@mui/material';
import Sidebar from './Sidebar';

const RootLayOut = () => {
  return (
    <>
        <div>
    <Grid container spacing={8}>
      <Grid item xs={2}>
        <Sidebar />
      </Grid>
      <Grid item xs={10}>
        <div className='outlet_box'>
          <Outlet />
        </div>
      </Grid>
    </Grid>
  </div>
    </>
  )
}

export default RootLayOut