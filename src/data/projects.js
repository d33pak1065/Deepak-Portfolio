export const sendra = {
  name: "Sendra",
  tagline: "Ride Sharing & Parcel Delivery",
  description:
    "Developed and maintained the complete Flutter application for Sendra, a ride-sharing and parcel delivery platform, using Clean Architecture and BLoC. Developed core ride, parcel, chat, KYC and profile flows, integrated REST APIs and Firebase services, and managed Android/iOS production releases and post-release improvements.",
  role: "Primary Flutter developer responsible for the complete mobile application — from feature development and UI implementation through API/Firebase integration, testing, bug fixing, and Android/iOS production deployment.",
  screens: "50+ screens",
  icon: "/assets/sendra/sendra-icon.png",
  video: "/assets/sendra/sendra-demo.mp4",
  tech: [
    "Flutter",
    "Dart",
    "BLoC",
    "Clean Architecture",
    "Firebase",
    "REST APIs",
    "Google Maps",
    "Firebase Cloud Messaging",
    "Firebase Crashlytics",
    "Android",
    "iOS",
  ],
  platforms: ["Android", "iOS"],
  responsibilities: [
    "Complete Flutter application development",
    "Application architecture",
    "BLoC state management",
    "REST API integration",
    "Firebase Authentication",
    "Firebase Cloud Messaging",
    "Firebase Crashlytics",
    "Google Maps integration",
    "Backend/API collaboration (Node.js) where required",
    "Testing",
    "Bug fixing",
    "Feature enhancements",
    "Production deployment",
    "Post-release maintenance",
  ],
  context:
    "Professional client work completed as part of my role at ITqHUB. I worked with and used the Node.js backend as part of the application workflow — not as its sole developer or owner.",
  status: "Live in production",

  pipeline: [
    { label: "Build" },
    { label: "API" },
    { label: "Firebase" },
    { label: "Test" },
    { label: "Android" },
    { label: "iOS" },
    { label: "Live" },
  ],

  gallery: [
    {
      src: "/assets/sendra/sendra-home.png",
      alt: "Sendra home screen",
      caption: "Home & product overview",
    },
    {
      src: "/assets/sendra/sendra-available-cars.png",
      alt: "Sendra available rides screen",
      caption: "Ride discovery",
    },
    {
      src: "/assets/sendra/sendra-ride-details.png",
      alt: "Sendra ride details screen",
      caption: "Ride details & booking",
    },
    {
      src: "/assets/sendra/sendra-route-details.png",
      alt: "Sendra route details screen",
      caption: "Post Ride flow",
    },
    {
      src: "/assets/sendra/sendra-available-parcels.png",
      alt: "Sendra available parcels screen",
      caption: "Available parcels",
    },
    {
      src: "/assets/sendra/sendra-notifications.png",
      alt: "Sendra notifications screen",
      caption: "Notifications & activity",
    },
  ],

  stores: {
    googlePlay: "https://play.google.com/store/apps/details?id=com.sendrapp.ride_parcel",
    appStore: "https://apps.apple.com/in/app/sendra/id6791524084",
  },
};

export const otherProjects = [
  {
    rank: "02",
    name: "EV Mart Plus",
    tagline: "EV Products & Services — Android App",
    role:
      "Developed assigned Flutter screens and UI flows for an EV products and services application, integrating Firebase and working closely with the development team on feature implementation. Coordinated client meetings, gathered requirements, documented discussions through MOMs, and helped translate requirements into actionable development tasks.",
    tech: ["Flutter", "Firebase"],
    platforms: ["Android"],
    storeUrl:
      "https://play.google.com/store/apps/details?id=com.evplus.ev_app&pcampaignid=web_share",
    storeLabel: "Google Play",
    emphasis: true,
  },
  {
    rank: "03",
    name: "Employee Attendance & Management Portal",
    tagline: "Internal ITqHUB — Full-Stack Web Application",
    role:
      "Independently built the complete employee management and attendance platform using React, Node.js, Express.js and MySQL. Implemented JWT-based role access for Admin, HR and Employees, Wi-Fi/IP-restricted attendance, leave management, dashboards, reports, notifications and search/filtering, then deployed and maintained the application on Hostinger VPS.",
    tech: ["React.js", "Node.js", "Express.js", "MySQL", "JWT"],
    platforms: ["Web"],
  },
  {
    rank: "04",
    name: "Student Fee & Payment Management Platform",
    tagline: "Internal ITqHUB — Full-Stack Payment Platform",
    role:
      "Independently built the complete student fee and payment platform using React, Node.js, Express.js and MongoDB. Implemented JWT-based Admin and Employee access, student payment requests, Razorpay payment links, payment status tracking, transaction history, search/filtering and reporting, then deployed and maintained the application on Hostinger VPS.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Razorpay"],
    platforms: ["Web"],
  },
];