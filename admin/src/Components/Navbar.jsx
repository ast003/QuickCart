
import navlogo from '../assets/nav-logo.svg'
import navProfile from '../assets/nav-profile.svg'

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-2 border-b border-gray-300">
      <img src={navlogo} className="" alt="Logo" />
      <img src={navProfile} className="" alt="Profile" />
    </div>
  )
}

export default Navbar

