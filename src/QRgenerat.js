
import { Container,CardContent,Card,Grid,Button,TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import QRcode from 'qrcode'
import {useRef, useState} from 'react'
import QrReader from 'react-qr-reader';
import { useMoralis } from "react-moralis";
function ORg() {

  const { authenticate, isAuthenticated, user } = useMoralis();


  const classes = useStyles()
  const [userAddress, setUserAddress] = useState(null);
const [imageUrl, setimagUrl] = useState("");
const [scanResult, setscanResult] = useState(null);
const qrRef =useRef(null);
  const generateQrCode =  async ()=>{
    try {
if(user){	const res = await QRcode.toDataURL(user.get('ethAddress'));
      setimagUrl(res);
	console.log(user.get("ethAddress"));

}
else alert("Please connect to your wallate")
	    } catch (error) {
      console.log(error)
    }
  }
  const handleErrorFile = (error)=>{
    console.log(error)
  }
  const handleScanFile = (result)=>{
if(result){
setscanResult(result)
}


  }
const scanQrCode = ()=>{
  qrRef.current.openImageDialog();
}

  return (
    <div >
        <Container className={ classes.conatiner  }>
            <Card>
           <h2 className = {classes.title} > Generate QR code</h2>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
              
                 

                    <Button className={classes.btn} variant="contained"
                      color="primary" onClick={generateQrCode}>Generate your Address QR Code</Button>
                    <br />
                    <br />
                    <br />
                    {imageUrl ? (

                      <a href={imageUrl} download>
                        <img src={imageUrl} alt="img" />
                      </a>) : null}
                      {imageUrl?
                       <p>Click on Image</p> :""
                      }
                  </Grid>
                </Grid>
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
    marginBottom: 20
  }
  ,

}));
export default ORg;
