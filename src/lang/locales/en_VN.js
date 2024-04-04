import vnLangSale from './Personal/Sale/vn';
import vnLangOrder from './Personal/Order/vn';

const btn = {
  'btn.confirm': 'Xác nhận',
  'btn.update': 'Cập nhật',
  'btn.close': 'Đóng',
  'btn.back': 'Trở lại',
  'btn.yes': 'Đồng ý',
  'btn.cancel': 'Hủy',
  'btn.save': 'Lưu',
  'btn.finish': 'Hoàn thành',
  'btn.get-price': 'Nhận báo giá',
  'btn.transport-order': 'Đẩy đơn ',
  'btn.save-config': 'Lưu cấu hình',
  'btn.claimPermission': 'Xin quyền',
  'btn.accept': 'Duyệt',
  'btn.add': 'Thêm',
  'btn.skip': 'Bỏ qua',
};

const notfound = {
  'notfound.helmet.title': 'Không tìm thấy trang',
  'notfound.error-occurred': 'Rất tiếc... có vẻ như đã xảy ra lỗi!',
  'notfound.error-code': 'Mã lỗi',
  'notfound.back-home': 'Quay lại trang chủ',
};
const common = {
  'common.notice': 'Thông báo',
};
const usLangLib = {
  ...btn,
  ...notfound,
  ...vnLangSale,
  ...vnLangOrder,
  ...common,

};

export default usLangLib;
