import navlogo from '../assets/logo.png'
import navProfile from '../assets/nav-profile.svg'

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-2 border-b border-gray-300">
      <div className='flex ml-8'>
      <img src={navlogo} className="" alt="Logo" />
      <div>
      <h2 className='text-3xl font-semibold mt-2'>QuickCart</h2>
      <h3 className='text-red-600 ml-4'>Admin Panel</h3>
      </div>
      </div>
      <img src={navProfile} className="" alt="Profile" />
    </div>
  )
}

export default Navbar

