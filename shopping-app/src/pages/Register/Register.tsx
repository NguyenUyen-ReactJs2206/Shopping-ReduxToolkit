import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { getRules } from '../../utils/rules'
import Input from '../../components/Input'

interface FormData {
  email: string
  password: string
  confirm_password: string
}
export default function Register() {
  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors }
  } = useForm<FormData>()

  const rules = getRules(getValues)

  const onSubmit = handleSubmit(
    (data) => {
      // console.log(data, 'data')
    },
    (data) => {
      const password = getValues('password')
      console.log(password)
    }
  )

  const value = watch()
  console.log(value)
  return <div className='bg-orange'>Register</div>
}
