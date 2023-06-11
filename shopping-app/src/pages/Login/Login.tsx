import { useForm } from 'react-hook-form'
import Input from '../../components/Input'

export default function Login() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm()

  const onSubmit = handleSubmit((data) => {
    console.log(data, 'data')
  })

  return (
    <div className='bg-bgFormLogin py-6'>
      <div className='container'>
        <div className='grid grid-cols-12'>
          <div className='col-span-12 md:col-span-10 md:col-start-2 xl:col-span-8 xl:col-start-3 '>
            <div className='flex-row sm:flex sm:justify-between'>
              <div className='text-xl'>Chào mừng đến với Lazada. Đăng nhập ngay!</div>
              <div className='pt-3 text-[10px]'> Thành viên mới? Đăng ký tại đây</div>
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
                        placeholder='Vui lòng nhập mật khẩu của bạn'
                        type='text'
                        className='mt-2 w-full rounded-sm border border-gray-300 p-2 text-sm outline-emerald-400/50'
                      />
                    </div>
                    <div className='my-3 flex justify-end text-[12px] text-teal-500/80'>Quên mật khẩu?</div>
                  </div>
                </div>
                <div className='md:col-span-5'>
                  <div className='md:px-2 '>
                    <div>
                      <button className='mt-4 w-full rounded-sm bg-orange py-4 text-center uppercase text-white hover:bg-orangeHover'>
                        Đăng nhập
                      </button>
                    </div>
                    <div className='py-2 text-[12px]'>Hoặc đăng nhập bằng</div>
                    <div>
                      <button className=' w-full rounded-sm bg-blue pb-2 pt-1 text-center text-white'>
                        <span className='mr-6 text-2xl font-bold'>f</span>
                        <span>Facebook</span>
                      </button>
                    </div>
                    <div>
                      <button className=' bg-red-900 mt-3 w-full rounded-sm bg-red pb-2 pt-1 text-center text-white'>
                        <span className=' text-2xl font-bold '>G</span>
                        <span className='mr-5 text-xl font-bold '>+</span>
                        <span>Google</span>
                      </button>
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
