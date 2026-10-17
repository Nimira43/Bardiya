import { CalendarIcon, InformationCircleIcon, MapPinIcon } from '@heroicons/react/16/solid'

export default function EventDetailedInfo() {
  return (
    <div className='card bg-base-100'>
      <div className='flex flex-col align-middle'>
        <div className='flex items-center gap-x-3 border-b border-neutral-300 py-3 pl-3'>
          <InformationCircleIcon className='size-8' />
          <span>Event Description</span>
        </div>
        <div className='flex items-center gap-x-3 border-b border-neutral-300 py-3 pl-3'>
          <CalendarIcon className='size-8' />
          <span>Event Date</span>
        </div>
        <div className='flex items-center gap-x-3 py-3 pl-3'>
          <MapPinIcon className='size-8' />
          <span>Event Location</span>
        </div>
      </div>
    </div>
  )
}