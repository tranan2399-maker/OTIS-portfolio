<script setup lang="ts">
import { computed } from "vue";
import { locale } from "../../../i18n/store";

import img01Hero from "../../../assets/images/projects/otis-auto/01-porsche-hero.webp";
import img02Services from "../../../assets/images/projects/otis-auto/02-porsche-services.webp";
import img03Craft from "../../../assets/images/projects/otis-auto/03-porsche-craft.webp";
import img04Philosophy from "../../../assets/images/projects/otis-auto/04-porsche-philosophy.webp";
import img05Process from "../../../assets/images/projects/otis-auto/05-porsche-process.webp";
import img06Booking from "../../../assets/images/projects/otis-auto/06-porsche-booking.webp";

const isVi = computed(() => locale.value !== "en");
</script>

<template>
  <div class="showcase">
    <!-- 1. Quick Telemetry Metrics Bar -->
    <section class="telemetry-bar">
      <div class="telemetry-item">
        <span class="telemetry-value">&lt; 800ms</span>
        <span class="telemetry-label">{{ isVi ? "Tốc độ biên dịch Vite 8" : "Vite 8 Build & Bundle Time" }}</span>
      </div>
      <div class="telemetry-divider"></div>
      <div class="telemetry-item">
        <span class="telemetry-value text-yellow">100% OEM</span>
        <span class="telemetry-label">{{ isVi ? "Chẩn đoán Porsche PIWIS III" : "PIWIS III Factory Standard" }}</span>
      </div>
      <div class="telemetry-divider"></div>
      <div class="telemetry-item">
        <span class="telemetry-value text-red">60 FPS</span>
        <span class="telemetry-label">{{ isVi ? "Hiệu ứng chuyển động mượt mà" : "Fluid 60 FPS Animations" }}</span>
      </div>
    </section>

    <!-- 2. Chapter 1: The Creative Motivation (Split Grid) -->
    <section class="chapter-grid">
      <div class="narrative-card">
        <div class="chapter-badge">
          <span class="badge-dot bg-red"></span>
          <span>{{ isVi ? "CHƯƠNG 01 · TỔNG QUAN DỰ ÁN" : "CHAPTER 01 · PROJECT OVERVIEW" }}</span>
        </div>
        <h2 class="chapter-title">
          {{ isVi ? "OTIS AUTO — Nền tảng số hóa dịch vụ kỹ thuật xe Porsche" : "OTIS AUTO — Digital Platform for Porsche Specialists" }}
        </h2>
        <p class="chapter-paragraph">
          {{
            isVi
              ? "OTIS AUTO là nền tảng web ứng dụng cao cấp (Digital Flagship) được định vị dành riêng cho xưởng nâng cấp & bảo dưỡng Porsche độc lập tại San Francisco. Dự án được phát triển nhằm thu hẹp khoảng cách giữa kỹ nghệ cơ khí chính xác của những cỗ máy thể thao hàng đầu và trải nghiệm số của khách hàng: thay thế hoàn toàn các giao diện garage truyền thống bằng một không gian tương tác sang trọng, trực quan, minh bạch và tương xứng với đẳng cấp thương hiệu Stuttgart."
              : "OTIS AUTO is a bespoke digital flagship web application engineered for an independent Porsche specialist workshop in San Francisco. The platform bridges high-precision automotive engineering with modern digital standards: replacing generic automotive websites with a tactile, transparent, and high-performance digital flagship crafted to match the engineering pedigree of Stuttgart sports cars."
          }}
        </p>
        <div class="quote-callout">
          <p class="quote-text">
            {{
              isVi
                ? "“Một giao diện đậm chất kỹ thuật cơ khí: từng khoảng trắng, đường viền kim loại mảnh 1px cho đến hiệu ứng chuyển động đều được tính toán để tái hiện cảm giác đầm chắc và tinh xảo của khoang lái Porsche.”"
                : "“An interface grounded in German mechanical precision: every whitespace, hairline border, and micro-interaction is engineered to evoke the tactile solidity and craftsmanship of a Porsche cockpit.”"
            }}
          </p>
        </div>
      </div>

      <div class="visual-card">
        <div class="visual-frame">
          <img :src="img01Hero" alt="OTIS AUTO Hero Section" class="visual-image" loading="eager" />
          <div class="visual-telemetry">
            <span class="status-indicator live"></span>
            <span>COCKPIT HEADER · LIVE RADAR BEACON (SAN FRANCISCO PST)</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. Chapter 2: Bespoke Design System & Typography Specimen -->
    <section class="design-system-section">
      <div class="section-header">
        <div class="chapter-badge">
          <span class="badge-dot bg-yellow"></span>
          <span>{{ isVi ? "CHƯƠNG 02 · HỆ THỐNG THIẾT KẾ ĐỘC BẢN" : "CHAPTER 02 · BESPOKE DESIGN SYSTEM" }}</span>
        </div>
        <h2 class="section-title">
          {{ isVi ? "Ngôn Ngữ Vật Liệu Stuttgart & Bộ Ba Phông Chữ Kỹ Thuật" : "Stuttgart Materiality & Precision Typography Trio" }}
        </h2>
        <p class="section-desc">
          {{
            isVi
              ? "Hệ thống thiết kế (Design System) của OTIS AUTO được phát triển dựa trên ngôn ngữ thị giác khoang lái Porsche 911: kết hợp nền đen Obsidian, bề mặt Titanium, hai điểm nhấn kinh điển Guards Red & Ceramic Yellow cùng bộ ba font chữ phân tầng rõ rệt."
              : "The OTIS AUTO design system derives its visual language directly from the Porsche 911 cabin: blending Obsidian Black and Titanium surfaces with iconic motorsport accents (Guards Red & Ceramic Yellow) and a deliberate three-tier typography hierarchy."
          }}
        </p>
      </div>

      <div class="specimen-grid">
        <!-- Palette Bento -->
        <div class="specimen-card palette-card">
          <h3 class="card-heading">{{ isVi ? "Bảng Màu Thể Thao Porsche" : "Motorsport Color Tokens" }}</h3>
          <div class="palette-swatches">
            <div class="swatch-item">
              <div class="swatch-color bg-obsidian"></div>
              <span class="swatch-name">Obsidian Black</span>
              <span class="swatch-hex">#080807</span>
            </div>
            <div class="swatch-item">
              <div class="swatch-color bg-titanium"></div>
              <span class="swatch-name">Titanium Surface</span>
              <span class="swatch-hex">#111110</span>
            </div>
            <div class="swatch-item">
              <div class="swatch-color bg-guards-red"></div>
              <span class="swatch-name">Guards Red</span>
              <span class="swatch-hex">#D5001C</span>
            </div>
            <div class="swatch-item">
              <div class="swatch-color bg-ceramic-yellow"></div>
              <span class="swatch-name">Ceramic Yellow</span>
              <span class="swatch-hex">#F3C300</span>
            </div>
          </div>
        </div>

        <!-- Typography Bento -->
        <div class="specimen-card typo-card">
          <h3 class="card-heading">{{ isVi ? "Kiến Trúc Typography 3 Tầng" : "Three-Tier Typography Architecture" }}</h3>
          <div class="typo-samples">
            <div class="typo-item">
              <span class="typo-tag">DISPLAY HEADINGS</span>
              <span class="typo-preview font-display">Plus Jakarta Sans · Aerodynamic & Bold</span>
            </div>
            <div class="typo-item">
              <span class="typo-tag">UI & BODY COPY</span>
              <span class="typo-preview font-sans">Inter · High-Legibility & Neutral Balance</span>
            </div>
            <div class="typo-item">
              <span class="typo-tag">TELEMETRY & SPECS</span>
              <span class="typo-preview font-mono">JetBrains Mono · 992 GT3 RS · PIWIS III · OBD</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. Chapter 3: Interactive Service Matrix & VIP Lift Inspection (Bento Grid) -->
    <section class="chapter-grid reverse">
      <div class="visual-card">
        <div class="visual-frame">
          <img :src="img02Services" alt="Interactive Service Matrix" class="visual-image" loading="lazy" />
          <div class="visual-telemetry">
            <span>OPTICAL CROSSHAIRS (+) · REAL-TIME FLAT-6 BOXER VIEWPORT</span>
          </div>
        </div>
      </div>

      <div class="narrative-card">
        <div class="chapter-badge">
          <span class="badge-dot bg-red"></span>
          <span>{{ isVi ? "CHƯƠNG 03 · MA TRẬN DỊCH VỤ TƯƠNG TÁC" : "CHAPTER 03 · INTERACTIVE SERVICE MATRIX" }}</span>
        </div>
        <h2 class="chapter-title">
          {{ isVi ? "Trực Quan Hóa Danh Mục Dịch Vụ Với Khung Ngắm Quang Học" : "Visualizing Technical Services with an Optical Diagnostic Viewport" }}
        </h2>
        <p class="chapter-paragraph">
          {{
            isVi
              ? "Thay vì danh sách cuộn dọc đơn điệu, OTIS AUTO sở hữu cơ chế 'Interactive Viewport Stage': khi người dùng tương tác với từng hạng mục dịch vụ bên phải, khung ngắm quang học bên trái sẽ đồng bộ hình ảnh bóc tách động cơ Flat-6 và thông số kỹ thuật tức thì với hiệu ứng cross-fade 60fps mượt mà. Hệ thống công khai giá sàn và thời gian thi công chuẩn xác, tích hợp thẻ đặc quyền 'VIP Complimentary Lift Inspection' (30 phút khám xe miễn phí trên cầu nâng) tạo điểm chạm tiếp nhận minh bạch và chuyên nghiệp."
              : "Moving away from conventional static catalogs, OTIS AUTO introduces an 'Interactive Viewport Stage': hovering or selecting service items instantly synchronizes the left diagnostic viewport with high-resolution Flat-6 engine visuals and technical specifications at silky 60fps. Transparent starting rates and turnaround hours are displayed upfront, paired with a prominent 'VIP Complimentary Lift Inspection' card as an organic, trust-building intake touchpoint."
          }}
        </p>

        <!-- VIP Lift Card Callout -->
        <div class="vip-highlight-card">
          <div class="vip-badge">{{ isVi ? "ĐẶC QUYỀN VIP" : "VIP INTAKE PRIVILEGE" }}</div>
          <div class="vip-content">
            <span class="vip-title">{{ isVi ? "Khám xe 30 phút miễn phí trên cầu nâng" : "Complimentary 30-minute lift inspection" }}</span>
            <span class="vip-desc">{{ isVi ? "Có biên bản kế hoạch chi tiết bằng văn bản kèm bảo hành 2 năm / 24.000 dặm" : "Written diagnostic roadmap with 2-Year / 24,000-Mile warranty" }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Secondary Media Spotlight (VIP Lift & PCCB Brakes) -->
    <div class="full-media-frame">
      <img :src="img03Craft" alt="VIP Inspection & Ceramic Brakes" class="full-media-img" loading="lazy" />
      <div class="media-caption-bar">
        <span class="caption-tag">{{ isVi ? "TRỰC QUAN HÓA CHI TIẾT" : "VISUAL PROOF OF CRAFT" }}</span>
        <span class="caption-text">{{ isVi ? "Cận cảnh cụm phanh gốm carbon PCCB vàng và thẻ tiếp nhận kiểm tra cầu nâng VIP" : "Yellow PCCB carbon-ceramic brake assembly and VIP Lift intake card" }}</span>
      </div>
    </div>

    <!-- 5. Chapter 4: Radical Transparency & Open Bay Policy -->
    <section class="open-bay-section">
      <div class="section-header">
        <div class="chapter-badge">
          <span class="badge-dot bg-yellow"></span>
          <span>{{ isVi ? "CHƯƠNG 04 · TRIẾT LÝ MINH BẠCH" : "CHAPTER 04 · TRANSPARENCY PROTOCOL" }}</span>
        </div>
        <h2 class="section-title">
          {{ isVi ? "Triết Lý 'Open Bay Policy' & Tinh Thần Chế Tác Ferdinand Porsche" : "The 'Open Bay Policy' & Ferdinand Porsche Credo" }}
        </h2>
        <p class="section-desc">
          {{
            isVi
              ? "Nhằm xóa bỏ hoàn toàn định kiến mập mờ trong dịch vụ xe sang, dự án số hóa triết lý 'Open Bay Policy' thành 4 cam kết vật lý dạng thẻ kính Titanium, kết hợp khoảng lặng thị giác nghệ thuật tôn vinh di sản kỹ nghệ Stuttgart."
              : "Addressing the friction around opacity in high-end automotive care, the platform translates the 'Open Bay Policy' into four titanium glass commitment cards, accompanied by an editorial visual interlude celebrating Ferdinand Porsche's engineering ethos."
          }}
        </p>
      </div>

      <!-- 4 Titanium Glass Cards -->
      <div class="glass-cards-grid">
        <div class="glass-card">
          <div class="card-num">// 01</div>
          <h4 class="card-title">{{ isVi ? "Chào đón vào cầu nâng" : "Direct Bay Access" }}</h4>
          <p class="card-desc">{{ isVi ? "Chủ xe luôn được mời trực tiếp xuống gầm xe cùng kỹ sư trưởng để quan sát thực tế." : "Owners are warmly welcomed beneath hydraulic lifts to inspect components alongside master technicians." }}</p>
        </div>
        <div class="glass-card">
          <div class="card-num">// 02</div>
          <h4 class="card-title">{{ isVi ? "Cập nhật qua hình ảnh" : "HD Photo Updates" }}</h4>
          <p class="card-desc">{{ isVi ? "Ảnh và video độ phân giải cao quá trình tháo lắp được gửi thẳng đến điện thoại." : "Ultra-high-definition photos and videos sent directly to your phone before any work commences." }}</p>
        </div>
        <div class="glass-card">
          <div class="card-num">// 03</div>
          <h4 class="card-title">{{ isVi ? "100% Phụ tùng OEM" : "100% Genuine OEM" }}</h4>
          <p class="card-desc">{{ isVi ? "Chỉ sử dụng phụ tùng Porsche Genuine và dầu nhớt Mobil 1 tiêu chuẩn Đức cao nhất." : "Strictly authentic Porsche parts, factory Mobil 1 fluids, and manufacturer-certified hardware." }}</p>
        </div>
        <div class="glass-card">
          <div class="card-num">// 04</div>
          <h4 class="card-title">{{ isVi ? "Không chèo kéo dịch vụ" : "Zero-Upsell Policy" }}</h4>
          <p class="card-desc">{{ isVi ? "Báo giá rõ ràng từng hạng mục cần làm ngay hoặc có thể hoãn lại, không ép mua." : "Transparent, itemized pricing separating critical repairs from optional deferred items." }}</p>
        </div>
      </div>

      <!-- Full-bleed Photo Interlude -->
      <div class="interlude-container">
        <img :src="img04Philosophy" alt="Porsche Carrera Taillight Interlude" class="interlude-img" loading="lazy" />
        <div class="interlude-overlay">
          <span class="interlude-sub">FERDINAND PORSCHE · STUTTGART HERITAGE</span>
          <p class="interlude-quote">
            “I couldn't find the sports car of my dreams, so I built it myself.”
          </p>
        </div>
      </div>
    </section>

    <!-- 6. Chapter 5: Pipeline & Master Craftsmen Dossiers -->
    <section class="chapter-grid">
      <div class="narrative-card">
        <div class="chapter-badge">
          <span class="badge-dot bg-red"></span>
          <span>{{ isVi ? "CHƯƠNG 05 · QUY TRÌNH CHUẨN XƯỞNG" : "CHAPTER 05 · 4-STAGE PIPELINE" }}</span>
        </div>
        <h2 class="chapter-title">
          {{ isVi ? "Mạch Dẫn Dây Chuyền Quang Học & Hồ Sơ Kỹ Sư Trưởng" : "Illuminated Conduit Pipeline & Certified Craftsmen Dossiers" }}
        </h2>
        <p class="chapter-paragraph">
          {{
            isVi
              ? "Quy trình dịch vụ được trực quan hóa qua mạch dẫn quang học (Conduit Pipeline) nằm ngang gồm 4 chặng có đèn LED định vị trạng thái: STAGE I (Khảo sát tiếp nhận xe) → STAGE II (Báo giá số kèm ảnh duyệt trực tuyến) → STAGE III (Thi công kỹ thuật trên cầu) → STAGE IV (Chạy thử nghiệm đường trường & hoàn trả phụ tùng cũ). Bố cục phân tách đường conduit phía trên đảm bảo tính toàn vẹn hình học cho các thẻ quy trình, nối tiếp bởi hồ sơ năng lực của các kỹ sư trưởng đạt chuẩn chứng chỉ Porsche Gold Master ASE, Glasurit Master và chuyên gia PIWIS III."
              : "The workshop workflow is presented through an illuminated horizontal conduit pipeline featuring four distinct milestones with active status LEDs: STAGE I (Joint intake walkaround) → STAGE II (Digital estimate with photo approval) → STAGE III (Active bay execution) → STAGE IV (Dynamic road test & return of retired OEM parts). The decoupled conduit track preserves clean card border geometry, leading directly into verified profiles of the resident master technicians (Porsche Gold Master ASE, Glasurit Master, and PIWIS III Lead)."
          }}
        </p>

        <div class="badges-row">
          <span class="tech-pill">PORSCHE GOLD MASTER ASE</span>
          <span class="tech-pill">GLASURIT MASTER FINISHER</span>
          <span class="tech-pill">PIWIS III & EV LEAD</span>
        </div>
      </div>

      <div class="visual-card">
        <div class="visual-frame">
          <img :src="img05Process" alt="Process Pipeline and Team Dossiers" class="visual-image" loading="lazy" />
          <div class="visual-telemetry">
            <span>CONDUIT TRACK · STAGE I TO IV · VERIFIED CRAFTSMEN DOSSIERS</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 7. Chapter 6: Reviews & Bespoke Cockpit Booking Flow -->
    <section class="chapter-grid reverse">
      <div class="visual-card">
        <div class="visual-frame">
          <img :src="img06Booking" alt="Booking Intake and Reviews" class="visual-image" loading="lazy" />
          <div class="visual-telemetry">
            <span class="status-indicator live"></span>
            <span>BAY 4 AVAILABLE · CHASSIS SELECTOR · ZERO SPAM HONEYPOT</span>
          </div>
        </div>
      </div>

      <div class="narrative-card">
        <div class="chapter-badge">
          <span class="badge-dot bg-yellow"></span>
          <span>{{ isVi ? "CHƯƠNG 06 · BỘ CẤU HÌNH TIẾP NHẬN" : "CHAPTER 06 · COCKPIT INTAKE SYSTEM" }}</span>
        </div>
        <h2 class="chapter-title">
          {{ isVi ? "Sổ Tay Đánh Giá Chủ Xe & Trải Nghiệm Cấu Hình Đặt Lịch" : "Owner Review Registry & Cockpit Intake Configurator" }}
        </h2>
        <p class="chapter-paragraph">
          {{
            isVi
              ? "Hệ thống tích hợp sổ tay phản hồi 'Direct From The Cockpit' dạng carousel cảm ứng mượt mà trên mọi thiết bị. Trọng tâm của luồng trải nghiệm khách hàng là bộ cấu hình đặt hẹn (Bespoke Booking Flow): tích hợp các chip chọn đời xe một chạm (992 GT3 RS, 991, 997, 718, Taycan EV, Air-Cooled) giúp tự động điền thông số xe, bộ lọc lịch thông minh tự động khóa ngày nghỉ, chỉ báo buồng nâng sẵn sàng tiếp nhận thời gian thực ('BAY 4 AVAILABLE'), và tự động xuất mã hồ sơ cá nhân hóa #PO-SF-740 sau khi gửi thành công."
              : "The platform features a touch-optimized 'Direct From The Cockpit' review carousel spanning diverse Porsche generations. The UX journey culminates in the Bespoke Booking Configurator: one-touch chassis selector chips (992 GT3 RS, 991, 997, 718, Taycan EV, Air-Cooled) that auto-populate vehicle specifications, smart calendar logic disabling closed days, real-time bay intake availability ('BAY 4 AVAILABLE'), and instant generation of a personalized digital intake dossier (#PO-SF-740)."
          }}
        </p>

        <!-- Chassis Chips Specimen -->
        <div class="chips-specimen">
          <span class="chips-label">{{ isVi ? "CHIP ĐỜI XE MỘT CHẠM:" : "ONE-TOUCH CHASSIS CHIPS:" }}</span>
          <div class="chips-wrap">
            <span class="chip-item active">992 GT3 RS</span>
            <span class="chip-item">991 Carrera</span>
            <span class="chip-item">997 Turbo</span>
            <span class="chip-item">718 GT4</span>
            <span class="chip-item">Taycan EV</span>
            <span class="chip-item">Air-Cooled 911</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 8. Technical Deep Dive Bento Grid -->
    <section class="tech-deepdive-section">
      <div class="section-header">
        <div class="chapter-badge">
          <span class="badge-dot bg-red"></span>
          <span>{{ isVi ? "CHI TIẾT KỸ THUẬT & KIẾN TRÚC" : "TECHNICAL ARCHITECTURE & ENGINEERING" }}</span>
        </div>
        <h2 class="section-title">
          {{ isVi ? "Các Giải Pháp Kỹ Thuật & Kiến Trúc Hệ Thống Nổi Bật" : "Key Engineering Solutions & Technical Architecture" }}
        </h2>
      </div>

      <div class="tech-bento-grid">
        <div class="bento-box">
          <div class="bento-icon">⚡</div>
          <h4 class="bento-title">{{ isVi ? "React 19 + TailwindCSS 4 + Vite 8" : "React 19 + TailwindCSS 4 + Vite 8" }}</h4>
          <p class="bento-desc">
            {{ isVi ? "Kiến trúc Component hóa chặt chẽ, tối ưu build pipeline với thời gian đóng gói dưới 800ms, bundle tối ưu dưới 90KB gzip, đảm bảo tốc độ tải trang tức thì." : "Modular component architecture with optimized build pipelines, sub-800ms compilation time, and sub-90KB gzip bundle for instant page loading." }}
          </p>
        </div>

        <div class="bento-box">
          <div class="bento-icon">⏱</div>
          <h4 class="bento-title">{{ isVi ? "Real-time Timezone Engine" : "Real-time Timezone Engine" }}</h4>
          <p class="bento-desc">
            {{ isVi ? "Ứng dụng native Intl API tự động tính toán giờ mở/đóng cửa theo múi giờ xưởng tại San Francisco (PST/PDT), điều khiển nhịp đập đèn radar trực tiếp ở phía client mà không cần gọi API ngoài." : "Native Intl API computes workshop operating status against San Francisco local time (PST/PDT), driving the pulsing live radar indicator entirely on the client side." }}
          </p>
        </div>

        <div class="bento-box">
          <div class="bento-icon">🕹</div>
          <h4 class="bento-title">{{ isVi ? "Bộ Gạt Số PDK Đa Ngôn Ngữ" : "PDK Drive Mode Switcher" }}</h4>
          <p class="bento-desc">
            {{ isVi ? "Bộ chuyển đổi song ngữ Anh - Việt mô phỏng cần số xe thể thao PDK, hỗ trợ chuyển đổi nội dung tức thì không gây giật khung hình (Zero Layout Shift) và đồng bộ LocalStorage." : "Tactile PDK drive-mode switcher enabling instant bilingual toggling (EN/VI) with zero layout shift and automatic LocalStorage persistence." }}
          </p>
        </div>

        <div class="bento-box">
          <div class="bento-icon">📱</div>
          <h4 class="bento-title">{{ isVi ? "Xử Lý Triệt Để Lỗi iOS Auto-Zoom" : "Eradicating iOS Safari Auto-Zoom" }}</h4>
          <p class="bento-desc">
            {{ isVi ? "Quy chuẩn kích thước phông chữ nhập liệu tối thiểu 16px trên di động nhằm ngăn chặn hiện tượng tự động phóng to trên iOS Safari, kết hợp vùng chạm tối thiểu 44px theo Apple HIG." : "Standardized mobile input font sizing to 16px to prevent iOS Safari auto-zoom, paired with 44px minimum touch targets adhering to Apple Human Interface Guidelines." }}
          </p>
        </div>

        <div class="bento-box">
          <div class="bento-icon">♿</div>
          <h4 class="bento-title">{{ isVi ? "WCAG 2.1 AA & Bẫy Honeypot" : "WCAG 2.1 AA & Honeypot Defense" }}</h4>
          <p class="bento-desc">
            {{ isVi ? "Trang bị cơ chế Skip-Link ẩn trượt mượt mà hỗ trợ điều hướng bàn phím chuẩn khả năng tiếp cận, kết hợp trường bẫy honeypot vô hình lọc 100% spam bot gửi biểu mẫu." : "Built-in offscreen Skip-Link for accessible keyboard navigation, combined with an invisible honeypot field that blocks automated spam submissions." }}
          </p>
        </div>

        <div class="bento-box">
          <div class="bento-icon">🚀</div>
          <h4 class="bento-title">{{ isVi ? "Vercel Edge Cloud Deployment" : "Vercel Edge Cloud Deployment" }}</h4>
          <p class="bento-desc">
            {{ isVi ? "Triển khai CI/CD tự động với cấu hình SPA Rewrite chuẩn xác, bảo mật SSL cấp A+ và tối ưu phân phối toàn cầu qua mạng lưới Vercel Edge Network." : "Automated CI/CD with custom SPA rewrites, A+ SSL security headers, and worldwide low-latency edge distribution via Vercel." }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.showcase {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 80px;
  padding: 40px var(--space-outer);
  background-color: #080807;
  color: #f4efeb;
  border-radius: var(--radius-xxl);

  @include mixins.mq("md") {
    padding: 72px var(--space-outer);
    gap: 110px;
  }
}

// 1. Telemetry Bar
.telemetry-bar {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 24px 32px;
  background-color: #111110;
  border: 1px solid rgba(244, 239, 235, 0.08);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  @include mixins.mq("md") {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 0;
  }
}

.telemetry-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 6px;
}

.telemetry-value {
  font-family: "JetBrains Mono", monospace;
  font-size: 26px;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: #f4efeb;

  &.text-red {
    color: #d5001c;
  }

  &.text-yellow {
    color: #f3c300;
  }
}

.telemetry-label {
  font-family: "JetBrains Mono", monospace;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #9e9a92;
}

.telemetry-divider {
  display: none;
  width: 1px;
  height: 40px;
  background-color: rgba(244, 239, 235, 0.08);

  @include mixins.mq("md") {
    display: block;
  }
}

// 2. Chapter Grid (Split Layout)
.chapter-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  align-items: center;

  @include mixins.mq("lg") {
    grid-template-columns: 1fr 1.1fr;
    gap: 64px;
  }

  &.reverse {
    @include mixins.mq("lg") {
      grid-template-columns: 1.1fr 1fr;

      .visual-card {
        order: 1;
      }

      .narrative-card {
        order: 2;
      }
    }
  }
}

.narrative-card {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.chapter-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 4px 12px;
  border-radius: 9999px;
  background-color: rgba(244, 239, 235, 0.04);
  border: 1px solid rgba(244, 239, 235, 0.1);
  font-family: "JetBrains Mono", monospace;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #9e9a92;
  width: fit-content;
}

.badge-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;

  &.bg-red {
    background-color: #d5001c;
    box-shadow: 0 0 8px rgba(213, 0, 28, 0.6);
  }

  &.bg-yellow {
    background-color: #f3c300;
    box-shadow: 0 0 8px rgba(243, 195, 0, 0.6);
  }
}

.chapter-title {
  font-size: 28px;
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.02em;
  color: #f4efeb;

  @include mixins.mq("md") {
    font-size: 34px;
  }
}

.chapter-paragraph {
  font-size: 15px;
  line-height: 1.75;
  color: #9e9a92;
}

.quote-callout {
  padding: 16px 20px;
  background-color: rgba(213, 0, 28, 0.06);
  border-left: 3px solid #d5001c;
  border-radius: 0 12px 12px 0;
  margin-top: 8px;
}

.quote-text {
  font-size: 14px;
  font-style: italic;
  line-height: 1.6;
  color: #f4efeb;
}

// Visual Card
.visual-card {
  width: 100%;
}

.visual-frame {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  background-color: #111110;
  border: 1px solid rgba(244, 239, 235, 0.1);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
}

.visual-image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.02);
  }
}

.visual-telemetry {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 12px 16px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.4) 70%, transparent 100%);
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: "JetBrains Mono", monospace;
  font-size: 10px;
  letter-spacing: 0.1em;
  color: #d1ccc4;
}

.status-indicator {
  width: 7px;
  height: 7px;
  border-radius: 50%;

  &.live {
    background-color: #22c55e;
    box-shadow: 0 0 8px #22c55e;
    animation: live-pulse 2s infinite;
  }
}

@keyframes live-pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(0.85); }
}

// 3. Design System Specimen
.design-system-section,
.open-bay-section,
.tech-deepdive-section {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.section-header {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 720px;
}

.section-title {
  font-size: 30px;
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.02em;
  color: #f4efeb;

  @include mixins.mq("md") {
    font-size: 38px;
  }
}

.section-desc {
  font-size: 15px;
  line-height: 1.7;
  color: #9e9a92;
}

.specimen-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  @include mixins.mq("lg") {
    grid-template-columns: 1fr 1.3fr;
  }
}

.specimen-card {
  padding: 32px;
  border-radius: 20px;
  background-color: #111110;
  border: 1px solid rgba(244, 239, 235, 0.08);
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.card-heading {
  font-family: "JetBrains Mono", monospace;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #d5001c;
}

.palette-swatches {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.swatch-item {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.swatch-color {
  width: 100%;
  height: 54px;
  border-radius: 10px;
  border: 1px solid rgba(254, 254, 254, 0.1);

  &.bg-obsidian { background-color: #080807; }
  &.bg-titanium { background-color: #111110; }
  &.bg-guards-red { background-color: #d5001c; }
  &.bg-ceramic-yellow { background-color: #f3c300; }
}

.swatch-name {
  font-size: 12px;
  font-weight: 600;
  color: #f4efeb;
}

.swatch-hex {
  font-family: "JetBrains Mono", monospace;
  font-size: 11px;
  color: #9e9a92;
}

.typo-samples {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.typo-item {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(244, 239, 235, 0.06);

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
}

.typo-tag {
  font-family: "JetBrains Mono", monospace;
  font-size: 10px;
  letter-spacing: 0.12em;
  color: #9e9a92;
}

.typo-preview {
  font-size: 16px;
  color: #f4efeb;

  &.font-display {
    font-weight: 800;
    font-size: 18px;
    letter-spacing: -0.01em;
  }

  &.font-mono {
    font-family: "JetBrains Mono", monospace;
    font-size: 13px;
    color: #f3c300;
  }
}

// VIP Highlight Card
.vip-highlight-card {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px 24px;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(213, 0, 28, 0.12) 0%, rgba(17, 17, 16, 0.8) 100%);
  border: 1px solid rgba(213, 0, 28, 0.25);
  margin-top: 8px;
}

.vip-badge {
  font-family: "JetBrains Mono", monospace;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.15em;
  color: #d5001c;
}

.vip-title {
  font-size: 16px;
  font-weight: 700;
  color: #f4efeb;
}

.vip-desc {
  font-size: 13px;
  color: #9e9a92;
}

// Full Media Frame
.full-media-frame {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  background-color: #111110;
  border: 1px solid rgba(244, 239, 235, 0.1);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
}

.full-media-img {
  width: 100%;
  height: auto;
  display: block;
}

.media-caption-bar {
  padding: 16px 24px;
  background-color: #111110;
  border-top: 1px solid rgba(244, 239, 235, 0.08);
  display: flex;
  flex-direction: column;
  gap: 4px;

  @include mixins.mq("md") {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}

.caption-tag {
  font-family: "JetBrains Mono", monospace;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.14em;
  color: #f3c300;
}

.caption-text {
  font-size: 13px;
  color: #9e9a92;
}

// Glass Cards Grid
.glass-cards-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @include mixins.mq("sm") {
    grid-template-columns: repeat(2, 1fr);
  }

  @include mixins.mq("lg") {
    grid-template-columns: repeat(4, 1fr);
  }
}

.glass-card {
  padding: 24px;
  border-radius: 16px;
  background-color: #111110;
  border: 1px solid rgba(244, 239, 235, 0.08);
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: transform 0.3s ease, border-color 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(244, 239, 235, 0.2);
  }
}

.card-num {
  font-family: "JetBrains Mono", monospace;
  font-size: 12px;
  font-weight: 800;
  color: #d5001c;
}

.card-title {
  font-size: 18px;
  font-weight: 700;
  color: #f4efeb;
}

.card-desc {
  font-size: 13px;
  line-height: 1.6;
  color: #9e9a92;
}

// Interlude Container
.interlude-container {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  height: 360px;
  border: 1px solid rgba(244, 239, 235, 0.1);

  @include mixins.mq("md") {
    height: 440px;
  }
}

.interlude-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.65) contrast(1.1);
}

.interlude-overlay {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, rgba(0, 0, 0, 0.4) 0%, rgba(8, 8, 7, 0.85) 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 24px;
  gap: 16px;
}

.interlude-sub {
  font-family: "JetBrains Mono", monospace;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.2em;
  color: #d5001c;
}

.interlude-quote {
  font-size: 24px;
  font-weight: 700;
  font-style: italic;
  line-height: 1.35;
  color: #f4efeb;
  max-width: 600px;

  @include mixins.mq("md") {
    font-size: 32px;
  }
}

// Badges Row
.badges-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 8px;
}

.tech-pill {
  font-family: "JetBrains Mono", monospace;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  padding: 6px 12px;
  border-radius: 8px;
  background-color: rgba(244, 239, 235, 0.04);
  border: 1px solid rgba(244, 239, 235, 0.1);
  color: #f4efeb;
}

// Chips Specimen
.chips-specimen {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 8px;
}

.chips-label {
  font-family: "JetBrains Mono", monospace;
  font-size: 10px;
  letter-spacing: 0.12em;
  color: #9e9a92;
}

.chips-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.chip-item {
  font-family: "JetBrains Mono", monospace;
  font-size: 11px;
  padding: 6px 12px;
  border-radius: 8px;
  background-color: rgba(244, 239, 235, 0.04);
  border: 1px solid rgba(244, 239, 235, 0.1);
  color: #9e9a92;

  &.active {
    background-color: rgba(213, 0, 28, 0.15);
    border-color: #d5001c;
    color: #f4efeb;
  }
}

// 8. Tech Deepdive Bento Grid
.tech-bento-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @include mixins.mq("sm") {
    grid-template-columns: repeat(2, 1fr);
  }

  @include mixins.mq("lg") {
    grid-template-columns: repeat(3, 1fr);
  }
}

.bento-box {
  padding: 28px;
  border-radius: 18px;
  background-color: #111110;
  border: 1px solid rgba(244, 239, 235, 0.08);
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: transform 0.3s ease, border-color 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(213, 0, 28, 0.4);
  }
}

.bento-icon {
  font-size: 24px;
}

.bento-title {
  font-size: 17px;
  font-weight: 700;
  color: #f4efeb;
}

.bento-desc {
  font-size: 13px;
  line-height: 1.65;
  color: #9e9a92;
}
</style>
