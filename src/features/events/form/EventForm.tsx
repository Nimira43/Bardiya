import { useNavigate, useParams } from 'react-router'
import { users } from '../../../lib/data/sampleData'
import { useAppDispatch, useAppSelector } from '../../../lib/stores/store'
import type { AppEvent } from '../../../lib/types'
import { createEvent, selectEvent, updateEvent } from '../eventSlice'
import { useEffect } from 'react'
import { useForm, type FieldValues } from 'react-hook-form'

export default function EventForm() {
  const navigate = useNavigate()
  const{ id } = useParams<{id: string}>()
  const dispatch = useAppDispatch()
  const selectedEvent = useAppSelector(state => state.event.selectedEvent)
  
  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors,
      isValid
    }  
  } = useForm({
    mode: 'onTouched',
    defaultValues: {
      title: '',
      category: '',
      description: '',
      date: '',
      city: '',
      venue: ''
    }
  })

  useEffect(() => {
    if (id) {
      dispatch(selectEvent(id))

      if (selectedEvent) {
        reset({
          ...selectEvent,
          date: new Date(selectedEvent.date).toISOString().slice(0, 16)
        })
      }
    } else {
      dispatch(selectEvent(null))
    }
  }, [dispatch, id, selectedEvent, reset])
  
  const onSubmit = (data: FieldValues) => {
    if (selectedEvent) {
      dispatch(updateEvent({ ...selectedEvent, ...data }))
      navigate(`/events/${selectedEvent.id}`)
      return
    } else {      
      const id = crypto.randomUUID()
      
      const newEvent = {
        ...data,
        id,
        hostUid: users[0].uid,
        attendees: [{
          id: users[0].uid,
          displayName: users[0].displayName,
          photoURL: users[0].photoURL,
          isHost: true
        }]
      }
      
      dispatch(createEvent(newEvent as AppEvent))
      navigate(`/events/${id}`)
    }
  }
  
  return (
    <div className='card bg-base-100 p-4 flex flex-col gap-3 w-full'>
      <h3 className='text-2xl font-medium text-center text-accent'>
        {selectedEvent ? 'Edit Event' : 'Create Event'}
      </h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col gap-3 w-full'
      >
        <input
          {...register('title', {required: 'Title is required'})}
          type='text'
          className={`
            input input-lg w-full
            ${errors.title
              ? 'input-error'
              : ''
            }
          `}
          placeholder='Event Title'
        />
        {errors.title && (
          <div className='text-error text-sm'>
            {errors.title.message}
          </div>
        )}
        <input
          {...register('category')}
          type='text'
          className='input input-lg w-full'
          placeholder='Category'
        />
        <textarea
          {...register('description')}
          className='textarea textarea-lg w-full'
          placeholder='Description'
        />
        <input
          {...register('date')}
          type='datetime-local'
          className='input input-lg w-full'
          placeholder='Date'
        />
        <input
          {...register('city')}
          type='text'
          className='input input-lg w-full'
          placeholder='City'
        />
        <input
          {...register('venue')}
          type='text'
          className='input input-lg w-full'
          placeholder='Venue'
        />
        <div className='flex justify-end w-full gap-3'>
          <button
            type='button'
            className='btn btn-neutral'
            onClick={() => navigate(-1)}
          >
            Cancel
          </button>
          <button
            disabled={!isValid}
            type='submit'
            className='btn btn-primary'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}