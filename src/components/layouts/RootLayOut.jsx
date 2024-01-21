import React from 'react';
import './layout.css'
import { Outlet } from 'react-router-dom';
import { Grid } from '@mui/material';
import Sidebar from './Sidebar';

const RootLayOut = () => {
  return (
    <>
        <div>
    <Grid container>
      <Grid item xs={1}>
        <Sidebar />
      </Grid>
      <Grid item xs={11}>
        <Outlet />
      </Grid>
    </Grid>
  </div>
    </>
  )
}

export default RootLayOut