import {
  carrentProject,
  jobitProject,
  tripguideProject,
} from "../assets/images/projects";

export const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: ["react", "mongoDB", "expressJS"],

    image: carrentProject,
    github: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: ["react", "restapi", "scss"],

    image: jobitProject,
    github: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: ["nextJS", "supabase", "css"],
    image: tripguideProject,
    github: "https://github.com/",
  },
];
