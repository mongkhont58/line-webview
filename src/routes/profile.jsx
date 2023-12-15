import liff from '@line/liff'
import React, { useEffect, useState } from 'react'
import logo from '../assets/react.svg';

function UserProfile() {
  const [pictureUrl, setPictureUrl] = useState(logo);
  const [idToken, setIdToken] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [userId, setUserId] = useState("");

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
        liff.login({ redirectUri: 'https://line-app.justplaybase.com/app-v1/sandbox/profile' })
      }
    }, err => {
      console.error(err)
    })
  }

  const runApp = () => {
    const idToken = liff.getIDToken()
    setIdToken(idToken)
    liff.getProfile().then(profile => {
      setDisplayName(profile?.displayName ?? '-')
      setPictureUrl(profile?.pictureUrl ?? '-')
      setStatusMessage(profile?.statusMessage ?? '-')
      setUserId(profile?.userId ?? '-')
    }).catch(err => {
      console.error(err)
      logout()
    })
  }

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1>Information</h1>
        <hr />
        <img src={pictureUrl} width="200px" height="200px" alt='logo' />
        {/* <p style={{ textAlign: "left", marginLeft: "20%", marginRight: "20%", wordBreak: "break-all" }}><b>id token: </b> {idToken}</p> */}
        <p style={{ textAlign: "left", marginLeft: "20%", marginRight: "20%", wordBreak: "break-all" }}><b>display name: </b> {displayName}</p>
        <p style={{ textAlign: "left", marginLeft: "20%", marginRight: "20%", wordBreak: "break-all" }}><b>status message: </b> {statusMessage}</p>
        <p style={{ textAlign: "left", marginLeft: "20%", marginRight: "20%", wordBreak: "break-all" }}><b>user id: </b> {userId}</p>
      </div>
    </div>
  )
}

export default UserProfile