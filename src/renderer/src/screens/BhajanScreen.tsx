import { useEffect, useState } from 'react'
import BhajanNavbar from '../components/screen-specific/BhajanNavbar'
import Navbar from '../components/ui/navbar'
import { FixedSizeList } from 'react-window'

import { allbalChorus } from '../expressions/balChorus'
import { allBhajans } from '../expressions/bhajanExp'
import { allChorus } from '../expressions/chorus'
import { useNavigate } from 'react-router-dom'

const chorusLength = Object.keys(allChorus).length
const bhajanLength = Object.keys(allBhajans).length
const balCLength = Object.keys(allbalChorus).length
const BhajanScreen = (): JSX.Element => {
  const [val, setVal] = useState<'B' | 'C' | 'BC'>('B')
  const [no, setNo] = useState<number>()
  const [data, setData] = useState(Object.values(allBhajans))
  const navigate = useNavigate()
  useEffect(() => {
    if (val === 'B') {
      setData(Object.values(allBhajans))
    } else if (val === 'C') {
      setData(Object.values(allChorus))
    } else {
      setData(Object.values(allbalChorus))
    }
  }, [val])
  const renderRow = ({ index, style }): JSX.Element => {
    const item = data[index]
    return (
      <div style={style} className=" text-2xl  text-white  w-full ">
        <div
          onClick={() => navigate(`/song-details?type=${val}&no=${index + 1}`)}
          className="py-3 px-4  bg-tertiary-dark cursor-pointer hover:bg-secondary-dark"
        >
          <div className="flex gap-5">
            <span> {index + 1}) </span>
            <span className=" font-preeti  font-bold text-3xl">
              {item[0]
                .replace('!=', '')
                .replace('sf]M', '')
                .replace(/(-[$_|\d|@_]+)/g, '')
                .replace(',', '')
                .replace('.', '')
                .replace('<', '')}
            </span>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="container  mx-auto ">
      <Navbar />
      <div className="mx-5 mt-3">
        <BhajanNavbar
          maximumNumber={val === 'B' ? bhajanLength : val === 'C' ? chorusLength : balCLength}
          no={no}
          setNo={setNo}
          val={val}
          setVal={setVal}
        />

        <div className="mt-20 w-full ">
          <FixedSizeList width={'100%'} itemSize={72} itemCount={data.length} height={500}>
            {renderRow}
          </FixedSizeList>
        </div>
      </div>
    </div>
  )
}

export default BhajanScreen
