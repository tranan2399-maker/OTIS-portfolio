import thumbnailMyArt from "../../../assets/thumbnails/my-art.png";
import thumbnailCubeWar from "../../../assets/thumbnails/cubewar.webp";
import thumbnailQuibbo from "../../../assets/thumbnails/quibbo.webp";
//import thumbnailParticles from "../../../assets/thumbnails/particles.webp";
import thumbnailPokedex from "../../../assets/thumbnails/pokedex.webp";
import thumbnailSharkie from "../../../assets/thumbnails/sharkie.webp";
import thumbnailStreakon from "../../../assets/thumbnails/streakon.webp";
import thumbnailDreamCinema from "../../../assets/thumbnails/dream-cinema.jpg";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "Dream Cinema",
    slug: "dream-cinema",
    thumbnail: thumbnailDreamCinema,
    description: "Ứng dụng đặt vé rạp phim trực tuyến",
  },
  {
    title: "B24 JSC",
    slug: "my-art",
    thumbnail: thumbnailMyArt,
    description: "Bộ sưu tập ảnh AI",
  },
  {
    title: "StreakOn",
    slug: "streakon",
    thumbnail: thumbnailStreakon,
    description: "Ứng dụng theo dõi thói quen",
  },
  {
    title: "CubeWar",
    slug: "cubewar",
    thumbnail: thumbnailCubeWar,
    description: "Trò chơi chiến thuật nhiều người chơi",
  },
  {
    title: "Quibbo",
    slug: "quibbo",
    thumbnail: thumbnailQuibbo,
    description: "Nền tảng trò chơi nhiều người",
  },
  {
    title: "Sharkie",
    slug: "sharkie",
    thumbnail: thumbnailSharkie,
    description: "Trò chơi phiêu lưu 2D",
  },
  /**  {
    title: "Hạt WebGL",
    slug: "particles",
    thumbnail: thumbnailParticles,
    description: "Hiệu ứng hạt 3D động",
  }, */
  {
    title: "Pokédex",
    slug: "pokedex",
    thumbnail: thumbnailPokedex,
    description: "Dự án học tập mã nguồn mở",
  },
] as const satisfies ProjectPreview[];
