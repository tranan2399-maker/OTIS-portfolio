import img01Hero from "../../../assets/images/projects/vinfast-tay-saigon/01-showroom-hero.webp";
import img02Scooters from "../../../assets/images/projects/vinfast-tay-saigon/02-ev-scooters.webp";
import img03Services from "../../../assets/images/projects/vinfast-tay-saigon/03-services-aftersales.webp";
import img04Warranty from "../../../assets/images/projects/vinfast-tay-saigon/04-mobile-responsive.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "VinFast Tây Sài Gòn",
  theme: "dark",
  tags: ["html", "css", "javascript", "design", "branding"],
  live: "https://vinfasttaysaigon.vercel.app",
  liveLabel: "Xem showroom trực tuyến",
  source: "https://github.com/tranan2399-maker/vinfast-tay-saigon",
  components: [
    {
      type: "text",
      props: {
        title: "Định Vị Dự Án & Chuẩn Hóa Nhận Diện Số",
        text: "Website Showroom số VinFast Tây Sài Gòn là cổng thông tin điện tử và kinh doanh số chính thức của đại lý ủy quyền VinFast Tây Sài Gòn. Dự án được tối ưu hóa toàn diện với hơn 53 trang sản phẩm, dịch vụ và hỗ trợ kỹ thuật: từ các dòng ô tô điện (VF 3, VF 5, VF 6, VF 7, VF 8, VF 9, VF Wild, Minio Green, Herio Green, Nerio Green) đến dải sản phẩm xe máy điện thông minh (Viper, Evo Grand, Feliz, Klara, Vento, Theon) và dịch vụ hậu mãi chính hãng.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: img01Hero,
        alt: "Giao diện trang chủ VinFast Tây Sài Gòn",
        caption: "Showroom số VinFast Tây Sài Gòn với bộ nhận diện thương hiệu VinFast Auto chuẩn mực và điều hướng thông minh",
        originalRatio: true,
      },
    },
    {
      type: "text",
      props: {
        title: "Kiến Trúc Menu Thông Minh & Danh Mục Sản Phẩm Đa Tầng",
        text: "Hệ thống menu sản phẩm được thiết kế với cơ chế hover hai tầng mượt mà, phân loại rõ nét giữa ô tô điện và xe máy điện. Mỗi dòng xe đều sở hữu trang chi tiết sản phẩm (PDP) riêng biệt với thông số kỹ thuật, giá niêm yết, chính sách thuê/mua pin và đăng ký lái thử trực tuyến kết nối thẳng tới Zalo OA tư vấn viên.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: img02Scooters,
        alt: "Dải sản phẩm xe máy điện VinFast thông minh",
        caption: "Hệ sinh thái xe máy điện thế hệ mới với bộ lọc tính năng và bảng dự toán chi phí lăn bánh tức thì",
        originalRatio: true,
      },
    },
    {
      type: "text",
      props: {
        title: "Hệ Thống Dịch Vụ Hậu Mãi & Đặt Lịch Xưởng Dịch Vụ",
        text: "Khu vực Dịch vụ Hậu mãi số hóa quy trình đặt hẹn bảo dưỡng định kỳ, cứu hộ pin 24/7 và sửa chữa chính hãng. Bộ lọc cơ sở showroom 9 chi nhánh tích hợp bản đồ Google Maps và nút gọi hotline tức thì, giải quyết triệt để nhu cầu dịch vụ của khách hàng sở hữu xe điện tại TP. Hồ Chí Minh và các tỉnh lân cận.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: img03Services,
        alt: "Giao diện dịch vụ hậu mãi và đặt lịch bảo dưỡng",
        caption: "Quy trình tiếp nhận dịch vụ kỹ thuật số, mạng lưới xưởng dịch vụ ủy quyền và bảng giá công khai",
        originalRatio: true,
      },
    },
    {
      type: "text",
      props: {
        title: "Tối Ưu Mobile Hoàn Hảo & Chính Sách Bảo Hành Minh Bạch",
        text: "Header và toàn bộ 53 trang web được tinh chỉnh đặc thù cho trải nghiệm di động (Mobile First): thiết kế ngăn kéo Drawer trượt mượt mà, touch target đạt chuẩn 44x44px theo Apple Human Interface Guidelines, triệt tiêu hoàn toàn lỗi vỡ layout chữ đè lên logo, và hệ thống chính sách bảo hành pin 10 năm được cấu trúc chuẩn SEO.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: img04Warranty,
        alt: "Trang chính sách bảo hành và cam kết chất lượng",
        caption: "Cấu trúc thông tin minh bạch về điều kiện bảo hành, quy chuẩn pin LFP và cam kết hậu mãi VinFast",
        originalRatio: true,
      },
    },
    {
      type: "list",
      props: {
        title: "Điểm Nhấn Kỹ Thuật (Technical Highlights)",
        items: [
          "<strong>Hệ thống 53 Trang Sản phẩm & Dịch vụ:</strong> Tái cấu trúc hoàn chỉnh toàn bộ kiến trúc thông tin từ VinFast Auto, giữ nguyên độ trung thực và tính thương mại cao.",
          "<strong>Tối Ưu Header Mobile 60px Chuẩn Xác:</strong> Xử lý dứt điểm xung đột CSS media queries và specificity giữa ID `#header` và class, căn giữa logo chuẩn 38px toán học với zero layout-shift.",
          "<strong>Menu Ngăn Kéo Touch Target:</strong> Nút Hamburger 44x44px chuẩn công thái học di động, đóng mở mượt mà và hỗ trợ trải nghiệm cảm ứng đa điểm.",
          "<strong>Độ Trễ Phản Hồi Tức Thì:</strong> Tối ưu tài nguyên hình ảnh WebP, nén CSS/JS và phân phối qua mạng biên Vercel Edge Network đạt điểm PageSpeed Mobile ấn tượng.",
          "<strong>Kết Nối Kinh Doanh Trực Tiếp:</strong> Tích hợp nút liên hệ Zalo OA, hotline cứu hộ 24/7 và form thu thập thông tin khách hàng tiềm năng.",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;

