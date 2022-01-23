
import Qrscan from "./Qrscan.js"
import ORg from './QRgenerat.js'
import React from "react";
import { useMoralis } from "react-moralis";
import {Button}from "@mui/material";
	 import Moralis from "moralis"
function App() {
  const { authenticate, isAuthenticated, user } = useMoralis();


    return (
      <div>
               <Button variant="contained" color="primary" onClick={() => authenticate()}>Authenticate</Button>
    		 <ORg/>
       <Qrscan/>

      </div>
   	);



}

export default App;
