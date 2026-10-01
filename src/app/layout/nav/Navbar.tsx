import { NavLink } from 'react-router'

export default function Navbar() {
  return (
    <header className='p-3 w-full fixed top-0 z-50 bg-primary'>
      <div className='flex align-middle items-center px-10 mx-auto gap-6'>
        <div className='max-h-16 text-white flex items-center gap-3 border-r-white border-r-2 pr-6 cursor-pointer'>
          <NavLink
            to='/'
            className='text-2xl logo-font text-white'
          >
            Bardiya
          </NavLink>
        </div>
        <nav className='flex gap-3 my-2 uppercase text-lg text-white'>
          <NavLink
            to='/events'
            className='cursor-pointer'
          >
            Events
          </NavLink>
          <NavLink
            to='/createEvent'
            className='cursor-pointer'
          >
            Create
          </NavLink>
        </nav>
        <div className='flex align-middle ml-auto gap-3'>
          <button className='btn'>
            Login
          </button>
          <button className='btn'>
            Register
          </button>
        </div>
      </div>
    </header>
  )
}