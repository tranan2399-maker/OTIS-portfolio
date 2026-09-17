import comingSoon from "../../../assets/images/coming-soon.jpg";

import type { ProjectContent } from "../../types";

export default {
  title: "CubeWar",
  theme: "dark",
  tags: ["three", "websockets", "node"],
  description: "This project is under development. Check back soon!",
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
        text: "This project is currently under development. Check back soon to see what's cooking! 🚀",
      },
    },
  ],
} as const satisfies ProjectContent;
