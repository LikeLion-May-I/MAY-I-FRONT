// import Head from 'next/head'
// import '../styles/globals.css'

// function MyApp({ Component, pageProps }) {
//   const [showChild, setShowChild] = useState(false)
//   useEffect(() => {
//     setShowChild(true)
//   }, [])

//   if (!showChild) {
//     return null
//   }

//   return (
//     <>
//       <Head>
//         <title>May I</title>
//       </Head>
//       <Component {...pageProps} />
//     </>
//   )
// }

// export default MyApp
import '../styles/globals.css'
import { useState, useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false)
  useEffect(() => {
    setShowChild(true)
  }, [])

  if (!showChild) {
    return null
  }
  return (
    <div>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
