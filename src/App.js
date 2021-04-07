import logo from './logo.svg';
// import './App.css';
import { FetctAPI } from './Action/FetchAPI';
import TableData from './Component/TableData';
import { useSelector, useDispatch } from 'react-redux';
import {fetchApi} from './Action/PassengerAction'
import React, { useEffect } from 'react'
import SwipeableTemporaryDrawer from './Component/SwipeableTemporaryDrawer';

function App() {
  return (
    <div className="App">
      {/* <FetctAPI /> */}
      <TableData/>
      {/* <SwipeableTemporaryDrawer/> */}
    </div>
  );
}

export default App;
