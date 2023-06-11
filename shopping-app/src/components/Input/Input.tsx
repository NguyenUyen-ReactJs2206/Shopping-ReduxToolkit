import type { UseFormRegister, RegisterOptions } from 'react-hook-form'

interface Props {
  type: React.HTMLInputTypeAttribute
  errorMessage?: string
  placeholder?: string
  className: string
  name: string
  // register: UseFormRegister<any>
  rules?: RegisterOptions
  autoComplete?: string
}

export default function Input({ type, errorMessage, placeholder, className, name, rules }: Props) {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className={className}
        // {...register(name, rules)}
      />
      <div className='text-red-600 mt-1 min-h-[1rem] text-sm'>{errorMessage}</div>
    </>
  )
}
