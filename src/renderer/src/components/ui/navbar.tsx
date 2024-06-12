import { ChevronLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Navbar = (): JSX.Element => {
  const navigate = useNavigate()
  return (
    <div className="w-full ">
      <div className="container mt-10 mx-auto">
        <ChevronLeft onClick={() => navigate(-1)} className="cursor-pointer " size={44} />
      </div>
    </div>
  )
}

export default Navbar
