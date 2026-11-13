import clsx from 'clsx'
import type { FieldErrors, FieldValues, Path, RegisterOptions, UseFormRegister } from 'react-hook-form'

type Props <T extends FieldValues>= {
  register: UseFormRegister<T>
  name: Path<T>
  errors: FieldErrors<T>
  options?: RegisterOptions<T> 
  type?: string
  label: string
}

export default function UncontrolledInput<T extends FieldValues>({
  register,
  name,
  errors,
  options,
  type = 'text',
  label
}: Props<T>) {
  return (
    <div className='flex flex-col gap-1 w-full text-left'>
      <label className="floating-label">
        <span>{label}</span>
        <input
          {...register(name, options)}
          type={type}
          className={
            clsx('input input-lg w-full', {
              'input-error': errors[name]
            })
          }
          placeholder={label}
        />
      </label>
      {errors.title && (
        <div className='text-error text-sm'>
          {errors[name]?.message as string}
        </div>
      )}
    </div>
  )
}