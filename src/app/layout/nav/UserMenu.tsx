import { RiLogoutBoxRLine } from 'react-icons/ri'
import { users } from '../../../lib/data/sampleData'
import { PiCalendarBlank, PiUser } from 'react-icons/pi'

export default function UserMenu() {
  return (
    <div className='dropdown dropdown-bottom dropdown-end'>
      <div
        tabIndex={0}
        role='button'
        className='text-lg font-medium flex items-center gap-3 cursor-pointer'
      >
        <div className='avatar'>
          <div className='w-11 rounded-full'>
            <img
              src={users[2].photoURL}
              alt="User avatar"
            />
          </div>
        </div>
        <span>Amanda</span>
      </div>
      <ul
        tabIndex={0}
        className='dropdown-content menu bg-base-100 rounded-box border border-secondary z-1 w-52'
      >
        <li>
          <div className='flex items-center gap-3'>
            <PiUser className='size-6' />
            My Profile
          </div>
        </li>
        <li>
          <div className='flex items-center gap-3'>
            <PiCalendarBlank className='size-6' />
            Create Event
          </div>
        </li>
        <div className='divider my-0' />
        <li>
          <div className='flex items-center gap-3'>
            <RiLogoutBoxRLine className='size-6' />
            Logout
          </div>
        </li>
      </ul>
    </div>
  )
}