import { useState } from 'react'
import { Button } from '../ui/button'
import { FullscreenIcon } from 'lucide-react'

interface IProps {
  size: string
  setsize: (size: string) => void
}
const BhajanContol = ({ setsize, size }: IProps): JSX.Element => {
  const [fullScreen, setFullScreen] = useState(false)
  return (
    <div className="flex justify-center gap-5 w-full">
      <Button
        size="sm"
        onClick={() => {
          setFullScreen(!fullScreen)
          if (fullScreen) {
            document.exitFullscreen()
          } else {
            document.documentElement.requestFullscreen()
          }
        }}
      >
        <FullscreenIcon />
      </Button>
      <Button
        onClick={() => {
          const s = size.replace('px', '')
          setsize(`${Number(s) + 2}px`)
        }}
        size="sm"
        className="text-2xl "
      >
        +
      </Button>
      <Button
        onClick={() => {
          const s = size.replace('px', '')
          setsize(`${Number(s) - 2}px`)
        }}
        disabled={size === '32px'}
        size="sm"
        className="text-2xl "
      >
        -
      </Button>
      <Button size="sm" onClick={() => setsize('32px')}>
        Default
      </Button>
    </div>
  )
}

export default BhajanContol
