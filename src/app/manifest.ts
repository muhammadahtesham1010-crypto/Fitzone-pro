import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "FitZone Pro",
    short_name: "FitZone Pro",
    description: "Premium fitness experience — transform your body, mind, and life.",
    start_url: "/",
    display: "standalone",
    background_color: "#030712",
    theme_color: "#10b981",
    icons: [
      { src: "/icons/icon-192.svg", sizes: "192x192", type: "image/svg+xml" },
      { src: "/icons/icon-512.svg", sizes: "512x512", type: "image/svg+xml" },
    ],
  };
}
