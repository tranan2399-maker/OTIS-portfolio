import img01Hero from "../../../assets/images/projects/viewdecor-interior/01-viewdecor-hero.webp";
import img02Portfolio from "../../../assets/images/projects/viewdecor-interior/02-interior-portfolio.webp";
import img03Factory from "../../../assets/images/projects/viewdecor-interior/03-craft-factory.webp";
import img04Report from "../../../assets/images/projects/viewdecor-interior/04-proposal-report.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Viewdecor Interior",
  theme: "dark",
  tags: ["react", "tailwind", "design", "branding", "ai"],
  live: "https://github.com/tranan2399-maker/WEB-noithat1",
  liveLabel: "Xem mã nguồn GitHub",
  source: "https://github.com/tranan2399-maker/WEB-noithat1",
  components: [
    {
      type: "text",
      props: {
        title: "Kiến Trúc Nội Thất Cao Cấp & Trải Nghiệm Số",
        text: "Viewdecor Interior là nền tảng số hóa thương hiệu toàn diện cho công ty kiến trúc & thi công nội thất cao cấp Viewdecor (TP.HCM). Được xây dựng trên nền tảng React 19, Tailwind CSS và Motion, dự án chuyển dịch toàn bộ năng lực sản xuất đồ gỗ mộc, thiết kế văn phòng doanh nghiệp đa quốc gia và biệt thự cao cấp thành một không gian số tương tác sang trọng, hiện đại.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: img01Hero,
        alt: "Giao diện Hero Landing Page Viewdecor",
        caption: "Không gian trải nghiệm số Viewdecor với ngôn ngữ thiết kế tối giản, tông màu sang trọng và typography sắc nét",
        originalRatio: true,
      },
    },
    {
      type: "text",
      props: {
        title: "Bộ Sưu Tập Dự Án Văn Phòng & Doanh Nghiệp Đa Quốc Gia",
        text: "Danh mục dự án thực tế của Viewdecor quy tụ các công trình nội thất quy mô lớn: Văn phòng tập đoàn H&M Vietnam, CMC Telecom, BodyNits, Kim Tây Nam, Scheaffler, Kotiti, Vico Logistics và các căn hộ hạng sang. Giao diện tích hợp bộ lọc dự án linh hoạt và hiệu ứng chuyển cảnh mượt mà.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: img02Portfolio,
        alt: "Showcase các dự án văn phòng tiêu biểu của Viewdecor",
        caption: "Hệ thống trưng bày dự án với hình ảnh thực tế chất lượng cao, phản ánh chính xác không gian làm việc sáng tạo",
        originalRatio: true,
      },
    },
    {
      type: "text",
      props: {
        title: "Năng Lực Sản Xuất Đồ Gỗ & Xưởng Nội Thất Trực Thuộc",
        text: "Khác biệt cốt lõi của Viewdecor nằm ở quy trình khép kín từ bản vẽ thiết kế đến xưởng sản xuất đồ gỗ nội thất độc lập với máy móc hiện đại và đội ngũ thợ lành nghề. Website trực quan hóa năng lực chế tác gỗ tự nhiên, kiểm soát chất lượng vật liệu hoàn thiện và cam kết đúng tiến độ bàn giao.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: img03Factory,
        alt: "Không gian xưởng sản xuất đồ gỗ nội thất Viewdecor",
        caption: "Năng lực chế tác trực tiếp tại xưởng: từ kết cấu khung gỗ, xử lý bề mặt veneer/laminate đến kiểm thử trước lắp đặt",
        originalRatio: true,
      },
    },
    {
      type: "text",
      props: {
        title: "Hồ Sơ Năng Lực & Báo Cáo Thương Mại Thuyết Phục Khách Hàng",
        text: "Dự án đi kèm hệ thống báo cáo số so sánh giải pháp thiết kế, đo lường chỉ số tối ưu chi phí (ROI) và tài liệu hồ sơ năng lực tương tác trực tuyến (`bao-cao.html`), trang bị vũ khí chuyển đổi thương mại sắc bén cho đội ngũ tư vấn khi tiếp cận các chủ đầu tư lớn.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: img04Report,
        alt: "Báo cáo so sánh và tài liệu thuyết phục khách hàng",
        caption: "Hồ sơ năng lực điện tử với luận điểm thuyết phục kinh doanh, chỉ số tối ưu và các chứng nhận chất lượng công trình",
        originalRatio: true,
      },
    },
    {
      type: "list",
      props: {
        title: "Điểm Nhấn Kỹ Thuật (Technical Highlights)",
        items: [
          "<strong>Ngăn Xếp Công Nghệ Hiện Đại:</strong> Phát triển trên <strong>React 19 + Tailwind CSS 4 + Vite 8</strong> với hiệu năng tải trang tức thì và cấu trúc component module hóa cao độ.",
          "<strong>Thư Viện Motion & Micro-Interactions:</strong> Ứng dụng hoạt họa vi mô (micro-interactions) tinh tế, tôn vinh đẳng cấp thị giác của các tác phẩm nội thất cao cấp.",
          "<strong>Tối Ưu Tài Nguyên Đa Phương Tiện:</strong> Tự động chuyển đổi hình ảnh công trình sang định dạng WebP, giảm đến 88% dung lượng tải ban đầu mà vẫn giữ độ sắc nét.",
          "<strong>Hồ Sơ Năng Lực Trực Tuyến Độc Bản:</strong> Tích hợp trang báo cáo số độc lập (`bao-cao.html`) hỗ trợ chốt hợp đồng và thuyết trình trước hội đồng quản trị.",
          "<strong>Quản Lý Dự Án Chuẩn Mực:</strong> Kho lưu trữ mã nguồn mở trên GitHub (`WEB-noithat1`) với quy trình Git flow đồng bộ các nhánh `main` và `gh-pages`.",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;

