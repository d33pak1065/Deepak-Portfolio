import { useState } from "react";

// Generic image component used anywhere a real asset may not be present yet
// (e.g. before real Sendra screenshots are dropped into
// public/assets/sendra/). On error it renders a neutral placeholder box —
// never a fabricated recreation of the missing UI.
export default function ImageWithFallback({
  src,
  alt,
  aspect = "aspect-[9/19.5]",
  rounded = "rounded-2xl",
  fit = "object-cover",
  bare = false,
  className = "",
}) {
  const [errored, setErrored] = useState(false);
  const filename = src ? src.split("/").pop() : "image";

  // "bare" mode: no aspect ratio, border, or background of its own — used
  // when this sits inside PhoneMockup, which already owns the screen's
  // aspect ratio and framing. Standalone mode (default) keeps its own
  // card-like presentation for things like the Sendra app icon.
  const wrapperClasses = bare
    ? `relative h-full w-full overflow-hidden ${className}`
    : `relative ${aspect} w-full overflow-hidden border border-border bg-surface2 ${rounded} ${className}`;

  return (
    <div className={wrapperClasses}>
      {src && !errored ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onError={() => setErrored(true)}
          className={`h-full w-full ${fit}`}
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 px-3 text-faint">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
            <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
            <path
              d="M21 15l-5-5-4 4-3-3-6 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-center font-mono text-[10px]">{filename}</span>
        </div>
      )}
    </div>
  );
}
