# Nhật ký dự án (AI Context Log)

> **LƯU Ý DÀNH CHO AI (Future AI Context):**
> File này chứa toàn bộ bối cảnh (context), lịch sử thay đổi và luật của người dùng đối với dự án `OTIS-portfolio`. Hãy đọc kỹ file này trước khi thực hiện bất kỳ chỉnh sửa nào trong tương lai để không phá vỡ cấu trúc và giao diện hiện tại.

## 1. Thông tin chung
- **Chủ dự án:** Trần Lê Phúc Ân (OTIS). Đã thay thế tên mặc định cũ ("David Heckhoff").
- **Tên dự án:** OTIS-portfolio
- **Công nghệ chính:** Vue 3, Vite, Three.js, GSAP, SCSS.
- **Tình trạng:** Đã cấu hình Deploy lên GitHub Pages bằng GitHub Actions (`.github/workflows/deploy.yml`). Base url trong `vite.config.ts` đang được set là `/OTIS-portfolio/`.

## 2. Các tùy chỉnh giao diện (UI/UX)
- **Hiệu ứng Liquid Glass (Kính lỏng):** Đây là phong cách chủ đạo của website. Đã áp dụng `liquid-glass` (thông qua mixin trong `src/assets/styles/mixins.scss`) cho:
  - Thanh Header (Menu nổi bám trên cùng dạng pill / full-width).
  - Các thẻ dự án (`PreviewCard.vue`) ở trạng thái Hover.
  - Bảng thông tin 3D (`BoxDetails.vue`, `BoxDescription.vue`).
  - Hệ thống nút bấm (`ButtonWrapper.vue`).
- **Nhân vật 3D (Avatar):** Tóc của nhân vật (mesh `"gray"`) đã được đổi sang màu đen (`matcap-black`). *Người dùng đã yêu cầu bỏ qua việc thêm kính.*
- **Font chữ:** Toàn bộ trang web sử dụng font **Be Vietnam Pro** (import từ Google Fonts trong `index.html`) để hiển thị tiếng Việt chuẩn nhất.

## 3. Hệ thống Đa ngôn ngữ (i18n)
- **Ngôn ngữ mặc định:** Tiếng Việt (`vn`). Ngôn ngữ fallback cũng được ép về `vn` nếu trình duyệt không xác định được.
- Đã xóa bỏ hoàn toàn tiếng Đức (`de`). Hệ thống chỉ còn 2 ngôn ngữ: `en` (Tiếng Anh) và `vn` (Tiếng Việt).
- **Vị trí file dịch thuật:**
  - UI Text: `src/i18n/messages/namespaces/common/vn.json`.
  - Nội dung dự án: Nằm trong thư mục `src/content/projects/vn/*.ts` và `src/content/projects/previews/vn.ts`.

## 4. Luật hình ảnh toàn cục (User Global Rule)
Bất cứ khi nào AI được yêu cầu tạo hình ảnh nền (background) Lo-Fi, phải TUÂN THỦ NGHIÊM NGẶT các quy tắc sau:
- **Art Style:** High-end cozy digital 3D render illustration. Bề mặt nhẵn mịn, ánh sáng volumetric ấm áp.
- **Mascot (Bắt buộc):** Chó Shiba Inu (lông cam trắng) cuộn tròn ngủ ngoan trên một tấm thảm.
- **Vật thể (Bắt buộc):** Phải có máy phát đĩa than (retro vinyl record player), bộ loa gỗ/tối giản (speakers), và cây cối xanh tươi trong nhà (monstera, palms).
- **Ánh sáng:** Đèn vàng ấm (golden-amber ambient) tương phản với bầu trời đêm chạng vạng hoặc ánh hoàng hôn chiếu qua cửa sổ lớn.

## 5. Hướng dẫn bảo trì
- **Thêm dự án mới:** 
  1. Thêm metadata vào `src/content/projects/vn/ten-du-an.ts`.
  2. Khai báo preview vào `src/content/projects/previews/vn.ts`.
  3. Bổ sung `slug` vào danh sách `projectIds` trong `src/content/projects/index.ts`.
- **Cập nhật Github Pages:** Chỉ cần `git commit` và `git push` lên nhánh `main`, Github Actions sẽ tự động làm phần còn lại. Trang web online tại `https://<github-user>.github.io/OTIS-portfolio/`.
