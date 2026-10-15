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
  liveLabel: "Live View",
  components: [
    {
      type: "text",
      props: {
        title: "Project Positioning & Digital Cinema Experience",
        text: "Dream Cinema is a premium full-stack movie ticketing platform designed in a cohesive Stitch Dark Luxury Cinema aesthetic, spanning from visual film discovery to automated real-time ticket checkout. The platform eliminates the friction and visual clutter of conventional cinema websites with a silky 60fps end-to-end user flow: high-definition trailers, an immersive curved cinema screen arc, a 140-second temporary seat reservation hold, and multi-channel online checkout (VietQR, MoMo, VNPAY).",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: img01HomeHero,
        alt: "Dream Cinema Homepage in Dark Luxury Cinema Aesthetic",
        caption: "Cinematic Hero Banner & Homepage with floating glass navigation bar and quick booking widget",
        originalRatio: true,
      },
    },
    {
      type: "text",
      props: {
        title: "Film Catalog & Multi-Format Projection Filters",
        text: "The catalog organizes now-showing and upcoming titles by calendar date, genre, and premium projection formats such as 2D Digital, 3D, IMAX Laser, 4DX, and ScreenX. Moviegoers can watch high-definition trailers, inspect age classification badges, and jump straight into showtime selection.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: img02NowShowing,
        alt: "Now showing movie collection with format filters",
        caption: "Now showing collection with projection format filters and age rating badges",
        originalRatio: true,
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: img03MovieDetail,
        alt: "Film dossier and audience ratings",
        caption: "Detailed movie profile showing cast, director, age rating, and audience reviews",
        originalRatio: true,
      },
    },
    {
      type: "text",
      props: {
        title: "Smart Multi-Cinema Showtime Distribution",
        text: "Real-time showtimes schedule synchronized across multiple cinema locations in Hanoi, Ho Chi Minh City, and Da Nang. Users can filter by calendar day, theater format, and inspect seat vacancy ratios before entering.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: img04Showtimes,
        alt: "Interactive cinema showtime schedule",
        caption: "Interactive showtime schedule by date, time slot, and screening room format",
        originalRatio: true,
      },
    },
    {
      type: "text",
      props: {
        title: "Curved Cinema Screen & 140-Second Seat Hold Engine",
        text: "Featuring a custom SVG curved screen arc with downward ambient illumination mimicking a real theater hall. The seat map clearly differentiates Standard and VIP seating tiers with live availability indicators, a 140-second temporary reservation hold timer to prevent double-booking, and a real-time price calculator sidebar.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: img05SeatScreen,
        alt: "Curved cinema screen layout",
        caption: "Theater seating layout with glowing curved arc and seat status legend",
        originalRatio: true,
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: img06SeatSelected,
        alt: "Real-time seat selection and ticket sidebar",
        caption: "Interactive seat picking with real-time price summary and 140s hold countdown",
        originalRatio: true,
      },
    },
    {
      type: "text",
      props: {
        title: "Concessions Menu & Streamlined Checkout Conduit",
        text: "Includes a popcorn & drinks concessions combo selector with stepper controls, a one-tap skip option, and a secure checkout gateway supporting automated VietQR MBBank, MoMo wallet, and ATM/VNPay cards for purchases completed in under 60 seconds.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: img07Concessions,
        alt: "Popcorn and beverage concessions menu",
        caption: "Concessions combo menu with per-ticket quantity validation and quick forward step",
        originalRatio: true,
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: img08Payment,
        alt: "Online ticket checkout",
        caption: "Secure payment screen supporting VietQR, MoMo, and card gateways",
        originalRatio: true,
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: img09VietQR,
        alt: "Automated VietQR MBBank modal dialog",
        caption: "Dedicated VietQR MBBank modal with automatic order code generation and 1-tap copy",
        originalRatio: true,
      },
    },
    {
      type: "list",
      props: {
        title: "Key Engineering Solutions & Technical Architecture",
        items: [
          "<strong>High-Velocity Frontend Architecture:</strong> Engineered on <strong>React 18 + Vite + TypeScript</strong> with strict typing, optimized chunk-splitting, and sub-1s initial page load.",
          "<strong>Modular RESTful Backend:</strong> <strong>Node.js & Express API</strong> organized in layered MVC patterns with CORS, Helmet, and rate-limiting security middleware.",
          "<strong>Optimized Database Architecture:</strong> <strong>MongoDB Atlas & Mongoose Schemas</strong> with specialized indexing on showtime dates and seat states.",
          "<strong>140-Second Seat Reservation Hold:</strong> Temporary reservation hold mechanism with optimistic updates, auto-releasing expired seats to eliminate double-booking.",
          "<strong>Automated VietQR MBBank Integration:</strong> Dynamic VietQR generation conforming to Napas 247 standards, paired with background polling verification and instant e-ticket issuance.",
          "<strong>Security & 3-Tier RBAC:</strong> JWT session encryption with HTTP-only cookies, enforcing strict role-based access control across Admin, Staff, and Customer tiers.",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
