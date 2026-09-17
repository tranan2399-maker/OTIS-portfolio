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
    "Bộ sưu tập các hình ảnh, giải pháp và báo cáo thiết kế cho hệ thống B24 JSC.<br/><br/>Các hình ảnh được tổ chức theo bố cục cuộn mượt mà từ trên xuống.",
  components: [
    { type: "media", props: { type: "video", src: videoLogo, caption: "Logo B24 Động", originalRatio: true } },
    { type: "media", props: { type: "image", src: img1, alt: "B24 Image 1", caption: "Thiết kế 1", originalRatio: true } },
    { type: "media", props: { type: "image", src: img2, alt: "B24 Image 2", caption: "Thiết kế 2", originalRatio: true } },
    { type: "media", props: { type: "image", src: img7, alt: "B24 Image 7", caption: "Thiết kế 7", originalRatio: true } },
    { type: "media", props: { type: "image", src: img8, alt: "B24 Image 8", caption: "Thiết kế 8", originalRatio: true } },
    { type: "media", props: { type: "image", src: img9, alt: "B24 Image 9", caption: "Thiết kế 9", originalRatio: true } },
    { type: "media", props: { type: "image", src: img4, alt: "B24 Image 4", caption: "Thiết kế 4", originalRatio: true } },
    { type: "media", props: { type: "image", src: img5, alt: "B24 Image 5", caption: "Thiết kế 5", originalRatio: true } },
    { type: "media", props: { type: "image", src: img6, alt: "B24 Image 6", caption: "Thiết kế 6", originalRatio: true } },
  ],
} as const satisfies ProjectContent;
