import Umazing from "../assets/images/Umazing.png";
import Selectaraunt from "../assets/images/Selectaraunt.png";
import recalld from "../assets/images/recalld.png";
import recipeFind from "../assets/images/recipeFind.png";
import tabChop from "../assets/images/tabchop8.png";

export const projects = [
  {
    title: "TabChop",
    image: tabChop,
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
      "Real-time receipt splitting app that turns upload, invite, claim, and pay into a fast low-friction group flow with transparent itemized totals.",
    link: "https://tabchop.app/overview",
  },
  {
    title: "UMazing",
    image: Umazing,
    source_code: "https://github.com/MishanGagnon/mhacks2024",
    tech_used: [
      "Next.js",
      "Typescript",
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
      "AI-powered academic advisor bot designed to revolutionize course selection and academic planning. Developed during MHacks 24.",
    link: "https://mhack2024-production.up.railway.app/",
  },
  {
    title: "Selectaraunt",
    image: Selectaraunt,
    source_code: "https://github.com/MishanGagnon/restaurant",
    tech_used: [
      "Next.js",
      "Typescript",
      "Node.js",
      "React.js",
      "Tailwind CSS",
      "Supabase",
      "Socket.io",
      "Leaflet",
      "Yelp API",
    ],
    description:
      "Real-time multiplayer web application for group restaurant decision-making using swipeable cards.",
    link: "https://selectaraunt.up.railway.app/",
  },
  {
    title: "recalld",
    image: recalld,
    source_code: "https://github.com/yashdumpeta/recalld",
    tech_used: ["Python", "Django", "React.js", "JavaScript", "MySQL"],
    description:
      "Dynamic full-stack flashcard app designed for active recall and spaced repetition learning.",
  },
  {
    title: "recipeFind",
    image: recipeFind,
    source_code: "https://github.com/yashdumpeta/recipeFind",
    tech_used: ["React.js", "JavaScript", "Edamam API"],
    description:
      "Web app for discovering over 2.3 million recipes using the Edamam API.",
  },
];
