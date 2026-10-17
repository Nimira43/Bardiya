export default function EventDetailedHeader() {
  return (
    <div className='card bg-base-100'>
      <figure className='h-64 brightness-50 rounded'>
        <img
          src={`/images/categoryImages/drinks.jpg`}
          alt='Event category image'
          className='w-full object-cover'
        />
      </figure>
      <div className='card-body text-white justify-end absolute bottom-0 w-full'>
        <div className='flex justify-between'>
          <div>
            <h2 className='card-title text-4xl'>
              Event Title
            </h2>
            <p>Event Date</p>
            <p>Hosted by Bob</p>
          </div>
          <div className='flex flex-col justify-end'>
            <button className='btn btn-primary'>
              Join Event
            </button>  
          </div>
        </div>
      </div>
    </div>
  )
}