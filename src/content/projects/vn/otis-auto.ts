import img01Hero from "../../../assets/images/projects/otis-auto/01-porsche-hero.webp";
import img02Services from "../../../assets/images/projects/otis-auto/02-porsche-services.webp";
import img03Craft from "../../../assets/images/projects/otis-auto/03-porsche-craft.webp";
import img04Philosophy from "../../../assets/images/projects/otis-auto/04-porsche-philosophy.webp";
import img05Process from "../../../assets/images/projects/otis-auto/05-porsche-process.webp";
import img06Booking from "../../../assets/images/projects/otis-auto/06-porsche-booking.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "OTIS AUTO",
  theme: "dark",
  tags: ["react", "tailwind", "design", "branding"],
  live: "https://web-posrche.vercel.app",
  liveLabel: "Xem thực tế",
  components: [
    {
      type: "text",
      props: {
        title: "Định Vị Dự Án & Mục Tiêu Thiết Kế",
        text: "OTIS AUTO là nền tảng web ứng dụng cao cấp (Digital Flagship) được định vị dành riêng cho xưởng nâng cấp & bảo dưỡng Porsche độc lập tại San Francisco. Dự án được phát triển nhằm thu hẹp khoảng cách giữa kỹ nghệ cơ khí chính xác của những cỗ máy thể thao hàng đầu và trải nghiệm số của khách hàng: thay thế hoàn toàn các giao diện garage truyền thống bằng một không gian tương tác sang trọng, trực quan, minh bạch và tương xứng với đẳng cấp thương hiệu xe thể thao Stuttgart.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: img01Hero,
        alt: "Giao diện Hero OTIS AUTO với phong cách tạp chí cơ khí Stuttgart",
        caption:
          "Cockpit Header nổi với đèn radar hai vòng đập nhịp theo múi giờ xưởng tại San Francisco, bộ gạt số PDK Drive Mode chuyển đổi Anh - Việt tức thì và thẻ dữ liệu kiểm định PIWIS III",
        originalRatio: true,
      },
    },
    {
      type: "text",
      props: {
        title: "Hệ Thống Thiết Kế Độc Bản: Ngôn Ngữ Stuttgart & Bộ Ba Phông Chữ Kỹ Thuật",
        text: "Hệ thống thiết kế (Design System) của OTIS AUTO được phát triển dựa trên ngôn ngữ thị giác khoang lái Porsche 911: kết hợp nền đen Obsidian (#080807), các lớp bề mặt Titanium (#111110), viền hairline kim loại 1px, cùng hai điểm nhấn kinh điển là đỏ kẹp phanh Guards Red (#D5001C) và vàng đĩa phanh gốm Ceramic Yellow (#F3C300). Giao diện phối hợp 3 tầng typography có chủ đích: Plus Jakarta Sans cho tiêu đề lớn sắc nét, Inter tối ưu khả năng đọc nội dung, và JetBrains Mono cho các mã khung gầm xe (992, 991, 997, 718 GT4, Taycan EV, Air-Cooled) cùng dữ liệu chẩn đoán OBD.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: img02Services,
        alt: "Ma trận dịch vụ tương tác với khung ngắm quang học và ảnh động cơ Flat-6",
        caption:
          "Interactive Service Matrix: Cột trái ghim khung ngắm quang học (optical crosshairs) đồng bộ ảnh khoang máy Flat-6 đối đỉnh theo thời gian thực khi người dùng tương tác với danh sách dịch vụ",
        originalRatio: true,
      },
    },
    {
      type: "text",
      props: {
        title: "Trực Quan Hóa Danh Mục Dịch Vụ: Ma Trận Tương Tác & Thẻ Tiếp Nhận VIP",
        text: "Thay vì các danh sách dịch vụ nhàm chán cuộn dài vô tận, OTIS AUTO sở hữu cơ chế 'Interactive Viewport Stage': khi người dùng tương tác với từng hạng mục dịch vụ bên phải, khung ngắm quang học bên trái sẽ đồng bộ hình ảnh bóc tách động cơ Flat-6 và thông số kỹ thuật tức thì với hiệu ứng cross-fade 60fps mượt mà. Hệ thống công khai giá sàn và thời gian thi công chuẩn xác, tích hợp thẻ đặc quyền 'VIP Complimentary Lift Inspection' (30 phút khám xe miễn phí trên cầu nâng) tạo điểm chạm tiếp nhận minh bạch và chuyên nghiệp.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: img03Craft,
        alt: "Thẻ kiểm tra xe VIP miễn phí và chi tiết phanh gốm PCCB",
        caption:
          "Thẻ đặc quyền VIP khám xe miễn phí trên cầu nâng kèm cam kết bảo hành 2 năm / 24.000 dặm cho 100% phụ tùng Porsche OEM chính hãng",
        originalRatio: true,
      },
    },
    {
      type: "text",
      props: {
        title: "Triết Lý 'Open Bay' & Khoảng Lặng Thị Giác Nghệ Thuật",
        text: "Nhằm xóa bỏ hoàn toàn định kiến mập mờ trong dịch vụ xe sang, dự án số hóa triết lý 'Open Bay Policy' thành 4 cam kết vật lý dạng thẻ kính Titanium (// 01 đến // 04): cho phép chủ xe bước trực tiếp vào gầm cầu nâng, gửi video độ phân giải cao quá trình tháo lắp về điện thoại, và cam kết Zero-Upsell. Điểm xuyết ngay sau đó là khoảng lặng thị giác (Visual Breath) với dải ảnh toàn cảnh cụm đèn hậu Carrera trong đêm và câu danh ngôn bất hủ của Ferdinand Porsche, tạo nên nhịp điệu đọc sâu lắng và sang trọng như một ấn phẩm tạp chí.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: img04Philosophy,
        alt: "Triết lý Open Bay Policy và ảnh toàn cảnh cụm đèn hậu Porsche Carrera",
        caption:
          "Hệ thống thẻ kính Titanium thể hiện triết lý xưởng mở minh bạch, kết hợp khoảng lặng thị giác toàn cảnh tôn vinh di sản kỹ thuật của Ferdinand Porsche",
        originalRatio: true,
      },
    },
    {
      type: "text",
      props: {
        title: "Mạch Dẫn Dây Chuyền 4 Chặng & Hồ Sơ Đội Ngũ Kỹ Sư Trưởng",
        text: "Quy trình dịch vụ được trực quan hóa qua mạch dẫn quang học (Conduit Pipeline) nằm ngang gồm 4 chặng có đèn LED định vị trạng thái: STAGE I (Khảo sát tiếp nhận xe) → STAGE II (Báo giá số kèm ảnh duyệt trực tuyến) → STAGE III (Thi công kỹ thuật trên cầu) → STAGE IV (Chạy thử nghiệm đường trường & hoàn trả phụ tùng cũ). Bố cục phân tách đường conduit phía trên đảm bảo tính toàn vẹn hình học cho các thẻ quy trình, nối tiếp bởi hồ sơ năng lực của các kỹ sư trưởng đạt chuẩn chứng chỉ Porsche Gold Master ASE, Glasurit Master và chuyên gia PIWIS III.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: img05Process,
        alt: "Dây chuyền quy trình 4 chặng và hồ sơ kỹ thuật viên thực tế",
        caption:
          "Mạch dẫn 4 chặng hoàn chỉnh với các trạm LED chỉ báo trạng thái và hồ sơ kỹ thuật viên được chứng thực chuyên môn cao",
        originalRatio: true,
      },
    },
    {
      type: "text",
      props: {
        title: "Sổ Tay Đánh Giá Chủ Xe & Trải Nghiệm Cấu Hình Đặt Lịch",
        text: "Hệ thống tích hợp sổ tay phản hồi 'Direct From The Cockpit' dạng carousel cảm ứng mượt mà trên mọi thiết bị. Trọng tâm của luồng trải nghiệm khách hàng là bộ cấu hình đặt hẹn (Bespoke Booking Flow): tích hợp các chip chọn đời xe một chạm (992 GT3 RS, 991, 997, 718, Taycan EV, Air-Cooled) giúp tự động điền thông số xe, bộ lọc lịch thông minh tự động khóa ngày nghỉ, chỉ báo buồng nâng sẵn sàng tiếp nhận thời gian thực ('BAY 4 AVAILABLE'), và tự động xuất mã hồ sơ cá nhân hóa #PO-SF-740 sau khi gửi thành công.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: img06Booking,
        alt: "Giao diện đánh giá thực tế và bộ cấu hình đặt lịch xưởng buồng lái",
        caption:
          "Bespoke Workshop Configurator: Bộ chip chọn khung gầm xe một chạm, chỉ báo buồng nâng thời gian thực và ảnh buồng lái Alcantara GT3 RS chính hãng",
        originalRatio: true,
      },
    },
    {
      type: "list",
      props: {
        title: "Các Giải Pháp Kỹ Thuật & Kiến Trúc Hệ Thống Nổi Bật (Technical Highlights)",
        items: [
          "<strong>Kiến Trúc Frontend Tốc Độ Cao:</strong> Xây dựng trên nền tảng <strong>React 19 + TailwindCSS 4 + Vite 8</strong>, tối ưu bundle size dưới 90KB gzip và đạt thời gian build kỷ lục dưới 800ms.",
          "<strong>Thuật Toán Tính Giờ Thời Gian Thực (Timezone Engine):</strong> Tự động tính toán trạng thái đóng/mở cửa xưởng theo giờ Thái Bình Dương (<code>America/Los_Angeles</code>) bằng native <code>Intl.DateTimeFormat</code> API, kích hoạt đèn radar hai vòng nhấp nháy trực tiếp ở client mà không phụ thuộc máy chủ bên ngoài.",
          "<strong>Bộ Chuyển Số PDK Đa Ngôn Ngữ:</strong> Thiết kế switch chuyển ngữ song ngữ Anh - Việt mô phỏng cần số thể thao PDK, hỗ trợ chuyển đổi văn bản tức thì với zero layout-shift và tự động đồng bộ LocalStorage.",
          "<strong>Xử Lý Triệt Để Lỗi iOS Safari Auto-Zoom:</strong> Quy chuẩn kích thước font chữ input tối thiểu 16px trên mobile (15px trên desktop) để ngăn chặn hiện tượng tự động phóng to trên iPhone, kết hợp vùng chạm tối thiểu 44x44px theo Apple Human Interface Guidelines.",
          "<strong>Tương Thích Màn Hình Dynamic Island & Safe Area:</strong> Bổ sung <code>viewport-fit=cover</code> và xử lý <code>env(safe-area-inset-bottom)</code> đảm bảo thanh điều hướng di động không bị che khuất bởi vạch Home Bar của iOS.",
          "<strong>Chuẩn Trợ Năng WCAG 2.1 AA & Phòng Vệ Spam:</strong> Trang bị liên kết Skip-Link ẩn trượt xuống thông minh khi người dùng duyệt bằng phím Tab, kết hợp trường bẫy honeypot vô hình lọc 100% spam bot gửi biểu mẫu.",
          "<strong>Triển Khai Đám Mây CI/CD:</strong> Cấu hình tự động deploy trên <strong>Vercel Edge Network</strong> với cấu hình SPA Rewrite chuẩn xác, bảo mật HTTPS cấp A+ và tối ưu phân phối toàn cầu.",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
