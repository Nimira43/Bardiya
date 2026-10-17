export default function EventDetailedChat() {
  return (
    <div className='card bg-base-100'>
      <div className='card-title rounded-t justify-center bg-primary py-2 text-white'>
        Chat about this event
      </div>
      <div className='card-body'>
        <div className='chat chat-start'>
          <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
              <img
                src='/images/user.jpg'
                alt="User"
              />
            </div>
          </div>
          <div className='chat-bubble'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
        </div>
      </div>
    </div>
  )
}