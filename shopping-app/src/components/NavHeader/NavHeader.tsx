export default function NavHeader() {
  return (
    <div className='py-4'>
      <div className='container'>
        <div className='grid grid-cols-12 gap-2'>
          <div className='col-span-12 justify-start sm:col-span-3 '>
            <div className=' mt-3 h-[40px] w-[120px] flex-shrink-0 cursor-pointer '>
              <img
                src='https://laz-img-cdn.alicdn.com/images/ims-web/TB1T7K2d8Cw3KVjSZFuXXcAOpXa.png'
                alt='#'
                className='h-full w-full'
              />
            </div>
          </div>
          <form className='col-span-9 sm:col-span-8'>
            <div className='flex rounded-sm bg-bgFormLogin'>
              <input
                type='text'
                className='flex-grow border-none bg-transparent px-3 py-2 text-black outline-none'
                placeholder='Tìm kiếm trên Lazada'
              />
              <button className='flex-shrink-0 rounded-sm bg-orange px-4 py-3 hover:opacity-90'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='h-6 w-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                  />
                </svg>
              </button>
            </div>
          </form>
          <div className='col-span-3 sm:col-span-1'>
            <div className='m-3 cursor-pointer'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-8 w-8'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
