// SplashScreen.jsx

import logo from '@/renderer/src/assets/logodark.png' // Import your logo image
import { useEffect, useState } from 'react'

const SplashScreen = (): JSX.Element => {
  const [loadingPercentage, setLoadingPercentage] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingPercentage((prevPercentage) => {
        if (prevPercentage >= 100) {
          clearInterval(interval)
          return 100
        }
        return prevPercentage + 1
      })
    }, 1) // Adjust the delay (50ms) to control the loading speed

    return () => clearInterval(interval)
  }, [])
  return (
    <div className="flex h-screen w-full justify-center items-center">
      <div>
        <img className="w-[300px]" src={logo} alt="Logo" />
        <div className="mt-4 text-2xl text-center">Loading... {loadingPercentage}%</div>
      </div>
    </div>
  )
}

export default SplashScreen
