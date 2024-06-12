import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/renderer/src/components/ui/select'

import { Button } from '../ui/button'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

type TProps = {
  val: 'B' | 'C' | 'BC'
  setVal: (e: TProps['val']) => void
  no?: number
  setNo: (e: number) => void
  maximumNumber: number
}
const BhajanNavbar = ({ val, setVal, no, setNo, maximumNumber }: TProps): JSX.Element => {
  const [error, setError] = useState('')
  const navigate = useNavigate()
  useEffect(() => {
    if (no && no > maximumNumber) {
      setError('Maximum limit is only' + ' ' + maximumNumber)
    } else {
      setError('')
    }

    ;(): void => {
      return setError('')
    }
  }, [no])

  const routeHandler = (): void => {
    if (no) {
      return navigate(`/song-details?type=${val}&no=${no}`)
    }
  }
  return (
    <div className="flex justify-center  gap-5">
      <Select value={val} onValueChange={(e: 'B' | 'C' | 'BC') => setVal(e)}>
        <SelectTrigger className="w-[120px]">
          <SelectValue placeholder="Select Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="B">Bhajan</SelectItem>
            <SelectItem value="C">Chorus</SelectItem>
            <SelectItem value="BC">Bal Chorus</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <div className="h-full flex flex-col">
        <input
          value={no}
          onChange={(e) => setNo(Number(e.target.value))}
          placeholder="Number"
          min={1}
          type="number"
          className=" bg-tertiary-dark h-10 border w-28  border-border-dark rounded-md outline-none px-4"
        />
        <span className="text-red-500 text-[10px] mt-1">{error && error}</span>
      </div>

      <Button onClick={routeHandler}>Search</Button>
    </div>
  )
}

export default BhajanNavbar
