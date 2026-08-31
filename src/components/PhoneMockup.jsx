import { motion } from "framer-motion";

// Width presets so every phone on the site (hero, case-study video, gallery
// thumbnails) shares the exact same device chrome at a size appropriate to
// its context, instead of each call site inventing its own width.
const SIZES = {
  lg: "w-[260px] sm:w-[280px] lg:w-[300px]", // hero + case-study demo
  md: "w-[200px] sm:w-[220px]", // gallery thumbnails
};

// A reusable phone/device frame. Purely presentational — it has no opinion
// about what's inside it, so it works equally well for a real screenshot
// or a real video:
//
//   <PhoneMockup><ImageWithFallback bare .../></PhoneMockup>
//   <PhoneMockup><VideoWithFallback .../></PhoneMockup>
//
// The aspect ratio lives here (on the device screen), not on the media
// component, so anything passed in just fills the screen area.
export default function PhoneMockup({ children, size = "lg", className = "", floaty = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, rotate: -1.5 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className={`relative mx-auto ${SIZES[size] ?? SIZES.lg} ${className}`}
    >
      <motion.div
        animate={floaty ? { y: [0, -10, 0] } : {}}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        {/* device frame */}
        <div className="relative rounded-[2.6rem] border border-borderStrong bg-[#0E0E10] p-2 shadow-soft">
          <div className="absolute inset-0 rounded-[2.6rem] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]" />

          {/* screen — fixed mobile aspect ratio, whatever media is passed
              in fills this area */}
          <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2rem] bg-surface">
            {/* dynamic island — hardware detail only, not app UI */}
            <div className="absolute left-1/2 top-2.5 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />
            {children}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
