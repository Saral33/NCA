import { useNavigate } from 'react-router-dom'
import Icons from '../components/icons/Icons'

const HomeScreen = (): JSX.Element => {
  const router = useNavigate()
  return (
    <div className="h-screen ">
      <div className="flex justify-center items-center h-full">
        <div className="grid grid-cols-2 gap-10">
          <div
            onClick={() => router('/bhajan')}
            className="p-10 shadow-2xl cursor-pointer hover:bg-secondary-dark transition-all duration-200 flex items-center flex-col justify-center bg-tertiary-dark"
          >
            <Icons types="Bhajan" />
            <p className="text-3xl font-medium mt-5">Bhajan Kitab</p>
          </div>
          <div className="p-10 shadow-2xl relative cursor-pointer hover:bg-secondary-dark transition-all duration-200 flex items-center flex-col justify-center bg-tertiary-dark">
            <Icons types="Bible" />
            <p className="text-3xl font-medium mt-5">Bible</p>
            <div className="bg-red-500 absolute px-4 py-2 text-2xl text-white">Coming Soon</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeScreen
