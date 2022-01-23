import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MoralisProvider } from "react-moralis"
const serverurl = "https://inmtlgdrn2u9.moralishost.com:2053/server"
const ApiKey = "8PTpuPJlBziISOTScCHGfrKiunyea2t1Cr2PmWhi";

ReactDOM.render(
  <MoralisProvider appId={ApiKey} serverUrl={serverurl}>
    <App />
  </MoralisProvider>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
