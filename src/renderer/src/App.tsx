import { RouterProvider, createHashRouter } from 'react-router-dom'

import { lazy, useEffect, useState } from 'react'
import SplashScreen from './screens/SplashScreem'

const HomeScreen = lazy(() => import('./screens/HomeScreen'))
const BhajanScreen = lazy(() => import('./screens/BhajanScreen'))
const SongDetailsScreen = lazy(() => import('./screens/BhajanDetailScreen'))
const BibleScreen = lazy(() => import('./screens/BibleScreen'))
function App(): JSX.Element {
  const [showSplashScreen, setShowSplashScreen] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplashScreen(false)
    }, 3000) // Change the delay (5000 ms = 5 seconds) as needed

    return () => clearTimeout(timer)
  }, [])
  const router = createHashRouter([
    { path: '/', element: <HomeScreen /> },
    {
      path: '/bhajan',
      element: <BhajanScreen />
    },
    {
      path: '/song-details',
      element: <SongDetailsScreen />
    },
    {
      path: '/bible',
      element: <BibleScreen />
    }
  ])
  return (
    <div className="h-full  w-full">
      {showSplashScreen ? <SplashScreen /> : <RouterProvider router={router} />}
    </div>
  )
}

export default App
