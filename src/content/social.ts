export const social = [
  { url: "mailto:tranan.2399@gmail.com", name: "mail" },
  { url: "https://github.com/tranan2399-maker", name: "github" },
  { url: "https://www.youtube.com/@chillwithatis", name: "youtube" },
  { url: "tel:0938302558", name: "phone" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "youtube" | "phone" }[];
