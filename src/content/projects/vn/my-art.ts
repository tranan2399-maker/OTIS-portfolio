import img1 from "../../../assets/images/projects/my-art/b24-new-1.jpg";
import img2 from "../../../assets/images/projects/my-art/b24-new-2.png";
import img3 from "../../../assets/images/projects/my-art/b24-new-3.png";
import img4 from "../../../assets/images/projects/my-art/b24-new-4.png";
import img5 from "../../../assets/images/projects/my-art/b24-new-5.png";
import img6 from "../../../assets/images/projects/my-art/b24-new-6.png";
import img7 from "../../../assets/images/projects/my-art/b24-new-7.png";
import videoLogo from "../../../assets/videos/b24-intro.mp4";

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
    { type: "media", props: { type: "image", src: img3, alt: "B24 Image 3", caption: "Thiết kế 3", originalRatio: true } },
    { type: "media", props: { type: "image", src: img4, alt: "B24 Image 4", caption: "Thiết kế 4", originalRatio: true } },
    { type: "media", props: { type: "image", src: img5, alt: "B24 Image 5", caption: "Thiết kế 5", originalRatio: true } },
    { type: "media", props: { type: "image", src: img6, alt: "B24 Image 6", caption: "Thiết kế 6", originalRatio: true } },
    { type: "media", props: { type: "image", src: img7, alt: "B24 Image 7", caption: "Thiết kế 7", originalRatio: true } },
  ],
} as const satisfies ProjectContent;
