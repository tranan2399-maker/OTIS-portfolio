<script setup lang="ts">
import { computed } from "vue";
import { locale } from "../../../i18n/store";

import img01HomeHero from "../../../assets/images/projects/dream-cinema/01-home-hero.webp";
import img02NowShowing from "../../../assets/images/projects/dream-cinema/02-now-showing.webp";
import img03MovieDetail from "../../../assets/images/projects/dream-cinema/03-movie-detail.webp";
import img04Showtimes from "../../../assets/images/projects/dream-cinema/04-showtimes.webp";
import img05SeatScreen from "../../../assets/images/projects/dream-cinema/05-seat-screen.webp";
import img06SeatSelected from "../../../assets/images/projects/dream-cinema/06-seat-selected.webp";
import img07Concessions from "../../../assets/images/projects/dream-cinema/07-concessions-food.webp";
import img08Payment from "../../../assets/images/projects/dream-cinema/08-payment-checkout.webp";
import img09VietQR from "../../../assets/images/projects/dream-cinema/09-vietqr-modal.webp";

const isVi = computed(() => locale.value !== "en");
</script>

<template>
  <div class="showcase">
    <!-- 1. Quick Telemetry Metrics Bar -->
    <section class="telemetry-bar">
      <div class="telemetry-item">
        <span class="telemetry-value text-red">&lt; 120ms</span>
        <span class="telemetry-label">{{ isVi ? "Tìm kiếm & Lọc suất chiếu tức thì" : "Instant Showtime Search & Filter" }}</span>
      </div>
      <div class="telemetry-divider"></div>
      <div class="telemetry-item">
        <span class="telemetry-value text-gold">140 GIÂY</span>
        <span class="telemetry-label">{{ isVi ? "Khóa ghế & Giữ chỗ tạm thời" : "Temporary Seat Reservation Lock" }}</span>
      </div>
      <div class="telemetry-divider"></div>
      <div class="telemetry-item">
        <span class="telemetry-value text-gold">2 HẠNG GHẾ</span>
        <span class="telemetry-label">{{ isVi ? "Ghế Thường & Ghế VIP chuẩn rạp" : "Standard & VIP Cinema Seating" }}</span>
      </div>
      <div class="telemetry-divider"></div>
      <div class="telemetry-item">
        <span class="telemetry-value text-red">ĐA KÊNH</span>
        <span class="telemetry-label">{{ isVi ? "Thanh toán VietQR, MoMo & VNPAY" : "VietQR, MoMo & VNPAY Gateways" }}</span>
      </div>
    </section>

    <!-- 2. Chapter 1: Project Overview & Digital Cinema Experience -->
    <section class="chapter-grid">
      <div class="narrative-card">
        <div class="chapter-badge">
          <span class="badge-dot bg-red"></span>
          <span>{{ isVi ? "CHƯƠNG 01 · TỔNG QUAN DỰ ÁN" : "CHAPTER 01 · PROJECT OVERVIEW" }}</span>
        </div>
        <h2 class="chapter-title">
          {{ isVi ? "Dream Cinema — Nền Tảng Đặt Vé Điện Ảnh Số Chuẩn Dark Luxury" : "Dream Cinema — Dark Luxury Digital Cinema Platform" }}
        </h2>
        <p class="chapter-paragraph">
          {{
            isVi
              ? "Dream Cinema là nền tảng web ứng dụng đặt vé xem phim trực tuyến full-stack cao cấp, được thiết kế theo phong cách Stitch Dark Luxury Cinema đồng bộ từ trải nghiệm khám phá phim cho đến toàn bộ quy trình đặt vé và thanh toán tự động. Dự án giải quyết triệt để sự cồng kềnh, phân mảnh của các trang web rạp chiếu truyền thống bằng một luồng tương tác mượt mà chuẩn 60fps: hiển thị trực quan trailer phim độ nét cao, sơ đồ phòng chiếu cong vòm sinh động, cơ chế khóa ghế thời gian thực khi chọn chỗ và thanh toán trực tuyến đa kênh (VietQR, MoMo, VNPAY)."
              : "Dream Cinema is a premium full-stack movie ticketing platform designed in a cohesive Stitch Dark Luxury Cinema aesthetic, spanning from visual film discovery to automated real-time ticket checkout. The platform eliminates the friction and visual clutter of conventional cinema websites with a silky 60fps end-to-end user flow: high-definition trailers, an immersive curved cinema screen arc, a 140-second temporary seat hold countdown, and multi-channel online checkout (VietQR, MoMo, VNPAY)."
          }}
        </p>
        <div class="quote-callout">
          <p class="quote-text">
            {{
              isVi
                ? "“Một trải nghiệm điện ảnh trọn vẹn bắt đầu ngay từ thời khắc người xem chọn ghế: màn hình vòm phát sáng, sơ đồ phân hạng ghế Thường & VIP rõ ràng và tấm vé số điện tử xuất hiện tức thì.”"
                : "“The cinema experience begins the very moment a moviegoer reserves their seat: an illuminated screen arc, clearly defined Standard & VIP seating tiers, and an instantly issued digital ticket.”"
            }}
          </p>
        </div>
      </div>

      <div class="visual-card">
        <div class="visual-frame">
          <img :src="img01HomeHero" alt="Dream Cinema Hero Banner" class="visual-image" loading="eager" />
          <div class="visual-telemetry">
            <span class="status-indicator live"></span>
            <span>CINEMA HERO SPOTLIGHT · FLOATING GLASS NAVIGATION · QUICK BOOKING ENGINE</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. Chapter 2: Bespoke Design System & Stitch Cinema Materiality -->
    <section class="design-system-section">
      <div class="section-header">
        <div class="chapter-badge">
          <span class="badge-dot bg-gold"></span>
          <span>{{ isVi ? "CHƯƠNG 02 · HỆ THỐNG THIẾT KẾ ĐỘC BẢN" : "CHAPTER 02 · BESPOKE DESIGN SYSTEM" }}</span>
        </div>
        <h2 class="section-title">
          {{ isVi ? "Ngôn Ngữ Stitch Dark Cinema & Bộ Ba Phông Chữ Điện Ảnh" : "Stitch Dark Cinema Materiality & Precision Typography Trio" }}
        </h2>
        <p class="section-desc">
          {{
            isVi
              ? "Hệ thống giao diện sử dụng ngôn ngữ ánh sáng phòng chiếu: kết hợp nền Cinema Midnight (#0E1017), các lớp bề mặt Cinema Surface (#161822), hai điểm nhấn màu điện ảnh là Scarlet Red (#E50914) và Golden Ticket (#F59E0B) cùng bộ ba font chữ phân tầng rõ rệt."
              : "The design system harnesses the atmospheric lighting of a luxury screening hall: blending Cinema Midnight (#0E1017) and Cinema Surface (#161822) panels with iconic accents (Scarlet Red #E50914 & Golden Ticket #F59E0B) and a deliberate three-tier typography hierarchy."
          }}
        </p>
      </div>

      <div class="specimen-grid">
        <!-- Palette Bento -->
        <div class="specimen-card palette-card">
          <h3 class="card-heading">{{ isVi ? "Bảng Màu Phòng Chiếu Đêm" : "Cinema Atmospheric Palette" }}</h3>
          <div class="palette-swatches">
            <div class="swatch-item">
              <div class="swatch-color bg-midnight"></div>
              <span class="swatch-name">Cinema Midnight</span>
              <span class="swatch-hex">#0E1017</span>
            </div>
            <div class="swatch-item">
              <div class="swatch-color bg-surface"></div>
              <span class="swatch-name">Cinema Surface</span>
              <span class="swatch-hex">#161822</span>
            </div>
            <div class="swatch-item">
              <div class="swatch-color bg-scarlet-red"></div>
              <span class="swatch-name">Scarlet Cinema Red</span>
              <span class="swatch-hex">#E50914</span>
            </div>
            <div class="swatch-item">
              <div class="swatch-color bg-golden-ticket"></div>
              <span class="swatch-name">Golden Ticket</span>
              <span class="swatch-hex">#F59E0B</span>
            </div>
          </div>
        </div>

        <!-- Typography Bento -->
        <div class="specimen-card typo-card">
          <h3 class="card-heading">{{ isVi ? "Kiến Trúc Typography 3 Tầng" : "Three-Tier Typography Architecture" }}</h3>
          <div class="typo-samples">
            <div class="typo-item">
              <span class="typo-tag">DISPLAY HEADINGS</span>
              <span class="typo-preview font-display">Plus Jakarta Sans · Dramatic Cinema Titles</span>
            </div>
            <div class="typo-item">
              <span class="typo-tag">UI & BODY COPY</span>
              <span class="typo-preview font-sans">Inter · High-Legibility Movie Profiles & Synopses</span>
            </div>
            <div class="typo-item">
              <span class="typo-tag">SEAT CODES & TELEMETRY</span>
              <span class="typo-preview font-mono">JetBrains Mono · B4 · 18:30 PM · 175,000 VND · 140s</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. Chapter 3: Curved Screen Arc & Interactive Seating Matrix -->
    <section class="chapter-grid reverse">
      <div class="visual-card">
        <div class="visual-frame">
          <img :src="img06SeatSelected" alt="Interactive Seat Map & Hold Countdown" class="visual-image" loading="lazy" />
          <div class="visual-telemetry">
            <span class="status-indicator live"></span>
            <span>CURVED SCREEN ARC · SEAT B4 SELECTED · 140S SEAT HOLD COUNTDOWN · 175,000 VND</span>
          </div>
        </div>
      </div>

      <div class="narrative-card">
        <div class="chapter-badge">
          <span class="badge-dot bg-red"></span>
          <span>{{ isVi ? "CHƯƠNG 03 · TRẢI NGHIỆM CHỌN GHẾ VÒM" : "CHAPTER 03 · CURVED SEATING MATRIX" }}</span>
        </div>
        <h2 class="chapter-title">
          {{ isVi ? "Màn Hình Cong Stitch Cinema Arc & Cơ Chế Khóa Ghế 140s" : "Curved Screen Arc & 140-Second Seat Reservation Hold" }}
        </h2>
        <p class="chapter-paragraph">
          {{
            isVi
              ? "Sơ đồ phòng chiếu được xây dựng với đường cong vòm SVG mô phỏng góc nhìn thực tế từ khán phòng cùng luồng ánh sáng ambient chiếu rọi từ màn ảnh. Hệ thống phân định rõ ràng giữa Ghế Thường (Standard) và Ghế VIP với mức giá trực quan. Khi người dùng chọn ghế, hệ thống lập tức kích hoạt bộ đếm ngược 140 giây để giữ chỗ tạm thời và ngăn chặn tình trạng đặt trùng vé giữa các khách hàng, đồng thời sidebar bên phải tự động tính toán tổng tiền và áp dụng ưu đãi theo thời gian thực."
              : "The seating stage features an SVG curved screen arc mimicking the authentic sightlines of an auditorium with downward ambient lighting. The seat matrix clearly differentiates Standard and VIP seating tiers. Upon selecting a seat, a 140-second temporary hold countdown is activated to lock the seat against double-booking, while the sticky sidebar calculates prices and discounts on the fly."
          }}
        </p>

        <!-- Seating Chips Specimen matching actual UI -->
        <div class="chips-specimen">
          <div class="chips-header">
            <span class="chips-label">{{ isVi ? "CHÚ THÍCH PHÂN HẠNG GHẾ:" : "CINEMA SEATING TIERS & STATUS:" }}</span>
            <span class="hold-timer-badge">⏱ {{ isVi ? "GIỮ VÉ: 02:20" : "HOLD: 02:20" }}</span>
          </div>
          <div class="chips-wrap">
            <span class="chip-item seat-empty"><span class="seat-dot bg-empty"></span>{{ isVi ? "Ghế trống · 85K" : "Available · 85K" }}</span>
            <span class="chip-item seat-selected active"><span class="seat-dot bg-selected"></span>{{ isVi ? "Đang chọn (B4)" : "Selected (B4)" }}</span>
            <span class="chip-item seat-vip"><span class="seat-dot bg-vip"></span>{{ isVi ? "Ghế VIP · 105K" : "VIP Lounge · 105K" }}</span>
            <span class="chip-item seat-occupied"><span class="seat-dot bg-occupied"></span>{{ isVi ? "Đã đặt (✕)" : "Occupied (✕)" }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Full-bleed Screen Arc Spotlight -->
    <div class="full-media-frame">
      <img :src="img05SeatScreen" alt="Curved Cinema Screen Layout" class="full-media-img" loading="lazy" />
      <div class="media-caption-bar">
        <span class="caption-tag">{{ isVi ? "KIẾN TRÚC PHÒNG CHIẾU" : "HALL ARCHITECTURE" }}</span>
        <span class="caption-text">{{ isVi ? "Góc nhìn toàn cảnh phòng chiếu với màn hình cong vòm SVG phát sáng và ma trận ghế thông minh" : "Panoramic auditorium overview featuring illuminated SVG screen arc and smart seating matrix" }}</span>
      </div>
    </div>

    <!-- 5. Chapter 4: Multi-Format Filters & Multi-Location Showtimes -->
    <section class="chapter-grid">
      <div class="narrative-card">
        <div class="chapter-badge">
          <span class="badge-dot bg-gold"></span>
          <span>{{ isVi ? "CHƯƠNG 04 · LỊCH CHIẾU THÔNG MINH" : "CHAPTER 04 · SMART SHOWTIME ENGINE" }}</span>
        </div>
        <h2 class="chapter-title">
          {{ isVi ? "Bộ Lọc Định Dạng Chuẩn Xác & Phân Phối Lịch Chiếu Đa Cụm Rạp" : "Multi-Format Cinema Filters & Multi-Location Showtimes" }}
        </h2>
        <p class="chapter-paragraph">
          {{
            isVi
              ? "Hệ sinh thái phim đang chiếu và sắp chiếu được cấu trúc phân loại linh hoạt theo ngày, thể loại và định dạng rạp cao cấp (2D Digital, 3D, IMAX Laser, 4DX, ScreenX). Hệ thống lịch chiếu thông minh liên kết thời gian thực giữa các cụm rạp tại Hà Nội, TP. Hồ Chí Minh và Đà Nẵng: người xem có thể kiểm tra nhanh suất chiếu theo khung giờ sáng - chiều - tối, xem tỷ lệ ghế trống trước khi click và truy cập trực tiếp bảng phân loại độ tuổi điện ảnh (T18, T16, T13, P)."
              : "The movie catalog categorizes now-showing and upcoming titles by calendar date, genre, and premium projection formats (2D Digital, 3D, IMAX Laser, 4DX, ScreenX). The smart showtime grid synchronizes across major cinema clusters in Hanoi, Ho Chi Minh City, and Da Nang: moviegoers can quickly scan morning, afternoon, and evening slots, inspect seat vacancy ratios before entering, and reference official film ratings (T18, T16, T13, P)."
          }}
        </p>

        <div class="badges-row">
          <span class="format-pill active">TẤT CẢ</span>
          <span class="format-pill">2D DIGITAL</span>
          <span class="format-pill">3D DIGITAL</span>
          <span class="format-pill">IMAX LASER</span>
          <span class="format-pill">4DX MOTION</span>
          <span class="format-pill">SCREENX 270°</span>
        </div>
      </div>

      <div class="visual-card">
        <div class="visual-frame">
          <img :src="img04Showtimes" alt="Smart Showtime Schedule by Cinema Cluster" class="visual-image" loading="lazy" />
          <div class="visual-telemetry">
            <span>REAL-TIME SHOWTIMES · MULTI-CITY CLUSTERS · SEAT AVAILABILITY MATRIX</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Secondary Media Spotlight: Movie Detail Modal -->
    <div class="dual-media-grid">
      <div class="media-column-card">
        <img :src="img02NowShowing" alt="Now Showing Catalog" class="column-media-img" loading="lazy" />
        <div class="column-caption">
          <span class="caption-tag">{{ isVi ? "DANH MỤC PHIM" : "FILM CATALOG" }}</span>
          <span class="caption-text">{{ isVi ? "Giao diện bộ lọc định dạng phòng chiếu và nhãn kiểm duyệt độ tuổi" : "Projection format filters and age classification labels" }}</span>
        </div>
      </div>
      <div class="media-column-card">
        <img :src="img03MovieDetail" alt="Movie Detail Modal" class="column-media-img" loading="lazy" />
        <div class="column-caption">
          <span class="caption-tag">{{ isVi ? "CHI TIẾT ĐIỆN ẢNH" : "FILM PROFILE" }}</span>
          <span class="caption-text">{{ isVi ? "Hồ sơ phim với trailer chuẩn HD, đạo diễn, dàn diễn viên và đánh giá khán giả" : "Film dossier featuring HD trailer, director, cast, and audience reviews" }}</span>
        </div>
      </div>
    </div>

    <!-- 6. Chapter 5: 4-Stage Booking Pipeline & Concessions -->
    <section class="chapter-grid reverse">
      <div class="visual-card">
        <div class="visual-frame">
          <img :src="img07Concessions" alt="Concessions Menu & Stepper Controls" class="visual-image" loading="lazy" />
          <div class="visual-telemetry">
            <span>CONCESSIONS STEPPER · SMART COMBO BUNDLE · ONE-TAP SKIP TO CHECKOUT</span>
          </div>
        </div>
      </div>

      <div class="narrative-card">
        <div class="chapter-badge">
          <span class="badge-dot bg-red"></span>
          <span>{{ isVi ? "CHƯƠNG 05 · DÂY CHUYỀN ĐẶT VÉ" : "CHAPTER 05 · 4-STAGE BOOKING PIPELINE" }}</span>
        </div>
        <h2 class="chapter-title">
          {{ isVi ? "Mạch Dẫn Quy Trình Đặt Vé & Tối Ưu Tỷ Lệ Chuyển Đổi" : "Illuminated Booking Conduit & Conversion Architecture" }}
        </h2>
        <p class="chapter-paragraph">
          {{
            isVi
              ? "Luồng đặt vé được thiết kế dạng dây chuyền liên tục 4 chặng có đèn LED định vị tiến trình: STAGE I (Khám phá phim & chọn suất chiếu) → STAGE II (Chọn ghế vòm & khóa chỗ 140s) → STAGE III (Chọn combo bắp nước với bộ đếm thông minh) → STAGE IV (Thanh toán đa kênh & nhận vé điện tử QR). Việc chia chặng mạch lạc kết hợp nút bỏ qua nhanh (Skip to Payment) giúp giảm thiểu tối đa tỷ lệ hủy đơn (drop-off rate), mang lại trải nghiệm mua vé nhanh gọn chỉ trong dưới 60 giây."
              : "The booking journey is architected as an illuminated 4-stage pipeline with active progress indicators: STAGE I (Movie & Showtime Selection) → STAGE II (Arc Seat Picking with 140s Hold) → STAGE III (Concessions Combo Add-ons) → STAGE IV (Multi-Channel Payment & Digital QR Ticket). This frictionless flow with a quick skip option minimizes checkout drop-off, allowing guests to complete ticket purchases in under 60 seconds."
          }}
        </p>

        <!-- Pipeline Stages Specimen styled exactly like Dream Cinema Breadcrumbs -->
        <div class="cinema-pipeline">
          <div class="pipeline-step completed">
            <span class="step-num">1</span>
            <span class="step-text">🎟 {{ isVi ? "Chọn ghế" : "Select Seats" }}</span>
          </div>
          <div class="pipeline-arrow">→</div>
          <div class="pipeline-step active">
            <span class="step-num">2</span>
            <span class="step-text">🍿 {{ isVi ? "Bắp nước" : "Concessions" }}</span>
          </div>
          <div class="pipeline-arrow">→</div>
          <div class="pipeline-step">
            <span class="step-num">3</span>
            <span class="step-text">💳 {{ isVi ? "Thanh toán" : "Checkout" }}</span>
          </div>
          <div class="pipeline-arrow">→</div>
          <div class="pipeline-step">
            <span class="step-num">4</span>
            <span class="step-text">⏱ {{ isVi ? "Hoàn tất" : "Confirmation" }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 7. Chapter 6: Automated VietQR Gateway & Checkout Verification -->
    <section class="chapter-grid">
      <div class="narrative-card">
        <div class="chapter-badge">
          <span class="badge-dot bg-gold"></span>
          <span>{{ isVi ? "CHƯƠNG 06 · THANH TOÁN TỰ ĐỘNG" : "CHAPTER 06 · AUTOMATED VIETQR GATEWAY" }}</span>
        </div>
        <h2 class="chapter-title">
          {{ isVi ? "Tự Động Sinh Mã VietQR MBBank & Xác Thực Thanh Toán Tức Thì" : "Automated VietQR Dynamic Code Generation & Instant Verification" }}
        </h2>
        <p class="chapter-paragraph">
          {{
            isVi
              ? "Dự án tích hợp cổng thanh toán VietQR MBBank tự động hóa toàn diện: hệ thống tự động sinh mã QR động kèm số tiền chính xác và cú pháp mã hóa tham chiếu riêng biệt cho từng vé. Khách hàng chỉ cần mở bất kỳ ứng dụng ngân hàng hoặc ví điện tử để quét mã và thanh toán trong 3 giây. Phía client liên tục polling xác thực trạng thái giao dịch theo thời gian thực và tự động chuyển hướng đến màn hình vé điện tử (E-Ticket) có mã QR soát vé tại cửa rạp."
              : "The platform features a fully automated VietQR MBBank payment gateway: dynamically generating branded QR codes encoded with the exact order total and booking reference. Moviegoers scan and approve via any banking app in 3 seconds. Real-time client polling verifies payment confirmation, instantly transitioning guests to their digital ticket screen complete with entrance QR boarding pass."
          }}
        </p>

        <div class="payment-methods-strip">
          <div class="method-card active">
            <span class="method-tag">{{ isVi ? "KHUYÊN DÙNG" : "RECOMMENDED" }}</span>
            <span class="method-title">VietQR (Tự Động)</span>
            <span class="method-desc">{{ isVi ? "Quét mã QR chuyển khoản trực tiếp STK ngân hàng" : "Instant dynamic QR transfer via Napas 247" }}</span>
          </div>
          <div class="method-card">
            <span class="method-tag">{{ isVi ? "PHỔ BIẾN" : "POPULAR" }}</span>
            <span class="method-title">VNPAY-QR / Thẻ ATM</span>
            <span class="method-desc">{{ isVi ? "Hỗ trợ 40+ ứng dụng ngân hàng & thẻ quốc tế" : "40+ banking apps, Visa, Master, JCB" }}</span>
          </div>
          <div class="method-card">
            <span class="method-tag">E-WALLET</span>
            <span class="method-title">Ví Điện Tử MoMo</span>
            <span class="method-desc">{{ isVi ? "Thanh toán tức thì 1 chạm qua app MoMo" : "1-tap instant payment via MoMo app" }}</span>
          </div>
        </div>
      </div>

      <div class="visual-card">
        <div class="visual-frame">
          <img :src="img09VietQR" alt="Automated Dynamic VietQR Payment Modal" class="visual-image" loading="lazy" />
          <div class="visual-telemetry">
            <span class="status-indicator live"></span>
            <span>DYNAMIC VIETQR MBBANK · AUTOMATED POLLING VERIFICATION · ONE-TAP COPY</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Secondary Media: Payment Checkout Methods -->
    <div class="full-media-frame">
      <img :src="img08Payment" alt="Online Payment Screen" class="full-media-img" loading="lazy" />
      <div class="media-caption-bar">
        <span class="caption-tag">{{ isVi ? "CỔNG THANH TOÁN AN TOÀN" : "SECURE CHECKOUT" }}</span>
        <span class="caption-text">{{ isVi ? "Giao diện thanh toán bảo mật với tóm tắt vé điện tử, thời gian đếm ngược và các phương thức thanh toán phổ biến" : "Secure checkout interface featuring ticket summary, countdown timer, and leading payment providers" }}</span>
      </div>
    </div>

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
          <h4 class="bento-title">{{ isVi ? "React 18 + Vite + TypeScript" : "React 18 + Vite + TypeScript" }}</h4>
          <p class="bento-desc">
            {{ isVi ? "Kiến trúc SPA tối ưu hóa render với TypeScript Strict, chia tách chunk hiệu năng cao cho tốc độ tải trang ban đầu dưới 1 giây và đạt 100 điểm Lighthouse." : "Modular SPA architecture with strict TypeScript, high-performance chunk-splitting, sub-1s initial page load, and top-tier Lighthouse scores." }}
          </p>
        </div>

        <div class="bento-box">
          <div class="bento-icon">🛡️</div>
          <h4 class="bento-title">{{ isVi ? "Node.js & Express RESTful API" : "Node.js & Express RESTful API" }}</h4>
          <p class="bento-desc">
            {{ isVi ? "Hệ thống API RESTful phân tầng MVC rõ ràng, tích hợp middleware bảo mật CORS, helmet, rate-limiting chống tấn công DDoS và tối ưu phản hồi JSON." : "Layered MVC REST API architecture equipped with CORS, Helmet security headers, rate-limiting against DDoS, and optimized JSON payloads." }}
          </p>
        </div>

        <div class="bento-box">
          <div class="bento-icon">🍃</div>
          <h4 class="bento-title">{{ isVi ? "MongoDB Atlas & Mongoose Schemas" : "MongoDB Atlas & Mongoose Schemas" }}</h4>
          <p class="bento-desc">
            {{ isVi ? "Cơ sở dữ liệu NoSQL được đánh chỉ mục (indexing) chuyên sâu trên các trường suất chiếu, ngày tháng và trạng thái ghế, đảm bảo độ trễ truy vấn dưới 20ms." : "NoSQL database with deep indexing across showtimes, dates, and seat occupancy, maintaining query latency under 20ms." }}
          </p>
        </div>

        <div class="bento-box">
          <div class="bento-icon">⏱️</div>
          <h4 class="bento-title">{{ isVi ? "Cơ Chế Khóa Ghế & Giữ Chỗ Tạm Thời" : "140-Second Seat Reservation Hold" }}</h4>
          <p class="bento-desc">
            {{ isVi ? "Cơ chế đếm ngược giữ chỗ 140 giây với cập nhật tức thì (optimistic UI), tự động giải phóng ghế khi hết thời gian để tránh tình trạng đặt trùng vé giữa các khách hàng." : "140-second temporary reservation hold with optimistic client updates, auto-releasing expired seats to eliminate double-booking." }}
          </p>
        </div>

        <div class="bento-box">
          <div class="bento-icon">💳</div>
          <h4 class="bento-title">{{ isVi ? "Cổng Thanh Toán VietQR MBBank Tự Động" : "Automated Dynamic VietQR Gateway" }}</h4>
          <p class="bento-desc">
            {{ isVi ? "Tự động sinh mã VietQR theo chuẩn Napas 247 kèm mã đơn hàng duy nhất, kết hợp cơ chế polling kiểm tra biến động số dư và xác nhận đơn hàng không cần can thiệp thủ công." : "Dynamic VietQR generation conforming to Napas 247 standards, paired with background polling verifying transaction credit without manual review." }}
          </p>
        </div>

        <div class="bento-box">
          <div class="bento-icon">🔐</div>
          <h4 class="bento-title">{{ isVi ? "Bảo Mật JWT & Phân Quyền RBAC 3 Cấp" : "JWT Authentication & 3-Tier RBAC" }}</h4>
          <p class="bento-desc">
            {{ isVi ? "Mã hóa phiên đăng nhập bằng JSON Web Token với HTTP-only cookie, phân quyền chặt chẽ giữa Quản trị viên (Admin), Nhân viên soát vé (Staff) và Khách hàng (Customer)." : "JSON Web Token session encryption with HTTP-only cookies, enforcing strict role-based access control across Admin, Staff, and Customer tiers." }}
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
  background-color: #0e1017;
  color: #ffffff;
  border-radius: var(--radius-xxl);

  @include mixins.mq("md") {
    padding: 72px var(--space-outer);
    gap: 110px;
  }
}

// 1. Telemetry Bar
.telemetry-bar {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 24px 32px;
  background-color: #161822;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

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

  &.text-red {
    color: #e50914;
    text-shadow: 0 0 20px rgba(229, 9, 20, 0.4);
  }

  &.text-gold {
    color: #f59e0b;
    text-shadow: 0 0 20px rgba(245, 158, 11, 0.4);
  }
}

.telemetry-label {
  font-family: "JetBrains Mono", monospace;
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #9e9ea7;
}

.telemetry-divider {
  display: none;
  width: 1px;
  height: 36px;
  background-color: rgba(255, 255, 255, 0.1);

  @include mixins.mq("md") {
    display: block;
  }
}

// Chapter Badge
.chapter-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: "JetBrains Mono", monospace;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #cbd5e1;
  margin-bottom: 12px;
}

.badge-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;

  &.bg-red {
    background-color: #e50914;
    box-shadow: 0 0 10px #e50914;
  }

  &.bg-gold {
    background-color: #f59e0b;
    box-shadow: 0 0 10px #f59e0b;
  }
}

// 2. Chapter Grid (Split 50/50 Layout)
.chapter-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 36px;
  align-items: center;

  @include mixins.mq("md") {
    grid-template-columns: 1fr 1fr;
    gap: 60px;
  }

  &.reverse {
    @include mixins.mq("md") {
      & > .visual-card {
        order: 1;
      }
      & > .narrative-card {
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

.chapter-title {
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 28px;
  font-weight: 800;
  line-height: 1.25;
  letter-spacing: -0.02em;
  color: #ffffff;

  @include mixins.mq("md") {
    font-size: 34px;
  }
}

.chapter-paragraph {
  font-family: "Inter", sans-serif;
  font-size: 15px;
  line-height: 1.75;
  color: #cbd5e1;
}

// Quote Callout
.quote-callout {
  padding: 18px 24px;
  background-color: #161822;
  border-left: 3px solid #e50914;
  border-radius: 0 12px 12px 0;

  .quote-text {
    font-family: "Inter", sans-serif;
    font-style: italic;
    font-size: 14px;
    line-height: 1.6;
    color: #e2e8f0;
  }
}

// Visual Card
.visual-card {
  width: 100%;
}

.visual-frame {
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background-color: #161822;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.7);
  transition: transform 0.4s ease, border-color 0.4s ease;

  &:hover {
    border-color: rgba(229, 9, 20, 0.4);
    transform: translateY(-4px);
  }
}

.visual-image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

.visual-telemetry {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 18px;
  background-color: rgba(14, 16, 23, 0.95);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  font-family: "JetBrains Mono", monospace;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: #9e9ea7;
}

.status-indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #10b981;

  &.live {
    box-shadow: 0 0 8px #10b981;
    animation: pulseGlow 2s infinite;
  }
}

@keyframes pulseGlow {
  0% { opacity: 0.4; }
  50% { opacity: 1; }
  100% { opacity: 0.4; }
}

// 3. Design System Section
.design-system-section {
  display: flex;
  flex-direction: column;
  gap: 36px;
}

.section-header {
  max-width: 720px;
}

.section-title {
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 28px;
  font-weight: 800;
  line-height: 1.25;
  color: #ffffff;
  margin-bottom: 12px;

  @include mixins.mq("md") {
    font-size: 36px;
  }
}

.section-desc {
  font-family: "Inter", sans-serif;
  font-size: 15px;
  line-height: 1.7;
  color: #cbd5e1;
}

.specimen-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  @include mixins.mq("md") {
    grid-template-columns: 1fr 1fr;
  }
}

.specimen-card {
  padding: 28px;
  background-color: #161822;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

.card-heading {
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 20px;
}

.palette-swatches {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @include mixins.mq("md") {
    grid-template-columns: repeat(4, 1fr);
  }
}

.swatch-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 8px;
}

.swatch-color {
  width: 100%;
  height: 56px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.12);

  &.bg-midnight { background-color: #0e1017; }
  &.bg-surface { background-color: #161822; }
  &.bg-scarlet-red { background-color: #e50914; box-shadow: 0 0 15px rgba(229, 9, 20, 0.4); }
  &.bg-golden-ticket { background-color: #f59e0b; box-shadow: 0 0 15px rgba(245, 158, 11, 0.3); }
}

.swatch-name {
  font-family: "Inter", sans-serif;
  font-size: 12px;
  font-weight: 600;
  color: #ffffff;
}

.swatch-hex {
  font-family: "JetBrains Mono", monospace;
  font-size: 11px;
  color: #9e9ea7;
}

.typo-samples {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.typo-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.typo-tag {
  font-family: "JetBrains Mono", monospace;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: #f59e0b;
}

.typo-preview {
  font-size: 14px;
  color: #e2e8f0;

  &.font-display { font-family: "Plus Jakarta Sans", sans-serif; font-weight: 800; font-size: 16px; }
  &.font-sans { font-family: "Inter", sans-serif; }
  &.font-mono { font-family: "JetBrains Mono", monospace; font-size: 13px; color: #cbd5e1; }
}

// Chips Specimen (Seating Arc)
.chips-specimen {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 18px 22px;
  background-color: #161822;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
}

.chips-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.chips-label {
  font-family: "JetBrains Mono", monospace;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: #9e9ea7;
}

.hold-timer-badge {
  font-family: "JetBrains Mono", monospace;
  font-size: 11px;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 6px;
  background-color: rgba(229, 9, 20, 0.15);
  border: 1px solid rgba(229, 9, 20, 0.4);
  color: #ff334b;
}

.chips-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.chip-item {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: "JetBrains Mono", monospace;
  font-size: 11px;
  font-weight: 600;
  padding: 7px 14px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background-color: rgba(255, 255, 255, 0.03);
  color: #cbd5e1;

  .seat-dot {
    width: 10px;
    height: 10px;
    border-radius: 3px;

    &.bg-empty { background-color: #282b37; }
    &.bg-selected { background-color: #e50914; }
    &.bg-vip { background-color: #161822; border: 2px solid #f59e0b; }
    &.bg-occupied { background-color: #1a1c24; }
  }

  &.seat-vip {
    border-color: rgba(245, 158, 11, 0.4);
    color: #f59e0b;
    background-color: rgba(245, 158, 11, 0.08);
  }

  &.active {
    border-color: #e50914;
    color: #ffffff;
    background-color: #e50914;
    box-shadow: 0 4px 14px rgba(229, 9, 20, 0.4);
  }
}

// Format Pills
.badges-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.format-pill {
  font-family: "JetBrains Mono", monospace;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;
  padding: 7px 16px;
  border-radius: 8px;
  background-color: #161822;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #e2e8f0;
  transition: all 0.2s ease;

  &.active {
    background-color: #e50914;
    border-color: #e50914;
    color: #ffffff;
    box-shadow: 0 4px 12px rgba(229, 9, 20, 0.35);
  }
}

// Full Media Frame
.full-media-frame {
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background-color: #161822;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.7);
}

.full-media-img {
  width: 100%;
  height: auto;
  display: block;
}

.media-caption-bar {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 20px;
  background-color: rgba(14, 16, 23, 0.95);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.caption-tag {
  font-family: "JetBrains Mono", monospace;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  padding: 3px 8px;
  border-radius: 4px;
  background-color: #e50914;
  color: #ffffff;
}

.caption-text {
  font-family: "Inter", sans-serif;
  font-size: 13px;
  color: #cbd5e1;
}

// Dual Media Grid
.dual-media-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  @include mixins.mq("md") {
    grid-template-columns: 1fr 1fr;
  }
}

.media-column-card {
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background-color: #161822;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

.column-media-img {
  width: 100%;
  height: auto;
  display: block;
}

.column-caption {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  background-color: rgba(14, 16, 23, 0.95);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

// Cinema Pipeline (Matches Dream Cinema Breadcrumb Progress Bar)
.cinema-pipeline {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 18px 22px;
  background-color: #161822;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  flex-wrap: wrap;

  @include mixins.mq("md") {
    flex-wrap: nowrap;
  }
}

.pipeline-step {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  font-family: "JetBrains Mono", monospace;
  font-size: 11px;
  font-weight: 700;
  color: #9e9ea7;

  .step-num {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.1);
    font-size: 10px;
    color: #ffffff;
  }

  &.completed {
    background-color: rgba(16, 185, 129, 0.1);
    border-color: rgba(16, 185, 129, 0.3);
    color: #10b981;

    .step-num {
      background-color: #10b981;
      color: #ffffff;
    }
  }

  &.active {
    background-color: #e50914;
    border-color: #e50914;
    color: #ffffff;
    box-shadow: 0 4px 14px rgba(229, 9, 20, 0.4);

    .step-num {
      background-color: #ffffff;
      color: #e50914;
      font-weight: 800;
    }
  }
}

.pipeline-arrow {
  color: #4b5563;
  font-family: "JetBrains Mono", monospace;
  font-weight: 700;
}

// Payment Methods Strip
.payment-methods-strip {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
}

.method-card {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 16px 20px;
  background-color: #161822;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  position: relative;
  transition: border-color 0.3s ease;

  &.active {
    border-color: rgba(229, 9, 20, 0.5);
    background-color: rgba(229, 9, 20, 0.05);
  }

  .method-tag {
    font-family: "JetBrains Mono", monospace;
    font-size: 9px;
    font-weight: 800;
    letter-spacing: 0.1em;
    padding: 2px 6px;
    border-radius: 4px;
    background-color: #e50914;
    color: #ffffff;
    align-self: flex-start;
  }

  .method-title {
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: 15px;
    font-weight: 700;
    color: #ffffff;
  }

  .method-desc {
    font-family: "Inter", sans-serif;
    font-size: 12.5px;
    color: #9e9ea7;
  }
}

// 8. Technical Deep Dive Bento
.tech-deepdive-section {
  display: flex;
  flex-direction: column;
  gap: 36px;
}

.tech-bento-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @include mixins.mq("md") {
    grid-template-columns: repeat(3, 1fr);
  }
}

.bento-box {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 28px;
  background-color: #161822;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease, border-color 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(229, 9, 20, 0.4);
  }
}

.bento-icon {
  font-size: 28px;
}

.bento-title {
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 17px;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -0.01em;
}

.bento-desc {
  font-family: "Inter", sans-serif;
  font-size: 13.5px;
  line-height: 1.65;
  color: #cbd5e1;
}
</style>
