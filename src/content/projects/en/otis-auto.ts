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
  liveLabel: "Live View",
  components: [
    {
      type: "text",
      props: {
        title: "Project Positioning & Core Vision",
        text: "OTIS AUTO is a bespoke digital flagship web application engineered for an independent Porsche specialist workshop in San Francisco. The platform bridges high-precision automotive engineering with modern digital standards: replacing generic automotive websites with a tactile, transparent, and high-performance digital flagship crafted to match the engineering pedigree of Stuttgart sports cars.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: img01Hero,
        alt: "OTIS AUTO Hero Section featuring German mechanical editorial styling",
        caption:
          "Frosted Cockpit Header featuring a live dual-ring radar beacon tracking San Francisco shop hours, PDK transmission drive-mode language switcher, and PIWIS III factory telemetry matrix",
        originalRatio: true,
      },
    },
    {
      type: "text",
      props: {
        title: "Bespoke Design System: Stuttgart Materiality & Precision Typography Trio",
        text: "The OTIS AUTO design system derives its visual language directly from the Porsche 911 cabin: blending deep Obsidian (#080807) black, Titanium (#111110) panels, 1px metallic hairline dividers, and two iconic motorsport accents — Guards Red (#D5001C) caliper highlights and Ceramic Brake Yellow (#F3C300). The typographic hierarchy orchestrates three purposeful typefaces: Plus Jakarta Sans for razor-sharp aerodynamic titles, Inter for high-legibility interface copy, and JetBrains Mono for Porsche chassis generation codes (992, 991, 997, 718 GT4, Taycan EV, Air-Cooled) and OBD telemetry data.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: img02Services,
        alt: "Interactive service matrix with optical crosshairs and Flat-6 engine",
        caption:
          "Interactive Service Matrix: Left column locks a sticky diagnostic viewport stage with optical crosshairs (+), updating genuine Flat-6 4.0L boxer engine views in real-time as users explore services",
        originalRatio: true,
      },
    },
    {
      type: "text",
      props: {
        title: "Visualizing Technical Services: Interactive Viewport Stage & VIP Intake",
        text: "Moving away from conventional static catalogs, OTIS AUTO introduces an 'Interactive Viewport Stage': hovering or selecting service items instantly synchronizes the left diagnostic viewport with high-resolution Flat-6 engine visuals and technical specifications at silky 60fps. Transparent starting rates and turnaround hours are displayed upfront, paired with a prominent 'VIP Complimentary Lift Inspection' card as an organic, trust-building intake touchpoint.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: img03Craft,
        alt: "Complimentary Lift Inspection VIP Card and Ceramic Brake Detail",
        caption:
          "VIP Complimentary Lift Inspection card featuring a 2-Year / 24,000-Mile warranty on all genuine Porsche OEM parts and labor",
        originalRatio: true,
      },
    },
    {
      type: "text",
      props: {
        title: "The 'Open Bay' Philosophy & Editorial Visual Interlude",
        text: "Addressing the friction around opacity in high-end automotive care, the platform translates the 'Open Bay Policy' into four titanium glass commitment cards (// 01 to // 04): welcoming owners directly onto the workshop floor beneath hydraulic lifts, sending live HD photo/video updates during tear-down, and strictly upholding a Zero-Upsell standard. Immediately following, a cinematic visual interlude showcases the Carrera taillight against Ferdinand Porsche's timeless credo, creating an editorial reading cadence reminiscent of a luxury automotive monograph.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: img04Philosophy,
        alt: "Open Bay Policy Glass Cards and Porsche Carrera Taillight Interlude",
        caption:
          "Titanium glass cards articulating the radical transparency protocol, paired with an editorial visual interlude celebrating Ferdinand Porsche's engineering ethos",
        originalRatio: true,
      },
    },
    {
      type: "text",
      props: {
        title: "Illuminated 4-Stage Conduit Pipeline & Master Craftsmen Dossiers",
        text: "The workshop workflow is presented through an illuminated horizontal conduit pipeline featuring four distinct milestones with active status LEDs: STAGE I (Joint intake walkaround) → STAGE II (Digital estimate with photo approval) → STAGE III (Active bay execution) → STAGE IV (Dynamic road test & return of retired OEM parts). The decoupled conduit track preserves clean card border geometry, leading directly into verified profiles of the resident master technicians (Porsche Gold Master ASE, Glasurit Master, and PIWIS III Lead).",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: img05Process,
        alt: "Connected 4-stage process conduit and master craftsmen dossiers",
        caption:
          "Connected 4-stage conduit pipeline with dedicated LED stage beacons, accompanied by verified master technician credentials and factory certifications",
        originalRatio: true,
      },
    },
    {
      type: "text",
      props: {
        title: "Owner Review Registry & Cockpit Intake Configurator",
        text: "The platform features a touch-optimized 'Direct From The Cockpit' review carousel spanning diverse Porsche generations. The UX journey culminates in the Bespoke Booking Configurator: one-touch chassis selector chips (992 GT3 RS, 991, 997, 718, Taycan EV, Air-Cooled) that auto-populate vehicle specifications, smart calendar logic disabling closed days, real-time bay intake availability ('BAY 4 AVAILABLE'), and instant generation of a personalized digital intake dossier (#PO-SF-740).",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: img06Booking,
        alt: "Verified Owner Reviews and Bespoke Cockpit Intake Configurator",
        caption:
          "Bespoke Workshop Configurator: Interactive chassis chips, live bay availability indicator, genuine Alcantara GT3 cockpit photography, and personalized intake confirmation",
        originalRatio: true,
      },
    },
    {
      type: "list",
      props: {
        title: "Key Engineering Solutions & Technical Architecture",
        items: [
          "<strong>High-Velocity Frontend Architecture:</strong> Engineered entirely on <strong>React 19 + TailwindCSS 4 + Vite 8</strong>, achieving sub-90KB gzip bundles and sub-800ms production build speeds.",
          "<strong>Real-time Facility Timezone Engine:</strong> Computes workshop open/closed status dynamically against Pacific Time (<code>America/Los_Angeles</code>) using native <code>Intl.DateTimeFormat</code> APIs, driving a dual-ring animated radar beacon with zero external API latency.",
          "<strong>PDK Transmission Mode Switcher:</strong> Segmented drive-mode switch for instant bilingual English-Vietnamese language toggling with zero layout-shift and automatic LocalStorage persistence.",
          "<strong>Eradicating iOS Safari Auto-Zoom:</strong> Standardized form controls to 16px minimum font size on mobile (15px on desktop) to eliminate Safari auto-zoom, paired with 44x44px touch targets conforming to Apple Human Interface Guidelines.",
          "<strong>Dynamic Island & Safe-Area Inset Handling:</strong> Integrated <code>viewport-fit=cover</code> and <code>env(safe-area-inset-bottom)</code> to prevent the mobile conversion bar from colliding with the iOS Home Indicator.",
          "<strong>WCAG 2.1 AA Accessibility & Anti-Spam Defense:</strong> Offscreen Skip-Link gliding into view upon keyboard Tab navigation, combined with an invisible honeypot mechanism to block automated spam bots.",
          "<strong>Edge CI/CD Cloud Deployment:</strong> Automated CI/CD configured on <strong>Vercel Edge Network</strong> with SPA rewrites, strict SSL security headers, and top-tier Lighthouse performance scores.",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
