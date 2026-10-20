// Tier controls visual weight in the Stack section:
// "primary"   → Flutter/mobile, the strongest visual treatment
// "secondary" → full-stack/web, clearly present but quieter
// "supporting"→ data, services and tools, quietest treatment
export const stackCategories = [
  {
    label: "Mobile",
    tier: "primary",
    items: [
      "Flutter",
      "Dart",
      "BLoC",
      "Clean Architecture",
      "Firebase",
      "Google Maps",
    ],
  },
  {
    label: "Full Stack",
    tier: "secondary",
    items: [
      "React.js",
      "JavaScript",
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT",
    ],
  },
  {
    label: "Data & Integrations",
    tier: "supporting",
    items: ["MongoDB", "MySQL", "Razorpay"],
  },
  {
    label: "Tools",
    tier: "supporting",
    items: ["Git", "GitHub", "Swagger", "Thunder Client", "VS Code"],
  },
];

// Each step carries a short list of real practices and technologies
// used across my mobile and full-stack web projects.

export const buildSteps = [
  {
    index: "01",
    title: "Understand",
    detail:
      "Understand product requirements, user journeys, business needs, and edge cases before starting implementation.",
    chips: ["Client discussions", "Requirements", "User flows"],
  },
  {
    index: "02",
    title: "Build",
    detail:
      "Develop maintainable mobile features using Flutter, Dart, BLoC, Clean Architecture, and reusable UI components.",
    chips: ["Flutter", "Dart", "BLoC", "Clean Architecture"],
  },
  {
    index: "03",
    title: "Integrate",
    detail:
      "Connect mobile applications to REST APIs, Firebase services, Google Maps, and other integrations required by the product.",
    chips: ["REST APIs", "Firebase", "Google Maps", "FCM"],
  },
  {
    index: "04",
    title: "Test",
    detail:
      "Validate user flows and integrations, identify issues, and fix bugs during development and after production releases.",
    chips: ["Manual testing", "Crashlytics", "Bug fixing"],
  },
  {
    index: "05",
    title: "Ship",
    detail:
      "Prepare production builds and manage application releases for Android and iOS, alongside web application deployment when required.",
    chips: ["Google Play", "App Store", "Hostinger VPS"],
  },
  {
    index: "06",
    title: "Improve",
    detail:
      "Maintain released applications by addressing bugs, reviewing crash reports, improving performance, and delivering new features.",
    chips: ["Crash reports", "Feature updates", "Maintenance"],
  },
];
