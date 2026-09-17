import comingSoon from "../../../assets/images/coming-soon.jpg";

import type { ProjectContent } from "../../types";

export default {
  title: "Pokedex",
  theme: "light",
  tags: ["react", "css"],
  description: "Dự án đang được phát triển. Hãy quay lại sớm nhé!",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: comingSoon,
        alt: "Coming Soon",
        caption: "🚧 Coming Soon",
      },
    },
    {
      type: "text",
      props: {
        title: "Coming Soon",
        text: "Dự án này đang trong quá trình phát triển. Hãy quay lại sớm để xem thành quả nhé! 🚀",
      },
    },
  ],
} as const satisfies ProjectContent;
