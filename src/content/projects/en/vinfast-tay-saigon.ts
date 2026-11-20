import img01Hero from "../../../assets/images/projects/vinfast-tay-saigon/01-showroom-hero.webp";
import img02Scooters from "../../../assets/images/projects/vinfast-tay-saigon/02-ev-scooters.webp";
import img03Services from "../../../assets/images/projects/vinfast-tay-saigon/03-services-aftersales.webp";
import img04Warranty from "../../../assets/images/projects/vinfast-tay-saigon/04-mobile-responsive.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "VinFast Tay Saigon",
  theme: "dark",
  tags: ["html", "css", "javascript", "design", "branding"],
  live: "https://vinfasttaysaigon.vercel.app",
  liveLabel: "Visit Live Showroom",
  source: "https://github.com/tranan2399-maker/vinfast-tay-saigon",
  components: [
    {
      type: "text",
      props: {
        title: "Project Vision & Brand Digitization",
        text: "VinFast Tay Saigon Digital Showroom serves as the flagship digital commerce and customer engagement portal for an authorized VinFast dealership in Ho Chi Minh City. Spanning over 53 production-ready pages, the platform covers comprehensive electric automotive portfolios (VF 3 to VF 9, Minio Green, Herio Green), smart electric scooters (Viper, Evo Grand, Feliz, Klara, Vento, Theon), and official after-sales services.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: img01Hero,
        alt: "VinFast Tay Saigon Showroom Homepage",
        caption: "Official VinFast Tay Saigon digital showroom featuring brand-standard design language and intuitive customer pathways",
        originalRatio: true,
      },
    },
    {
      type: "text",
      props: {
        title: "Multi-Tiered Product Architecture & Interactive Mega Menu",
        text: "Engineered with a responsive two-tiered hover navigation architecture distinguishing between electric SUVs and smart scooters. Every vehicle model features a dedicated Product Detail Page (PDP) with detailed specifications, battery subscription models, transparent pricing, and instant test-drive scheduling integrated directly with the dealership consultation desk.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: img02Scooters,
        alt: "VinFast Smart Electric Scooter Lineup",
        caption: "Next-generation smart electric scooter showcase with technical filter bar and on-the-road cost calculator",
        originalRatio: true,
      },
    },
    {
      type: "text",
      props: {
        title: "Authorized After-Sales & 9-Showroom Booking Network",
        text: "The dedicated After-Sales Service portal streamlines scheduled periodic maintenance, 24/7 mobile battery rescue, and certified technical repairs. An interactive filter across 9 regional showroom branches provides instant Google Maps geo-navigation and click-to-call emergency dispatch for EV drivers.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: img03Services,
        alt: "After-Sales Services & Maintenance Booking Portal",
        caption: "Digitalized service intake workflow, authorized workshop locator, and transparent labor pricing schedule",
        originalRatio: true,
      },
    },
    {
      type: "text",
      props: {
        title: "Mobile-First Optimization & Transparent Warranty Standards",
        text: "Extensively tuned for mobile devices with an ergonomic drawer navigation, 44x44px touch targets compliant with Apple Human Interface Guidelines, and zero layout shift. The 10-year battery warranty documentation is structured with semantic schema markup for optimal search engine authority.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: img04Warranty,
        alt: "Warranty Policies & Quality Commitment",
        caption: "Transparent warranty terms, LFP battery health standards, and comprehensive customer protection commitments",
        originalRatio: true,
      },
    },
    {
      type: "list",
      props: {
        title: "Key Technical Highlights",
        items: [
          "<strong>Complete 53-Page Production Suite:</strong> High-fidelity digital recreation and commercial enhancement of VinFast Auto's vehicle and service catalog.",
          "<strong>60px Mobile Header Precision:</strong> Solved complex CSS specificity hierarchy between `#header` ID and responsive utility classes, centering the brand logo with mathematical 38px precision.",
          "<strong>Ergonomic Touch Drawer:</strong> Smooth 44x44px touch targets ensuring comfortable single-thumb navigation across all smartphone viewports.",
          "<strong>Ultra-Fast Edge Delivery:</strong> Fully optimized WebP image pipeline deployed across Vercel Edge Network for lightning-fast mobile PageSpeed metrics.",
          "<strong>Direct Business Conversion:</strong> Integrated Zalo OA, 24/7 hotline click-to-call, and lead generation consultation forms.",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;

