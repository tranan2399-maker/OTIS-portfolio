import img1 from "../../../assets/images/projects/my-art/b24-1.jpg";
import img2 from "../../../assets/images/projects/my-art/b24-2.svg";
import img4 from "../../../assets/images/projects/my-art/b24-4.svg";
import img5 from "../../../assets/images/projects/my-art/b24-5.png";
import img6 from "../../../assets/images/projects/my-art/b24-6.png";
import img7 from "../../../assets/images/projects/my-art/b24-7.svg";
import img8 from "../../../assets/images/projects/my-art/b24-8.svg";
import img9 from "../../../assets/images/projects/my-art/b24-9.svg";
import videoLogo from "../../../assets/videos/b24-logo.mp4";

import type { ProjectContent } from "../../types";

export default {
  title: "B24 JSC",
  theme: "dark",
  tags: ["design", "figma", "branding"],
  description:
    "A collection of images, solutions, and design reports for the B24 JSC system.<br/><br/>Images are organized in a smooth scrolling vertical layout.",
  components: [
    { type: "media", props: { type: "video", src: videoLogo, caption: "Animated B24 Logo", originalRatio: true } },
    { type: "media", props: { type: "image", src: img1, alt: "B24 Image 1", caption: "Design 1", originalRatio: true } },
    { type: "media", props: { type: "image", src: img2, alt: "B24 Image 2", caption: "Design 2", originalRatio: true } },
    { type: "media", props: { type: "image", src: img7, alt: "B24 Image 7", caption: "Design 7", originalRatio: true } },
    { type: "media", props: { type: "image", src: img8, alt: "B24 Image 8", caption: "Design 8", originalRatio: true } },
    { type: "media", props: { type: "image", src: img9, alt: "B24 Image 9", caption: "Design 9", originalRatio: true } },
    { type: "media", props: { type: "image", src: img4, alt: "B24 Image 4", caption: "Design 4", originalRatio: true } },
    { type: "media", props: { type: "image", src: img5, alt: "B24 Image 5", caption: "Design 5", originalRatio: true } },
    { type: "media", props: { type: "image", src: img6, alt: "B24 Image 6", caption: "Design 6", originalRatio: true } },
  ],
} as const satisfies ProjectContent;
