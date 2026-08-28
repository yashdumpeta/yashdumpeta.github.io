import Umazing from "../assets/images/Umazing.png";
import Selectaraunt from "../assets/images/Selectaraunt.png";
import tabChopMockup from "../assets/images/tabchop-mockup.png";
import curbTelemetryMock from "../assets/images/curb_telemetry_mock.webp";

export const projects = [
  {
    title: "NYC Curb Telemetry",
    image: curbTelemetryMock,
    source_code: "https://github.com/yashdumpeta/nyc-parking-analytics-roboflow",
    tech_used: [
      "Python",
      "FastAPI",
      "React",
      "TypeScript",
      "YOLOv8",
      "OpenCV",
      "Tailwind CSS",
    ],
    description:
      "Real-time AI telemetry platform that ingests live NYC DOT traffic cameras to track curbside parking occupancy. Detects vehicles in calibrated curb zones using YOLOv8 and calculates unrealized municipal revenue based on Manhattan meter rates.",
  },
  {
    title: "TabChop",
    featured: true,
    image: tabChopMockup,
    tech_used: [
      "TypeScript",
      "Next.js",
      "React.js",
      "Convex",
      "Convex Auth",
      "Tailwind CSS",
      "Vercel",
    ],
    description:
      "Real-time bill-splitting app for groups at restaurants. Users can upload a receipt, invite friends with a code or QR link, claim items live, and generate transparent payment summaries.",
    link: "https://tabchop.app/overview",
  },
  {
    title: "@open-tracker/core",
    source_code: "https://github.com/yashdumpeta/open-tracker-core",
    tech_used: ["TypeScript", "Zod", "Node.js", "SDK Architecture", "Exponential Backoff"],
    description:
      "Lightweight, framework-agnostic TypeScript SDK core for tracking analytics and ad events with Zod runtime type validation, exponential backoff network retries, and automatic metadata extraction.",
  },
  {
    title: "UMazing",
    image: Umazing,
    source_code: "https://github.com/MishanGagnon/mhacks2024",
    tech_used: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "React.js",
      "Tailwind CSS",
      "PostgreSQL",
      "Python",
      "Vercel",
      "OpenAI",
      "Railway",
    ],
    description:
      "AI academic planning tool that helps University of Michigan students reason through course selection, requirements, and schedule tradeoffs.",
    link: "https://mhack2024-production.up.railway.app/",
  },
  {
    title: "Selectaraunt",
    image: Selectaraunt,
    source_code: "https://github.com/MishanGagnon/restaurant",
    tech_used: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "React.js",
      "Tailwind CSS",
      "Supabase",
      "Socket.io",
      "Leaflet",
      "Yelp API",
    ],
    description:
      "Real-time group restaurant decision app that lets friends compare options, vote together, and converge on a place faster.",
    link: "https://selectaraunt.up.railway.app/",
  },
];
