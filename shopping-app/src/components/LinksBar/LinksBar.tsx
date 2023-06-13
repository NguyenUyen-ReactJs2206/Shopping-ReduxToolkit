import React from 'react'

export default function LinksBar() {
  return (
    <div className='header w-full bg-gray-100 '>
      <div className='container'>
        <div className='flex cursor-pointer justify-end text-center'>
          <div className='px-4 py-2 text-[12px] uppercase  hover:translate-y-[0.2px] hover:text-orange hover:duration-150'>
            <span>Tiết kiệm hơn với ứng dụng</span>
          </div>
          <div className='px-4 py-2 text-[12px]  uppercase hover:translate-y-[0.2px] hover:text-orange hover:duration-150'>
            <span>Bán hàng cùng lazada</span>
          </div>
          <div className='px-4 py-2 text-[12px]  uppercase hover:translate-y-[0.2px] hover:text-orange hover:duration-150'>
            <span>Chắm sóc khách hàng</span>
          </div>
          <div className='px-4 py-2 text-[12px]  uppercase hover:translate-y-[0.2px] hover:text-orange hover:duration-150'>
            <span>Kiểm tra đơn hàng</span>
          </div>
          <div className='px-4 py-2 text-[12px]  uppercase hover:translate-y-[0.2px] hover:text-orange hover:duration-150'>
            <span>Đăng nhập</span>
          </div>
          <div className='px-4 py-2 text-[12px]  uppercase hover:translate-y-[0.2px] hover:text-orange hover:duration-150'>
            <span>Đăng ký</span>
          </div>
          <div className='px-4 py-2 text-[12px]  uppercase hover:translate-y-[0.2px] hover:text-orange hover:duration-150'>
            <span>Change Language</span>
          </div>
        </div>
      </div>
    </div>
  )
}
