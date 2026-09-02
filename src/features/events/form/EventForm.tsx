type Props = {
  setFormOpen: (isOpen: boolean) => void
}
  
export default function EventForm({setFormOpen}: Props) {
  const onSubmit = (formData: FormData) => {
    const data = Object.fromEntries(formData.entries())
    console.log(data)
  }
  
  return (
    <div className='card bg-base-100 p-4 flewx flex-col gap-3 w-full'>
      <h3 className='text-2xl font-medium text-center text-primary'>
        Create New Event
      </h3>
      <form
        action={onSubmit}
        className='flex flex-col gap-3 w-full'
      >
        <input
          name='title'
          type='text'
          className='input input-lg w-full'
          placeholder='Event Title'
        />
        <input
          name='category'
          type='text'
          className='input input-lg w-full'
          placeholder='Category'
        />
        <textarea
          name='description'
          className='textarea textarea-lg w-full'
          placeholder='Description'
        />
        <input
          name='date'
          type='datetime-local'
          className='input input-lg w-full'
          placeholder='Date'
        />
        <input
          name='city'
          type='text'
          className='input input-lg w-full'
          placeholder='City'
        />
        <input
          name='venue'
          type='text'
          className='input input-lg w-full'
          placeholder='Venue'
        />
        <div className='flex justify-end w-full gap-3'>
          <button
            type='button'
            className='btn btn-neutral'
            onClick={() => setFormOpen(false)}
          >
            Cancel
          </button>
          <button
            type='submit'
            className='btn btn-primary'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}