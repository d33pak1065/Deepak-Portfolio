import { motion } from "framer-motion";
import PhoneMockup from "./PhoneMockup";
import ImageWithFallback from "./ImageWithFallback";

export default function SendraGallery({ items }) {
  return (
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-12">
      {items.map((item, i) => (
        <motion.figure
          key={item.src}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, delay: (i % 3) * 0.06 }}
          className="flex flex-col items-center text-center"
        >
          <PhoneMockup size="md" floaty={false}>
            <ImageWithFallback
              src={item.src}
              alt={item.alt}
              bare
              fit="object-contain"
            />
          </PhoneMockup>

          <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.08em] text-faint">
            {item.caption}
          </figcaption>
        </motion.figure>
      ))}
    </div>
  );
}