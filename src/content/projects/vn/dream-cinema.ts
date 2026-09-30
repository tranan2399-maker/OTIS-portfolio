import type { ProjectContent } from "../../types";

export default {
  title: "Dream Cinema",
  theme: "dark",
  tags: ["react", "nodejs", "mongodb"],
  description: "Ứng dụng đặt vé xem phim trực tuyến — Đồ án tốt nghiệp.",
  live: "https://datn-frontend-weld.vercel.app/",
  components: [
    {
      type: "text",
      props: {
        title: "Dream Cinema — Đặt Vé Phim Trực Tuyến",
        text: "Nền tảng đặt vé rạp chiếu phim full-stack được xây dựng bằng React, Node.js và MongoDB. Các tính năng bao gồm duyệt phim, chọn ghế ngồi, đặt vé trực tuyến và bảng điều khiển quản trị cho quản lý rạp phim.",
      },
    },
  ],
} as const satisfies ProjectContent;
