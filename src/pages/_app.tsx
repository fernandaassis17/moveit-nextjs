import '../styles/global.css'

import { ChallengesProvider } from '../contexts/ChallengesContext'
import { useState } from 'react'
import { CountdownProvider } from '../contexts/CountDownContext'

function MyApp({ Component, pageProps }) {

  return (
    <ChallengesProvider>
      <CountdownProvider>
        <Component {...pageProps} />
      </CountdownProvider>
    </ChallengesProvider>
  )
}

export default MyApp
