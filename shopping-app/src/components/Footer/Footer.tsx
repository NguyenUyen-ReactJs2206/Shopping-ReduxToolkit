export default function Footer() {
  return (
    <div className='bg-bgFooter'>
      <div className='container py-10'>
        <div className='grid grid-cols-12'>
          <div className='col-span-3 text-textFooter'>
            <h3>LIÊN HỆ VỚI LAZADA</h3>
            <ul className='mt-2 cursor-pointer text-sm leading-4'>
              <li className='hover:underline'>Hotline & Chat trực tuyến (24/7)</li>
              <li className='hover:underline'>Trung tâm hỗ trợ</li>
              <li className='hover:underline'>Hướng dẫn đặt hàng</li>
              <li className='hover:underline'>Giao hàng & Nhận hàng</li>
              <li className='hover:underline'>Chính sách hàng nhập khẩu</li>
              <li className='hover:underline'>Hướng dẫn đổi trả hàng</li>
            </ul>
          </div>
          <div className='col-span-3 text-textFooter'>
            <h3>LAZADA VIỆT NAM</h3>
            <ul className='mt-2 cursor-pointer text-sm leading-4'>
              <li className='text-textFooterLi hover:underline'>Tất cả danh mục</li>
              <li className='hover:underline'>Về Lazada Việt Nam</li>
              <li className='hover:underline'>Bán hàng cùng Lazada</li>
              <li className='hover:underline'>Chương trình Lazada Afﬁliate</li>
              <li className='hover:underline'>Tuyển dụng</li>
              <li className='hover:underline'>Điều khoản sử dụng</li>
              <li className='hover:underline'>Chính sách bảo mật</li>
              <li className='hover:underline'>Báo chí</li>
              <li className='hover:underline'>Bảo vệ quyền sở hữu trí tuệ</li>
              <li className='hover:underline'>Quy chế hoạt động sàn Lazada</li>
              <li className='hover:underline'>Quy trình giải quyết tranh chấp, khiếu nại</li>
            </ul>
          </div>
          <div className='col-span-6 text-textFooter'>
            <div className='flex'>
              <div className='flex w-[300px] py-4'>
                <div className='h-[50px] w-[50px] flex-shrink-0 rounded-md'>
                  <img
                    src='https://lzd-img-global.slatic.net/g/tps/tfs/TB1iTziekWE3KVjSZSyXXXocXXa-42-42.png'
                    alt='img'
                  />
                </div>
                <div className='px-2'>
                  <div className='text-md text-orange-500'>Go where your heart beats</div>
                  <div className='text-md'>Tải App Lazada</div>
                </div>
              </div>
              <div className='flex flex-wrap py-4'>
                <div className='h-[60px] w-[140px] cursor-pointer rounded-sm pl-2'>
                  <img
                    src='https://upload.wikimedia.org/wikipedia/commons/5/5d/Available_on_the_App_Store_%28black%29.png'
                    alt='#'
                  />
                </div>
                <div className='h-[60px] w-[140px] cursor-pointer rounded-sm pl-2'>
                  <img src='https://www.fcsok.org/wp-content/uploads/2020/04/get-it-on-google-play-badge.png' alt='#' />
                </div>
                <div className='h-[60px] w-[140px] cursor-pointer rounded-sm pl-2'>
                  <img src='https://news.ebscer.com/wp-content/uploads/2022/01/Huawei.png' alt='#' />
                </div>
              </div>
            </div>
            <h4>CÔNG TY TNHH RECESS</h4>
            <div className='text-[12px]'>
              Giấy CNĐKDN: 0308808576 – Ngày cấp: 06/5/2009, được sửa đổi lần thứ 19 ngày 15/8/2019.
            </div>
            <div className='text-[12px]'> Cơ quan cấp: Phòng Đăng ký kinh doanh – Sở kế hoạch và Đầu tư TP.HCM</div>
            <div className='text-[12px]'>
              Địa chỉ đăng ký kinh doanh: Tầng 19, Tòa nhà Saigon Centre – Tháp 2, 67 Lê Lợi, Phường Bến Nghé, Quận 1,
              Tp. Hồ Chí Minh, Việt Nam.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
