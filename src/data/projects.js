import Umazing from "../assets/images/Umazing.png";
import Selectaraunt from "../assets/images/Selectaraunt.png";
import recalld from "../assets/images/recalld.png";
import recipeFind from "../assets/images/recipeFind.png";
import tabChop from "../assets/images/tabchop8.png";

export const projects = [
  {
    title: "TabChop",
    featured: true,
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
      "Real-time bill-splitting app for groups at restaurants. Users can upload a receipt, invite friends with a code or QR link, claim items live, and generate transparent payment summaries.",
    link: "https://tabchop.app/overview",
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
  {
    title: "recalld",
    image: recalld,
    source_code: "https://github.com/yashdumpeta/recalld",
    tech_used: ["Python", "Django", "React.js", "JavaScript", "MySQL"],
    description:
      "Full-stack flashcard app built to make active recall and spaced repetition easier to manage for focused study sessions.",
  },
  {
    title: "recipeFind",
    image: recipeFind,
    source_code: "https://github.com/yashdumpeta/recipeFind",
    tech_used: ["React.js", "JavaScript", "Edamam API"],
    description:
      "Recipe discovery web app that helps users search a large recipe database and quickly evaluate meal options by query.",
  },
];
