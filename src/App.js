import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import { Button, Box, Card, CardContent, Typography } from '@material-ui/core';

const App = () => {
  const [getTime, setTime] = useState(0);
  const [getTimer, setTimer] = useState(false);

  const startHandler = () => {
    runTime();
    setTimer(setInterval(runTime, 1000));
  }
  const clearHandler = () => setTime(0);

  const stopHandler = () => {
    clearInterval(getTimer);
  }

  const runTime = () => {
    console.log(getTime);
    return setTime(prevTime => prevTime + 1);
  }

  return (
    <div>
      <Box display="flex" flexDirection="column" alignContent="center" alignItems="center" boxShadow={6} style={{
        width: "400px",
        height: "400px",
        marginLeft: "600px",
        marginTop: "50px",
        borderRadius: 6,
        boxshadow: "5px 10px"

      }}>

        <Typography
          style={{ color: "#3d3110", marginTop: "50px" }}
          variant="h4" align="center" color="textSecondary" >StopWatch</Typography>
        <Typography
          style={{ color: "#3d3110", marginTop: "30px" }}
          variant="h4" align="center" color="textSecondary" >{getTime}</Typography>
        <Button style={{
          background: 'linear-gradient(45deg, #3d7d4c 30%, #16c73f 90%)',
          borderRadius: 3,
          border: 0,
          color: 'white',
          height: 48,
          width: 150,

          marginTop: "50px",
          // marginLeft: "50px",
          padding: '0 30px',
          boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
        }} onClick={startHandler} color="primary" variant="contained"  >Start </Button>
        <Button style={{
          background: 'linear-gradient(45deg, #e04941 30%, #5c0a06 90%)'
          ,
          borderRadius: 3,
          border: 0,
          color: 'white',
          height: 48,
          width: 150,
          marginTop: "10px",
          // marginLeft: "80px",
          padding: '0 30px',
          boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
        }} onClick={stopHandler} color="primary" variant="contained" >Stop </Button>
        <Button style={{
          background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
          borderRadius: 3,
          border: 0,
          color: 'white',
          height: 48,
          width: 150,
          marginTop: "10px",
          // marginLeft: "140px",
          padding: '0 30px',
          boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
        }} onClick={clearHandler} color="primary" variant="contained" >clear </Button>

      </Box>
    </div >

  )
}

export default App;