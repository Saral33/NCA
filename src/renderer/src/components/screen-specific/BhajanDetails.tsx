import { changeEnglishNumberToNepali } from '../../lib/utils'

const BhajanDetails = ({
  song,
  num,
  size
}: {
  song: [string, string]
  num: number
  size: string
}): JSX.Element => {
  return (
    <div className="w-full mt-5 ">
      <div style={{ fontSize: size }} className="flex text-[#E0E0E0] justify-center">
        <span className="font-preeti">{changeEnglishNumberToNepali(num)}</span> )
        <div className="flex ml-5  flex-col">
          {song?.map((s) => (
            <div className="font-preeti" key={s}>
              {s}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BhajanDetails
