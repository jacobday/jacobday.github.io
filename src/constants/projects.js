import {
  athlosProject,
  kvstoreProject,
  ephemeraProject,
  homeScopeProject,
} from "../assets/images/projects";

export const projects = [
  {
    name: "Distributed Key-Value Store",
    description:
      "A Python-based distributed key-value store with support for various consistency levels, including eventual, causal, sequential, and linear consistency. ",
    tags: ["python", "networking", "multithreading"],

    image: kvstoreProject,
    github: "https://github.com/jacobday/distributed-key-value-store",
    url: "https://github.com/jacobday/distributed-key-value-store",
  },
  {
    name: "Athlos Booking Management",
    description:
      "Web application that enables users to search for sports facilities, hire personal trainers, and enlist officials to oversee their next sporting event.",
    tags: ["mongoDB", "expressJS", "react", "nodeJS"],

    image: athlosProject,
    github: "https://github.com/jacobday/athlos",
    url: "https://github.com/jacobday/athlos",
  },
  {
    name: "HomeScope",
    description:
      "Search for your dream home with HomeScope, a web application that enables users to search for homes based on their desired location, price, and more.",
    tags: ["ruby", "mongoDB", "css"],
    image: homeScopeProject,
    github: "https://github.com/jacobday/home-scope",
    url: "https://github.com/jacobday/home-scope",
  },
  {
    name: "Ephemera: Temporary Notes",
    description:
      "An iOS application designed to offer users the ability to create and manage temporary (ephemeral) notes that automatically delete.",
    tags: ["swift", "ios", "icloud"],
    image: ephemeraProject,
    github: "https://github.com/jacobday",
    url: "https://github.com/jacobday",
  },
];
