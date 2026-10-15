import img01HomeHero from "../../../assets/images/projects/dream-cinema/01-home-hero.webp";
import img02NowShowing from "../../../assets/images/projects/dream-cinema/02-now-showing.webp";
import img03MovieDetail from "../../../assets/images/projects/dream-cinema/03-movie-detail.webp";
import img04Showtimes from "../../../assets/images/projects/dream-cinema/04-showtimes.webp";
import img05SeatScreen from "../../../assets/images/projects/dream-cinema/05-seat-screen.webp";
import img06SeatSelected from "../../../assets/images/projects/dream-cinema/06-seat-selected.webp";
import img07Concessions from "../../../assets/images/projects/dream-cinema/07-concessions-food.webp";
import img08Payment from "../../../assets/images/projects/dream-cinema/08-payment-checkout.webp";
import img09VietQR from "../../../assets/images/projects/dream-cinema/09-vietqr-modal.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Dream Cinema",
  theme: "dark",
  tags: ["react", "nodejs", "mongodb", "design"],
  live: "https://datn-frontend-weld.vercel.app/",
  liveLabel: "Xem thực tế",
  components: [
    {
      type: "text",
      props: {
        title: "Định Vị Dự Án & Không Gian Điện Ảnh Số",
        text: "Dream Cinema là nền tảng web ứng dụng đặt vé xem phim trực tuyến full-stack cao cấp, được thiết kế theo phong cách Stitch Dark Luxury Cinema đồng bộ từ trải nghiệm khám phá phim cho đến toàn bộ quy trình đặt vé và thanh toán tự động. Dự án giải quyết triệt để sự cồng kềnh, phân mảnh của các trang web rạp chiếu truyền thống bằng một luồng tương tác mượt mà chuẩn 60fps: hiển thị trực quan trailer phim độ nét cao, sơ đồ phòng chiếu cong vòm sinh động, cơ chế khóa ghế thời gian thực khi chọn chỗ và thanh toán trực tuyến đa kênh (VietQR, MoMo, VNPAY).",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: img01HomeHero,
        alt: "Giao diện trang chủ Dream Cinema phong cách điện ảnh Dark Luxury",
        caption: "Trang chủ & Hero Banner điện ảnh với thanh điều hướng nổi và tiện ích đặt vé nhanh",
        originalRatio: true,
      },
    },
    {
      type: "text",
      props: {
        title: "Hệ Thống Danh Mục Phim & Bộ Lọc Đa Định Dạng",
        text: "Hệ sinh thái phim đang chiếu và sắp chiếu được cấu trúc phân loại linh hoạt theo ngày, thể loại và định dạng rạp cao cấp như 2D Digital, 3D, IMAX Laser, 4DX và ScreenX. Người xem có thể tìm kiếm nhanh, xem trailer chuẩn HD, kiểm tra bảng phân loại độ tuổi điện ảnh và truy cập trực tiếp vào lịch chiếu theo từng cụm rạp.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: img02NowShowing,
        alt: "Danh sách phim đang chiếu với bộ lọc định dạng",
        caption: "Khu vực phim đang chiếu với bộ lọc định dạng phòng chiếu và nhãn kiểm duyệt độ tuổi",
        originalRatio: true,
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: img03MovieDetail,
        alt: "Chi tiết phim và thông tin đánh giá điện ảnh",
        caption: "Bảng chi tiết thông tin phim, trailer chuẩn HD, đạo diễn, diễn viên và xếp hạng khán giả",
        originalRatio: true,
      },
    },
    {
      type: "text",
      props: {
        title: "Lịch Chiếu Thông Minh Đồng Bộ Đa Cụm Rạp",
        text: "Hệ thống lịch chiếu liên kết thời gian thực giữa các cụm rạp tại Hà Nội, TP. Hồ Chí Minh và Đà Nẵng. Khách hàng dễ dàng tra cứu suất chiếu theo ngày trong tuần, phòng chiếu tiêu chuẩn và kiểm tra số lượng ghế còn trống trước khi đặt vé.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: img04Showtimes,
        alt: "Lịch chiếu phim thông minh theo ngày và cụm rạp",
        caption: "Lịch chiếu phim thông minh theo ngày, khung giờ và định dạng phòng chiếu",
        originalRatio: true,
      },
    },
    {
      type: "text",
      props: {
        title: "Màn Hình Cong Stitch Cinema Arc & Bộ Đếm Khóa Ghế 140s",
        text: "Màn hình cong vòm SVG mô phỏng không gian rạp chiếu thực tế với luồng ánh sáng ambient chiếu rọi từ màn ảnh. Sơ đồ ghế hỗ trợ phân hạng trực quan giữa Ghế Thường (Standard) và Ghế VIP, kết hợp bộ đếm giữ ghế 140 giây tránh đặt trùng vé và sidebar cập nhật giá tự động theo thời gian thực.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: img05SeatScreen,
        alt: "Phòng chiếu màn hình cong điện ảnh",
        caption: "Sơ đồ phòng chiếu với màn hình cong phát sáng và bảng chú thích phân hạng ghế",
        originalRatio: true,
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: img06SeatSelected,
        alt: "Chọn ghế và tóm tắt vé theo thời gian thực",
        caption: "Tương tác chọn ghế trực quan, bộ đếm giữ vé 140s và sidebar cập nhật giá thời gian thực",
        originalRatio: true,
      },
    },
    {
      type: "text",
      props: {
        title: "Menu Bắp Nước & Dây Chuyền Thanh Toán Tối Ưu",
        text: "Tích hợp menu combo bắp nước với bộ đếm stepper thông minh, nút bỏ qua nhanh (Skip to Payment) và cổng thanh toán tự động hỗ trợ VietQR MBBank, ví MoMo và thẻ ATM/VNPAY mang lại trải nghiệm mua vé trọn vẹn dưới 60 giây.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: img07Concessions,
        alt: "Menu bắp nước và combo ưu đãi",
        caption: "Menu combo bắp nước với kiểm soát số lượng tối đa trên mỗi vé và nút chuyển tiếp nhanh",
        originalRatio: true,
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: img08Payment,
        alt: "Trang thanh toán vé trực tuyến",
        caption: "Giao diện thanh toán bảo mật với tóm tắt vé điện tử và các phương thức thanh toán phổ biến",
        originalRatio: true,
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: img09VietQR,
        alt: "Hộp thoại quét mã VietQR MBBank tự động",
        caption: "Hộp thoại VietQR MBBank tự động sinh mã theo đơn hàng kèm tính năng sao chép 1 chạm",
        originalRatio: true,
      },
    },
    {
      type: "list",
      props: {
        title: "Các Giải Pháp Kỹ Thuật & Kiến Trúc Hệ Thống Nổi Bật",
        items: [
          "<strong>Kiến Trúc Frontend Hiệu Năng Cao:</strong> Xây dựng trên <strong>React 18 + Vite + TypeScript</strong>, tối ưu re-render và tải trang ban đầu dưới 1 giây.",
          "<strong>Hệ Thống Backend RESTful:</strong> Nền tảng <strong>Node.js & Express API</strong> theo mô hình MVC module hóa, bảo mật CORS, helmet và rate-limiting.",
          "<strong>Cơ Sở Dữ Liệu Tối Ưu:</strong> <strong>MongoDB Atlas & Mongoose Schemas</strong> với cơ chế indexing chuyên sâu trên các trường suất chiếu và trạng thái ghế.",
          "<strong>Cơ Chế Khóa Ghế 140 Giây:</strong> Cơ chế giữ chỗ tạm thời trong 140s với optimistic updates, tự động giải phóng ghế khi hết phiên tránh đặt trùng vé giữa các khách hàng.",
          "<strong>Cổng Thanh Toán VietQR Tự Động:</strong> Tự động sinh mã VietQR MBBank theo chuẩn Napas 247, kết hợp polling kiểm tra thanh toán tự động và cấp vé điện tử tức thì.",
          "<strong>Bảo Mật & Phân Quyền RBAC 3 Cấp:</strong> Mã hóa phiên bằng JWT với HTTP-only cookie, phân quyền nghiêm ngặt giữa Quản trị viên (Admin), Nhân viên (Staff) và Khách hàng (Customer).",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
