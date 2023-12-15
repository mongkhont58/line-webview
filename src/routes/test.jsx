import logo from '../assets/react.svg';
import liff from '@line/liff';
import { useEffect, useState } from 'react';
import Html5QrcodePlugin from '../components/Html5QrcodePlugin';

function Test() {
  const [pictureUrl, setPictureUrl] = useState(logo);
  const [idToken, setIdToken] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [userId, setUserId] = useState("");
  const [decodedBarcode, setDecodeBarcode] = useState('')
  const [locationAccess, setLocationAccess] = useState({ lat: '', lng: '' })

  useEffect(() => {
    // initLine()
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
      setDisplayName(profile?.displayName ?? '-')
      setPictureUrl(profile?.pictureUrl ?? '-')
      setStatusMessage(profile?.statusMessage ?? '-')
      setUserId(profile?.userId ?? '-')
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

  const [qrCodeData, setQrCodeData] = useState('');
  const handleScan = () => {
    liff.scanCodeV2().then((result) => {
      setQrCodeData(result.value ?? '');
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ textAlign: "center" }}>
        </div>
      </header>
    </div>
  );
}

export default Test;