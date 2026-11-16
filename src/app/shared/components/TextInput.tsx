import clsx from 'clsx'
import { useController, type FieldValues, type UseControllerProps } from 'react-hook-form'

type Props <T extends FieldValues>= { 
  type?: string
  label: string
} & UseControllerProps<T>

export default function TextInput<T extends FieldValues>(props: Props<T>) {
  const { field, fieldState} = useController({...props})

  return (
    <div className='flex flex-col gap-1 w-full text-left'>
      <label className="floating-label">
        <span>{props.label}</span>
        <input
          {...field}
          value={field.value ?? ''}
          type={props.type}
          className={
            clsx('input input-lg w-full', {
              'input-error': !!fieldState.error,
              'input-success': !fieldState.error && fieldState.isDirty
            })
          }
          placeholder={props.label}
        />
      </label>
      {fieldState.error && (
        <div className='text-error text-sm'>
          {fieldState.error.message}
        </div>
      )}
    </div>
  )
}