import type { ProjectContent } from "../../types";

export default {
  title: "Dream Cinema",
  theme: "dark",
  tags: ["react", "nodejs", "mongodb"],
  description: "A full-stack cinema booking web application — graduation project.",
  live: "https://datn-frontend-weld.vercel.app/",
  components: [
    {
      type: "text",
      props: {
        title: "Dream Cinema — Online Movie Ticket Booking",
        text: "A full-stack cinema booking platform built with React, Node.js, and MongoDB. Features include movie browsing, seat selection, online booking, and an admin dashboard for cinema management.",
      },
    },
  ],
} as const satisfies ProjectContent;
