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
      "Clarify the requirements, user flows, business needs, and edge cases before implementation.",
    chips: ["Client discussions", "Requirements", "User flows"],
  },
  {
    index: "02",
    title: "Build",
    detail:
      "Turn requirements into maintainable features using appropriate architecture, reusable UI, and state management.",
    chips: ["Flutter", "React.js", "BLoC", "Clean Architecture"],
  },
  {
    index: "03",
    title: "Integrate",
    detail:
      "Connect the application to REST APIs, Firebase, maps, payments, and other services required by the product.",
    chips: ["REST APIs", "Firebase", "Google Maps", "Razorpay"],
  },
  {
    index: "04",
    title: "Test",
    detail:
      "Test complete user flows, integrations, and edge cases, then diagnose and fix issues before and after release.",
    chips: ["Manual testing", "Crashlytics", "Bug fixing"],
  },
  {
    index: "05",
    title: "Ship",
    detail:
      "Prepare production builds, complete release requirements, and deploy applications to their target platforms.",
    chips: ["Google Play", "App Store", "Hostinger VPS"],
  },
  {
    index: "06",
    title: "Improve",
    detail:
      "Use production feedback, crash reports, bugs, and new requirements to continuously improve the application.",
    chips: ["Crash reports", "Feature updates", "Maintenance"],
  },
];