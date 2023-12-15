import React, { useEffect } from 'react'

function LoadScreen() {

  return (
    <div>loading: {window.location.origin}{window.location.pathname}</div>
  )
}

export default LoadScreen