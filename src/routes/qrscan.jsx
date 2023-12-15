import liff from '@line/liff';
import { useEffect, useState } from 'react';
import Html5QrcodePlugin from '../components/Html5QrcodePlugin';

function QrScan() {
  const [decodedBarcode, setDecodeBarcode] = useState('')
  const [locationAccess, setLocationAccess] = useState({ lat: '', lng: '' })

  useEffect(() => {
    initLine()
  }, [])

  const logout = () => {
    liff.logout()
    window.location.reload()
  }

  const initLine = () => {
    liff.init({ liffId: '2002051569-0wJggwro' }, () => {
      if (liff.isLoggedIn()) {
        runApp()
      } else {
        liff.login()
      }
    }, err => {
      console.error(err)
    })
  }

  const runApp = () => {
    const idToken = liff.getIDToken()
    setIdToken(idToken)
    liff.getProfile().then(profile => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLocationAccess({ lat: position.coords.latitude, lng: position.coords.longitude })
      })
    }).catch(err => {
      console.error(err)
      logout()
    })
  }

  const onNewScanResult = (decodedText, decodedResult) => {
    console.log('decodedResult', decodedResult);
    // handle decoded results here
    if (decodedText) {
      setDecodeBarcode(decodedText)
    }
  }

  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <Html5QrcodePlugin
          fps={10}
          qrbox={250}
          disableFlip={false}
          qrCodeSuccessCallback={onNewScanResult}
        />
        <p style={{ textAlign: "left", marginLeft: "20%", marginRight: "20%", wordBreak: "break-all" }}><b>Decoded: </b> {decodedBarcode}</p>
      </div>
    </div>
  );
}

export default QrScan;