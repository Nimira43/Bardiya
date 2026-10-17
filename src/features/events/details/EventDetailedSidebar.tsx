import { users } from "../../../lib/data/sampleData";

export default function EventDetailedSidebar() {
  return (
    <div className='card bg-base-100'>
      <div className='card-title rounded-t justify-center bg-primary py-2 text-white'>
        3 People going
      </div>
      <div className='card-body'>
        <div className='flex flex-col gap-3'>
          <div className='flex gap-3 align-middle items-center'>
            <div className='avatar'>
              <div className='w-16 rounded'>
                <img
                  src={users[0].photoURL}
                  alt='User'
                />
              </div>
            </div>
            <div className='text-2xl'>Bob</div>
          </div>
        </div>
      </div>
    </div>
  )
}