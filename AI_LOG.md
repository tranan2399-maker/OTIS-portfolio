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

- **Tháng 9/2026 (Phiên AI hiện tại):** 
  - Khởi tạo dự án cho Trần Lê Phúc Ân.
  - Xây dựng hệ thống UI Liquid Glass toàn diện.
  - Cấu hình tiếng Việt, thiết lập font chữ.
  - Tự động hóa Deploy lên Github Pages (`OTIS-portfolio`).
  - Tạo file `AI_LOG.md` làm bộ nhớ liên tục.
