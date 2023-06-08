import { Link } from 'react-router-dom'

export default function RegisterHeader() {
  return (
    <div className='header w-full bg-gray-100 '>
      <div className='container'>
        <div className='flex cursor-pointer justify-end text-center'>
          <div className='px-4 py-2 text-[12px]  uppercase hover:translate-y-[0.2px] hover:text-orange'>
            <span>Tiết kiệm hơn với ứng dụng</span>
          </div>
          <div className='px-4 py-2 text-[12px]  uppercase hover:translate-y-[0.2px] hover:text-orange'>
            <span>Bán hàng cùng lazada</span>
          </div>
          <div className='px-4 py-2 text-[12px]  uppercase hover:translate-y-[0.2px] hover:text-orange'>
            <span>Chắm sóc khách hàng</span>
          </div>
          <div className='px-4 py-2 text-[12px]  uppercase hover:translate-y-[0.2px] hover:text-orange'>
            <span>Kiểm tra đơn hàng</span>
          </div>
          <div className='px-4 py-2 text-[12px]  uppercase hover:translate-y-[0.2px] hover:text-orange'>
            <span>Đăng nhập</span>
          </div>
          <div className='px-4 py-2 text-[12px]  uppercase hover:translate-y-[0.2px] hover:text-orange'>
            <span>Đăng ký</span>
          </div>
          <div className='px-4 py-2 text-[12px]  uppercase hover:translate-y-[0.2px] hover:text-orange'>
            <span>Change Language</span>
          </div>
        </div>
      </div>
    </div>
  )
}
