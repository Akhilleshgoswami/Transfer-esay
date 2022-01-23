import { Container,CardContent,Card,Grid,Button,TextField} from '@mui/material';
import { makeStyles } from '@mui/styles';
import {useRef, useState} from 'react'
import QrReader from 'react-qr-reader';
 import Moralis from "moralis"
import { useMoralis } from "react-moralis";

function QRscan() {

  const { authenticate, isAuthenticated, user } = useMoralis();
  const classes = useStyles()
  const [scanResult, setscanResult] = useState(null);
  const qrRef =useRef(null);
 const [useramount,setUseramount] = useState(null);
const handleErrorWebCam = (er)=>{
console.log(er)
}
const handleScanWebCam = (result)=>{
  if (result) {
   console.log(result)
   setscanResult(result);
  }}
  // sending 0.5 ETH
  const sendMoney = async ()=>{
	try{
 if(isAuthenticated){
const options = {type: "native", amount: Moralis.Units.ETH(useramount), receiver:scanResult}
let result = await Moralis.transfer(options)

 }
	}catch(error){console.log(error)}
// sending 0.5 ETH
  }


  return (
    <div className={classes.conatiner} >
        <Container className={ classes.conatiner  }>
            <Card>
           <h2 className = {classes.title} > Scan QR code</h2>
              <CardContent>
                <Grid container spacing={2}>

                  <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                  <QrReader
                      delay={300}
                      style={{ width: '100%' }}
                      onError={handleErrorWebCam}
                      onScan={handleScanWebCam}
                    />
	                <h3>Reciver Address : {scanResult}</h3>
                  </Grid>
                    
                </Grid>
                <TextField label="Enter Token value" onChange={(e) => setUseramount(e.target.value)} />
                <Button className={classes.p} variant="contained"
                      color="primary"onClick={sendMoney}>Send Token</Button>
              </CardContent>
            </Card>
          </Container>
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  conatiner: {
    marginTop: 10
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#3f51b5',
    color: '#fff',
    padding: 20
  },
    
  btn: {
    marginTop: 10 ,
    marginBottom: 20,

  }
  ,
  p:{
    padding:10,
    margin:10,
  }
}));
export default QRscan;
