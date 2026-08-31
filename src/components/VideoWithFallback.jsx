import { useEffect, useRef, useState } from "react";

// Sendra case-study demo video.
//
// Behavior:
// - Loads shortly before entering the viewport.
// - Autoplays when sufficiently visible.
// - Pauses when scrolled away.
// - Resumes from the same position when visible again.
// - Does not loop.
// - Replay remains visible after completion.
// - Play/pause appears only while hovering.
// - A minimal white progress bar appears on hover and is seekable.
// - The PhoneMockup and all other portfolio media remain unaffected.
export default function VideoWithFallback({
  src,
  poster,
  alt = "Sendra application demo video",
  className = "",
}) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  const [isNearViewport, setIsNearViewport] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [errored, setErrored] = useState(false);
  const [hasEnded, setHasEnded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showControls, setShowControls] = useState(false);

  const filename = src ? src.split("/").pop() : "video";

  /*
   * Load the video shortly before it reaches the viewport,
   * while separately tracking actual visibility for playback.
   */
  useEffect(() => {
    const element = containerRef.current;

    if (!element || typeof IntersectionObserver === "undefined") {
      setIsNearViewport(true);
      setIsVisible(true);
      return;
    }

    const preloadObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsNearViewport(true);
          preloadObserver.disconnect();
        }
      },
      {
        rootMargin: "300px 0px",
      }
    );

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.35,
      }
    );

    preloadObserver.observe(element);
    visibilityObserver.observe(element);

    return () => {
      preloadObserver.disconnect();
      visibilityObserver.disconnect();
    };
  }, []);

  /*
   * Autoplay when visible.
   *
   * If the visitor scrolls away:
   * pause at the current position.
   *
   * When they return:
   * resume from that exact position.
   */
  useEffect(() => {
    const video = videoRef.current;

    if (!video || !isNearViewport || errored) {
      return;
    }

    if (isVisible && !hasEnded) {
      const startPlayback = async () => {
        try {
          await video.play();
        } catch {
          // Browser/environment blocked autoplay.
          // The hover/manual play control remains available.
          setIsPlaying(false);
          setShowControls(true);
        }
      };

      if (video.readyState >= 2) {
        startPlayback();
      } else {
        video.addEventListener("loadeddata", startPlayback, {
          once: true,
        });

        return () => {
          video.removeEventListener("loadeddata", startPlayback);
        };
      }
    }

    if (!isVisible && !video.paused) {
      video.pause();
    }
  }, [isVisible, isNearViewport, hasEnded, errored]);

  /*
   * Manual play / pause.
   */
  const togglePlayback = async () => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    if (video.paused) {
      try {
        await video.play();
        setHasEnded(false);
      } catch {
        setIsPlaying(false);
      }
    } else {
      video.pause();
    }
  };

  /*
   * Replay from the beginning.
   */
  const replay = async () => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    video.currentTime = 0;
    setProgress(0);
    setHasEnded(false);

    try {
      await video.play();
    } catch {
      setIsPlaying(false);
    }
  };

  /*
   * Seek using the custom progress bar.
   *
   * The bar itself becomes the interaction surface.
   * Clicking or dragging lets the visitor move backward/forward.
   */
  const seekVideo = (event) => {
    const video = videoRef.current;

    if (!video || !video.duration) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();

    const position = Math.min(
      1,
      Math.max(0, (event.clientX - rect.left) / rect.width)
    );

    video.currentTime = position * video.duration;

    setProgress(position * 100);

    if (hasEnded && position < 1) {
      setHasEnded(false);
    }
  };

  const handleProgressKeyDown = (event) => {
    const video = videoRef.current;

    if (!video || !video.duration) {
      return;
    }

    const step = 5;

    if (event.key === "ArrowRight") {
      event.preventDefault();
      video.currentTime = Math.min(
        video.duration,
        video.currentTime + step
      );
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      video.currentTime = Math.max(
        0,
        video.currentTime - step
      );
    }

    if (event.key === "Home") {
      event.preventDefault();
      video.currentTime = 0;
    }

    if (event.key === "End") {
      event.preventDefault();
      video.currentTime = video.duration;
    }
  };

  const showPlaceholder = errored || !isNearViewport;

  return (
    <div
      ref={containerRef}
      className={`group relative h-full w-full overflow-hidden ${className}`}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
      onTouchStart={() => setShowControls(true)}
    >
      {showPlaceholder ? (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 px-4 text-faint">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
          >
            <circle
              cx="12"
              cy="12"
              r="9"
              stroke="currentColor"
              strokeWidth="1.5"
            />

            <path
              d="M10 9l5 3-5 3V9z"
              fill="currentColor"
            />
          </svg>

          <span className="text-center font-mono text-[10px]">
            {errored ? filename : "Loading demo…"}
          </span>
        </div>
      ) : (
        <>
          <video
            ref={videoRef}
            src={src}
            poster={poster}
            aria-label={alt}
            muted
            playsInline
            preload="metadata"
            onPlay={() => {
              setIsPlaying(true);
              setHasEnded(false);
            }}
            onPause={() => {
              setIsPlaying(false);
            }}
            onTimeUpdate={(event) => {
              const video = event.currentTarget;

              if (video.duration) {
                setProgress(
                  Math.min(
                    100,
                    (video.currentTime / video.duration) * 100
                  )
                );
              }
            }}
            onEnded={() => {
              setIsPlaying(false);
              setHasEnded(true);
              setProgress(100);
              setShowControls(true);
            }}
            onError={() => {
              setErrored(true);
              setIsPlaying(false);
            }}
            className="h-full w-full object-contain"
          >
            Your browser does not support embedded video.
          </video>

          {/* --------------------------------
              HOVER CONTROLS
          --------------------------------- */}

          <div
            className={`pointer-events-none absolute inset-0 z-30 transition-opacity duration-200 ${
              showControls ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Center play / pause */}
            {!hasEnded && (
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <button
                  type="button"
                  onClick={togglePlayback}
                  className="focus-ring pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/55 text-white/85 shadow-lg backdrop-blur-sm transition-all duration-200 hover:border-accent/50 hover:bg-black/70 hover:text-accent"
                  aria-label={
                    isPlaying
                      ? "Pause Sendra demo"
                      : "Play Sendra demo"
                  }
                >
                  {isPlaying ? (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden
                    >
                      <rect
                        x="6"
                        y="5"
                        width="4"
                        height="14"
                        rx="1"
                      />

                      <rect
                        x="14"
                        y="5"
                        width="4"
                        height="14"
                        rx="1"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden
                    >
                      <path d="M8 5.5v13l10-6.5-10-6.5z" />
                    </svg>
                  )}
                </button>
              </div>
            )}

            {/* Replay after completion.
                Remains visible until replay is selected. */}
            {hasEnded && (
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <button
                  type="button"
                  onClick={replay}
                  className="focus-ring pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/55 text-white/85 shadow-lg backdrop-blur-sm transition-all duration-200 hover:border-accent/50 hover:bg-black/70 hover:text-accent"
                  aria-label="Replay Sendra demo"
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M20 11a8 8 0 1 0 1 4"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />

                    <path
                      d="M20 5v6h-6"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            )}

            {/* --------------------------------
                SEEKABLE PROGRESS BAR
            --------------------------------- */}

            <div
              className="pointer-events-auto absolute bottom-2 left-3 right-3"
              onClick={seekVideo}
              onKeyDown={handleProgressKeyDown}
              role="slider"
              tabIndex={0}
              aria-label="Sendra demo video progress"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(progress)}
            >
              {/* Invisible larger interaction area */}
              <div className="relative h-4 cursor-pointer">
                {/* Track */}
                <div className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 rounded-full bg-white/25">
                  {/* Progress */}
                  <div
                    className="relative h-full rounded-full bg-white transition-[width] duration-100"
                    style={{ width: `${progress}%` }}
                  >
                    {/* Small scrubber */}
                    <span className="absolute right-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 translate-x-1/2 rounded-full bg-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}