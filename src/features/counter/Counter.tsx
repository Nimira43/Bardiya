import { useAppDispatch, useAppSelector } from '../../lib/stores/store'
import { decrement, increment, incrementByAmount } from './counterSlice'

export default function Counter() {
  const count = useAppSelector(state => state.counter.value) 
  const dispatch = useAppDispatch()

  return (
    <div className='card bg-base-100 shadow flex flex-col gap-4'>
      <div className='stats text-center'>
        <div className='stat'>
          <div className='stat-title text-3xl logo-font mb-1'>
            Bardiya Counter
          </div>
          <div className='state-value text-7xl'>
            {count}
          </div>
        </div>
      </div>
      <div className='flex justify-center gap-4 p-5'>
        <button
          onClick={() => dispatch(decrement())}
          className='btn btn-error flex-1'
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch(increment())}
          className='btn btn-primary flex-1'
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(incrementByAmount(5))}
          className='btn btn-info flex-1'
        >
          Add 5
        </button>
      </div>
    </div>
  )
}