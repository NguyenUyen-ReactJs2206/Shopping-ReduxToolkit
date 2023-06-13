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
  return (
    <div className='bg-bgFormLogin py-6'>
      <div className='container'>
        <div className='grid grid-cols-12'>
          <div className='col-span-12 md:col-span-10 md:col-start-2 xl:col-span-8 xl:col-start-3 '>
            <div className='flex-row sm:flex sm:justify-between'>
              <div className='text-xl'>Tạo tài khoản Lazada</div>
              <div className='pt-3 text-[10px]'>Bạn đã là thành viên? Đăng nhập tại đây</div>
            </div>
            <form className='my-8 rounded-sm bg-white px-8 py-8 sm:px-24 md:px-6 '>
              <div className='flex-row md:grid md:grid-cols-12'>
                <div className='md:col-span-7'>
                  <div className='md:mr-8'>
                    <div>
                      <label htmlFor='' className='text-[12px]'>
                        Email*
                      </label>
                      <Input
                        name='email'
                        placeholder='Vui lòng nhập email của bạn'
                        type='text'
                        className='mt-2 w-full rounded-sm border border-gray-300 p-2 text-sm outline-emerald-400/50'
                      />
                    </div>
                    <div className='mt-2'>
                      <label htmlFor='' className='text-[12px]'>
                        Mật khẩu*
                      </label>
                      <Input
                        name='password'
                        placeholder='Tối thiểu 8 ký tự với số, chữ cái và ký tự.'
                        type='text'
                        className='mt-2 w-full rounded-sm border border-gray-300 p-2 text-sm outline-emerald-400/50'
                      />
                    </div>
                    <div className='mt-2'>
                      <label htmlFor='' className='text-[12px]'>
                        Nhập lại mật khẩu*
                      </label>
                      <Input
                        name='confirm_password'
                        placeholder='Vui lòng nhập lại mật khẩu của bạn'
                        type='text'
                        className='mt-2 w-full rounded-sm border border-gray-300 p-2 text-sm outline-emerald-400/50'
                      />
                    </div>
                  </div>
                </div>
                <div className='md:col-span-5'>
                  <div className='md:px-2 '>
                    <div>
                      <button className='mt-4 w-full rounded-sm bg-orange py-4 text-center uppercase text-white duration-150 hover:bg-orangeHover'>
                        Đăng ký
                      </button>
                    </div>
                    <div className='my-2 text-[12px]'>
                      Tôi đã đọc và đồng ý với Điều Khoản Sử Dụng và Chính Sách Bảo Mật của Lazada của Lazada, bao gồm
                      quyền thu thập, sử dụng, và tiết lộ dữ liệu cá nhân của tôi theo pháp luật quy định.
                    </div>
                    <div className='py-2 text-[12px]'>Hoặc Đăng ký với</div>
                    <div>
                      <button className='w-full rounded-sm border border-orange py-4  text-center text-orange duration-300 hover:bg-orange/30'>
                        Đăng ký bằng Email
                      </button>
                    </div>
                    <div className='my-4 grid grid-cols-2 gap-x-2'>
                      <div className='col-span-1'>
                        <button className=' w-full rounded-sm bg-blue pb-2 pt-1 text-center text-white'>
                          <span className='mr-6 text-2xl font-bold'>f</span>
                          <span>Facebook</span>
                        </button>
                      </div>
                      <div className='col-span-1'>
                        <button className=' bg-red-900 w-full rounded-sm bg-red pb-2 pt-1 text-center text-white'>
                          <span className=' text-2xl font-bold '>G</span>
                          <span className='mr-5 text-xl font-bold '>+</span>
                          <span>Google</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
