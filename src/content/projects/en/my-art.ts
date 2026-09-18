import img1 from "../../../assets/images/projects/my-art/b24-new-1.min.webp";
import img2 from "../../../assets/images/projects/my-art/b24-new-2.min.webp";
import img3 from "../../../assets/images/projects/my-art/b24-new-3.min.webp";
import img4 from "../../../assets/images/projects/my-art/b24-new-4.min.webp";
import img5 from "../../../assets/images/projects/my-art/b24-new-5.min.webp";
import img6 from "../../../assets/images/projects/my-art/b24-new-6.min.webp";
import img7 from "../../../assets/images/projects/my-art/b24-new-7.min.webp";
import videoLogo from "../../../assets/videos/b24-intro.min.mp4";

import type { ProjectContent } from "../../types";

export default {
  title: "B24 JSC",
  theme: "dark",
  tags: ["design", "figma", "branding"],
  description:
    "Design collection, solutions and reports for the B24 JSC system.<br/><br/>The images are organized in a smooth scrolling vertical layout.",
  components: [
    { type: "media", props: { type: "video", src: videoLogo, caption: "Animated B24 Logo", originalRatio: true } },
    { type: "media", props: { type: "image", src: img1, alt: "B24 Image 1", caption: "Design 1", originalRatio: true } },
    { type: "media", props: { type: "image", src: img2, alt: "B24 Image 2", caption: "Design 2", originalRatio: true } },
    { type: "media", props: { type: "image", src: img3, alt: "B24 Image 3", caption: "Design 3", originalRatio: true } },
    { type: "media", props: { type: "image", src: img4, alt: "B24 Image 4", caption: "Design 4", originalRatio: true } },
    { type: "media", props: { type: "image", src: img5, alt: "B24 Image 5", caption: "Design 5", originalRatio: true } },
    { type: "media", props: { type: "image", src: img6, alt: "B24 Image 6", caption: "Design 6", originalRatio: true } },
    { type: "media", props: { type: "image", src: img7, alt: "B24 Image 7", caption: "Design 7", originalRatio: true } },
  ],
} as const satisfies ProjectContent;
