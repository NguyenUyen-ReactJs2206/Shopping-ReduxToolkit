import { useForm } from 'react-hook-form'

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
          <div className='col-span-8 col-start-3'>
            <div className='flex justify-between'>
              <div className='text-xl'>Chào mừng đến với Lazada. Đăng nhập ngay!</div>
              <div className='pt-4 text-[10px]'> Thành viên mới? Đăng ký tại đây</div>
            </div>
            <form className='my-8 bg-white px-6 py-8'>
              <div className='grid grid-cols-12'>
                <div className='col-span-7'>
                  <div className='mr-8'>
                    <div>
                      <label htmlFor='' className='text-[12px]'>
                        Số điện thoại hoặc email*
                      </label>
                      <input
                        placeholder='Vui lòng nhập điện thoại hoặc email của bạn'
                        type='text'
                        className='mt-2 w-full rounded-sm border border-gray-300 p-2 text-sm text-gray-500 outline-none'
                      />
                    </div>
                    <div className='mt-6'>
                      <label htmlFor='' className='text-[12px]'>
                        Mật khẩu*
                      </label>
                      <input
                        placeholder='Vui lòng nhập mật khẩu của bạn'
                        type='text'
                        className='mt-2 w-full rounded-sm border border-gray-300 p-2 text-sm outline-none'
                      />
                    </div>
                    <div className='mt-5 flex justify-end text-[12px] text-teal-500/80'>Quên mật khẩu?</div>
                  </div>
                </div>
                <div className='col-span-5'>
                  <div className='px-4'>
                    <div>
                      <button className='mt-4 w-full rounded-sm bg-orange py-4 text-center uppercase text-white hover:bg-orangeHover'>
                        Đăng nhập
                      </button>
                    </div>
                    <div className='py-2 text-[12px]'>Hoặc đăng nhập bằng</div>
                    <div>
                      <button className=' w-full rounded-sm bg-blue py-3 text-center text-white'>Facebook</button>
                    </div>
                    <div>
                      <button className=' bg-red-900 mt-3 w-full rounded-sm bg-red py-3 text-center text-white'>
                        Google
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
