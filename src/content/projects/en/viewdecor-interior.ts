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
  liveLabel: "View GitHub Repository",
  source: "https://github.com/tranan2399-maker/WEB-noithat1",
  components: [
    {
      type: "text",
      props: {
        title: "High-End Interior Architecture & Digital Presence",
        text: "Viewdecor Interior is an interactive digital flagship for Viewdecor Architecture & Construction JSC (Ho Chi Minh City). Built with React 19, Tailwind CSS, and Motion, the project digitizes extensive commercial manufacturing power, multinational enterprise office designs, and luxury villa fit-outs into an elegant, high-performance web experience.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: img01Hero,
        alt: "Viewdecor Hero Landing Page",
        caption: "Minimalist, luxury-oriented digital experience featuring rich typography and fluid spatial transitions",
        originalRatio: true,
      },
    },
    {
      type: "text",
      props: {
        title: "Multinational Enterprise Office Portfolio",
        text: "The portfolio highlights landmark commercial fit-outs for international clients including H&M Vietnam, CMC Telecom, BodyNits, Kim Tay Nam, Scheaffler, Kotiti, and Vico Logistics, accompanied by luxury residential apartments with dynamic filtering and fluid gallery transitions.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: img02Portfolio,
        alt: "Viewdecor Commercial Office Showcase",
        caption: "High-resolution photographic portfolio reflecting innovative corporate workplace design and acoustic craftsmanship",
        originalRatio: true,
      },
    },
    {
      type: "text",
      props: {
        title: "In-House Woodworking Factory & Custom Joinery",
        text: "Viewdecor's core competitive advantage lies in its closed-loop manufacturing pipeline: from conceptual 3D design to precision fabrication in their own industrial woodworking facility. The platform visualizes specialized veneer craftsmanship, joinery assembly, and strict pre-installation quality control.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: img03Factory,
        alt: "Viewdecor In-House Joinery Factory",
        caption: "Precision in-house production: natural timber joinery, custom millwork, and stringent finishing inspections",
        originalRatio: true,
      },
    },
    {
      type: "text",
      props: {
        title: "Interactive Capability Profile & Commercial Conversion Engine",
        text: "Accompanied by a standalone digital proposal and ROI comparison deck (`bao-cao.html`), providing commercial consultants with a data-driven presentation asset for high-value enterprise pitches.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: img04Report,
        alt: "Interactive Commercial Proposal Report",
        caption: "Digital capability report with value engineering metrics, PageSpeed optimization data, and verified certifications",
        originalRatio: true,
      },
    },
    {
      type: "list",
      props: {
        title: "Key Technical Highlights",
        items: [
          "<strong>Modern Tech Stack:</strong> Engineered on <strong>React 19 + Tailwind CSS 4 + Vite 8</strong> with modular component design and instant hydration.",
          "<strong>Subtle Micro-Interactions:</strong> Fluid spatial animation orchestrations via Motion, enhancing the luxurious atmosphere of architectural works.",
          "<strong>Optimized Asset Pipeline:</strong> Converted all media assets to WebP format, achieving an 88% reduction in initial payload without loss of fidelity.",
          "<strong>Digital Capability Presentation:</strong> Standalone digital presentation module (`bao-cao.html`) tailored for corporate pitches and board review.",
          "<strong>Clean Repository Management:</strong> Open-source repository hosted on GitHub (`WEB-noithat1`) with synchronized `main` and `gh-pages` deployment branches.",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
