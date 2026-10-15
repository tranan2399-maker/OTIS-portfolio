export type TagVariant =
  | "three"
  | "websockets"
  | "react"
  | "redis"
  | "gray"
  | "html"
  | "css"
  | "javascript"
  | "node"
  | "next"
  | "kubernetes"
  | "postgresql"
  | "ogl"
  | "glsl"
  | "design"
  | "figma"
  | "branding"
  | "mongodb"
  | "nodejs"
  | "tailwind"
  | "ai";


export const tagLabels = {
  three: "Three.js",
  websockets: "WebSockets",
  react: "React",
  redis: "Redis",
  gray: "Gray",
  html: "HTML",
  css: "CSS",
  javascript: "JavaScript",
  node: "Node.js",
  next: "Next.js",
  kubernetes: "Kubernetes",
  postgresql: "PostgreSQL",
  ogl: "OGL.js",
  glsl: "GLSL",
  design: "Design",
  figma: "Figma",
  branding: "Branding",
  mongodb: "MongoDB",
  nodejs: "Node.js",
  tailwind: "Tailwind CSS",
  ai: "Gemini AI",
} as const satisfies Record<TagVariant, string>;

