import { RiLogoutBoxRLine } from 'react-icons/ri'
import { PiCalendarBlank, PiUser } from 'react-icons/pi'
import { useAppDispatch, useAppSelector } from '../../../lib/stores/store'
import { signOut } from '../../../features/account/accountSlice'
import { useNavigate } from 'react-router'

export default function UserMenu() {
  const navigate = useNavigate()
  const user = useAppSelector(state => state.account.user)
  const dispatch = useAppDispatch()
    
  const handleSignOut = () => {
    dispatch(signOut())
    navigate('/')
  }

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
              src={user?.photoURL ||  '/images/user.jpg'}
              alt="User avatar"
            />
          </div>
        </div>
        <span>
          {user?.displayName}
        </span>
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
        <li onClick={handleSignOut}>
          <div className='flex items-center gap-3'>
            <RiLogoutBoxRLine className='size-6' />
            Logout
          </div>
        </li>
      </ul>
    </div>
  )
}