import thumbnailVinFast from "../../../assets/thumbnails/vinfast-tay-saigon.webp";
import thumbnailViewdecor from "../../../assets/thumbnails/viewdecor-interior.webp";
import thumbnailMyArt from "../../../assets/thumbnails/my-art.png";
import thumbnailCubeWar from "../../../assets/thumbnails/cubewar.webp";
import thumbnailQuibbo from "../../../assets/thumbnails/quibbo.webp";
//import thumbnailParticles from "../../../assets/thumbnails/particles.webp";
import thumbnailPokedex from "../../../assets/thumbnails/pokedex.webp";
import thumbnailSharkie from "../../../assets/thumbnails/sharkie.webp";
import thumbnailStreakon from "../../../assets/thumbnails/streakon.webp";
import thumbnailDreamCinema from "../../../assets/thumbnails/dream-cinema.jpg";
import thumbnailOtisAuto from "../../../assets/thumbnails/otis-auto.webp";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "VinFast Tay Saigon",
    slug: "vinfast-tay-saigon",
    thumbnail: thumbnailVinFast,
    description: "Official VinFast dealership digital showroom & after-sales service platform",
  },
  {
    title: "Viewdecor Interior",
    slug: "viewdecor-interior",
    thumbnail: thumbnailViewdecor,
    description: "High-end corporate interior architecture & design platform",
  },
  {
    title: "Dream Cinema",
    slug: "dream-cinema",
    thumbnail: thumbnailDreamCinema,
    description: "Dark Luxury Cinema booking platform with real-time seat reservation",
  },
  {
    title: "OTIS AUTO",
    slug: "otis-auto",
    thumbnail: thumbnailOtisAuto,
    description: "Stuttgart-grade digital flagship for independent Porsche specialists",
  },
  {
    title: "B24 JSC",
    slug: "my-art",
    thumbnail: thumbnailMyArt,
    description: "AI-generated image collection",
  },
  {
    title: "StreakOn",
    slug: "streakon",
    thumbnail: thumbnailStreakon,
    description: "Social habit tracking app",
  },
  {
    title: "CubeWar",
    slug: "cubewar",
    thumbnail: thumbnailCubeWar,
    description: "Multiplayer strategy game",
  },
  {
    title: "Quibbo",
    slug: "quibbo",
    thumbnail: thumbnailQuibbo,
    description: "Multiplayer gaming platform",
  },
  {
    title: "Sharkie",
    slug: "sharkie",
    thumbnail: thumbnailSharkie,
    description: "2D adventure game",
  },
  /**  {
    title: "WebGL Particles",
    slug: "particles",
    thumbnail: thumbnailParticles,
    description: "Dynamic 3D particles",
  }, */
  {
    title: "Pokédex",
    slug: "pokedex",
    thumbnail: thumbnailPokedex,
    description: "Open-source learning project",
  },
] as const satisfies ProjectPreview[];
