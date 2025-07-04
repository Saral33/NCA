import { useSearchParams } from 'react-router-dom'
import Navbar from '../components/ui/navbar'

import { allbalChorus } from '../expressions/balChorus'
import { allBhajans } from '../expressions/bhajanExp'
import { allChorus } from '../expressions/chorus'
import BhajanDetails from '../components/screen-specific/BhajanDetails'
import { useState } from 'react'
import BhajanContol from '../components/screen-specific/BhajanContol'

const BhajanDetailScreen = (): JSX.Element => {
  const [searchParams] = useSearchParams()
  const type = searchParams.get('type')
  const number = searchParams.get('no')
  const [size, setSize] = useState('32px')

  return (
    <div className="container  mx-auto ">
      <Navbar />
      <div className="mx-5 ">
        <div className="absolute bottom-5 right-3 ">
          <BhajanContol setsize={setSize} size={size} />
        </div>

        {type === 'B' ? (
          <BhajanDetails
            size={size}
            num={Number(number)}
            song={allBhajans[`${type}${number}`] || []}
          />
        ) : type === 'C' ? (
          <BhajanDetails
            size={size}
            num={Number(number)}
            song={allChorus[`${type}${number}`] || []}
          />
        ) : (
          <BhajanDetails
            size={size}
            num={Number(number)}
            song={allbalChorus[`${type}${number}`] || []}
          />
        )}
      </div>
    </div>
  )
}

export default BhajanDetailScreen
