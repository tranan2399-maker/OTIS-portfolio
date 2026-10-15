# 🧠 Nhật ký AI (AI Context & Evolution Log)

> **⚠️ LỆNH HỆ THỐNG DÀNH CHO BẤT KỲ AI NÀO ĐỌC FILE NÀY (SYSTEM PROMPT):**
> 1. **ĐỌC KỸ:** Đây là file lưu trữ bộ nhớ và cấu trúc cốt lõi của dự án `OTIS-portfolio`. Bạn PHẢI đọc và hiểu toàn bộ nội dung trong đây trước khi thực hiện bất kỳ thay đổi nào.
> 2. **GHI CHÉP LIÊN TỤC:** File này là một cuốn nhật ký sống. Mỗi khi bạn (AI) giúp người dùng thêm một tính năng mới, sửa một lỗi lớn, hoặc thay đổi thiết kế, bạn **BẮT BUỘC PHẢI TỰ ĐỘNG CẬP NHẬT** thông tin đó vào file này (thêm vào mục *Nhật ký cập nhật* hoặc sửa đổi các mục cấu trúc tương ứng). Không được đợi người dùng nhắc.
> 3. **KHÔNG PHÁ VỠ:** Phải tôn trọng các thiết lập hiện tại (đặc biệt là giao diện Liquid Glass và hệ thống đa ngôn ngữ Tiếng Việt).

---

## 1. Thông tin chung
- **Chủ dự án:** Trần Lê Phúc Ân (OTIS). Đã thay thế tên mặc định cũ ("David Heckhoff").
- **Tên dự án:** OTIS-portfolio
- **Công nghệ chính:** Vue 3, Vite, Three.js, GSAP, SCSS.
- **Triển khai (Deploy):** Đã cấu hình lên GitHub Pages bằng GitHub Actions (`.github/workflows/deploy.yml`). Base url trong `vite.config.ts` được set là `/OTIS-portfolio/`.

## 2. Các tùy chỉnh giao diện (UI/UX)
- **Hiệu ứng Liquid Glass (Kính lỏng):** Đây là phong cách thiết kế chủ đạo. Đã áp dụng `liquid-glass` (mixin trong `src/assets/styles/mixins.scss`) cho:
  - Thanh Header (Menu nổi bám trên cùng dạng full-width, dùng pseudo-element `::before`).
  - Các thẻ dự án (`PreviewCard.vue`) ở trạng thái Hover.
  - Bảng thông tin 3D (`BoxDetails.vue`, `BoxDescription.vue`).
  - Hệ thống nút bấm (`ButtonWrapper.vue`).
- **Nhân vật 3D (Avatar):** Tóc của nhân vật (mesh `"gray"`) màu đen (`matcap-black`). Tuyệt đối không thêm kính cho nhân vật (người dùng đã yêu cầu hủy bỏ).
- **Font chữ:** Dùng **Be Vietnam Pro** (import từ Google Fonts trong `index.html`) để hiển thị tiếng Việt chuẩn.

## 3. Hệ thống Đa ngôn ngữ (i18n)
- **Ngôn ngữ mặc định:** Tiếng Việt (`vn`). Fallback về `vn`. Đã xóa tiếng Đức (`de`).
- **Vị trí file:**
  - File UI Text: `src/i18n/messages/namespaces/common/vn.json`.
  - Content dự án: `src/content/projects/vn/*.ts` và `src/content/projects/previews/vn.ts`.

## 4. Luật hình ảnh toàn cục (User Global Rule)
Khi AI tạo hình ảnh nền Lo-Fi, TUÂN THỦ NGHIÊM NGẶT:
- **Art Style:** High-end cozy digital 3D render illustration. Bề mặt nhẵn mịn, ánh sáng volumetric ấm áp.
- **Mascot:** Chó Shiba Inu (lông cam trắng) cuộn tròn ngủ trên thảm.
- **Vật thể bắt buộc:** Máy phát đĩa than (vinyl record player), bộ loa gỗ/tối giản, cây cối xanh tươi trong nhà.
- **Ánh sáng:** Đèn vàng ấm tương phản với bầu trời chạng vạng qua cửa sổ.

---

## 5. 📝 Nhật ký cập nhật (Changelog)
*(AI hãy ghi chú vắn tắt các thay đổi lớn vào đây theo thời gian)*

- **Tháng 9/2026 (Phiên AI trước):** 
  - Khởi tạo dự án cho Trần Lê Phúc Ân.
  - Xây dựng hệ thống UI Liquid Glass toàn diện.
  - Cấu hình tiếng Việt, thiết lập font chữ.
  - Tự động hóa Deploy lên Github Pages (`OTIS-portfolio`).
  - Tạo file `AI_LOG.md` làm bộ nhớ liên tục.
  - Cập nhật Custom Cursor: Hiển thị vòng tròn trắng (`circle-white`) đi theo chuột ở tất cả mọi nơi (không chỉ khi hover).

- **Tháng 10/2026:**
  - Hoàn thiện trang chi tiết dự án **Dream Cinema** (Đồ án tốt nghiệp FPT Polytechnic):
    - Chụp 9 hình ảnh giao diện chuẩn sản xuất độ phân giải cao và tối ưu nén WebP (`01-home-hero.webp` đến `09-vietqr-modal.webp`).
    - Bổ sung toàn diện nội dung song ngữ Việt - Anh (`src/content/projects/vn/dream-cinema.ts` và `src/content/projects/en/dream-cinema.ts`).
    - Trình bày toàn bộ luồng trải nghiệm Stitch Dark Cinema: Hero Banner, Danh mục & Bộ lọc định dạng (IMAX/3D/4DX), Lịch chiếu thông minh đa cụm rạp, Màn hình cong điện ảnh (Cinema Arc Screen), Chọn ghế VIP/Sweetbox thời gian thực với bộ đếm 140s, Menu bắp nước combo, Cổng thanh toán & Hộp thoại quét mã VietQR MBBank tự động.
    - Cấu hình thẻ tag nhận diện: `react`, `nodejs`, `mongodb`, `design`.
    - Kiểm tra build & typecheck vượt qua 100% với 0 lỗi.
  - Bổ sung dự án **OTIS AUTO — Independent Porsche Workshop** (`Web-posrche`):
    - Tích hợp dự án độc lập về dịch vụ bảo dưỡng & nâng cấp xe Porsche cao cấp từ GitHub repository `tranan2399-maker/Web-posrche`.
    - Chụp và tối ưu hóa 6 hình ảnh trải nghiệm thực tế kèm 1 ảnh bìa thumbnail dạng WebP siêu nhẹ (`otis-auto.webp`, `01-porsche-hero.webp` đến `06-porsche-booking.webp`).
    - Xây dựng nội dung chi tiết song ngữ chuẩn quốc tế (`src/content/projects/vn/otis-auto.ts` và `src/content/projects/en/otis-auto.ts`).
    - Bổ sung thẻ tag nhận diện công nghệ: `tailwind` (#38bdf8) và `ai` (#a855f7) vào `src/components/tagVariants.ts` và `src/components/Tag.vue`.
    - Đưa vào danh sách dự án nổi bật (`src/content/projects/index.ts`, `previews/vn.ts`, `previews/en.ts`) với đầy đủ mô tả công nghệ: React 19, TailwindCSS 4, Motion, Lucide Icons, Google Gemini AI (cố vấn kỹ thuật số Porsche AI Service Advisor).
    - Triển khai chạy live demo thành công 100% trên Vercel tại `https://web-posrche.vercel.app/` và gắn nút `live` trực tiếp trên trang chi tiết dự án.
    - Nâng cấp toàn diện nội dung (Content Specialist Overhaul) chuẩn quốc tế song ngữ Anh - Việt: phân tích chiều sâu bài toán số hóa xưởng cơ khí độc lập, ngôn ngữ thiết kế Industrial Luxury, chuyên môn hóa PIWIS III, triết lý minh bạch Open Bay Policy, engine tính giờ mở cửa thời gian thực theo múi giờ PST, quy trình đặt lịch Bespoke và tích hợp trí tuệ nhân tạo Google Gemini AI.
    - Kiểm tra typecheck và build sản phẩm hoàn tất 100% không lỗi.
