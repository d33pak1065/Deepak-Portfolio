import { useEffect, useState } from "react";
import PhoneMockup from "./PhoneMockup";

function formatTime(date) {
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12;

  const mm = minutes < 10 ? `0${minutes}` : `${minutes}`;

  return `${hours}:${mm} ${ampm}`;
}

function StatusDot() {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      Associate Developer
    </span>
  );
}

function WorkIcon({ src, alt }) {
  return (
    <div className="h-9 w-9 shrink-0 overflow-hidden rounded-lg border border-border bg-surface2">
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
        loading="eager"
      />
    </div>
  );
}

function BuildIcon({ type, active = false }) {
  const color = active ? "text-accent" : "text-muted";

  if (type === "build") {
    return (
      <svg
        className={`h-3.5 w-3.5 ${color}`}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden
      >
        <path
          d="m14.5 6.5 3-3 3 3-3 3M16.5 8.5 9 16"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 17h.01M4.5 20.5l3-3M4 14l3 3"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "test") {
    return (
      <svg
        className={`h-3.5 w-3.5 ${color}`}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden
      >
        <rect
          x="5"
          y="3.5"
          width="14"
          height="17"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="m8.5 12 2.2 2.2 4.8-5"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "deploy") {
    return (
      <svg
        className={`h-3.5 w-3.5 ${color}`}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden
      >
        <path
          d="M12 15V4"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="m8 8 4-4 4 4"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 13v5.5A2.5 2.5 0 0 0 7.5 21h9a2.5 2.5 0 0 0 2.5-2.5V13"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg
      className={`h-3.5 w-3.5 ${color}`}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M4 17.5 9.5 12l3.5 3.5L20 8.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5 8.5H20V13"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BottomIcon({ type, active = false }) {
  const color = active ? "text-accent" : "text-faint";

  if (type === "home") {
    return (
      <svg
        className={`h-4 w-4 ${color}`}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden
      >
        <path
          d="M3.5 10.5 12 3l8.5 7.5"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.5 9.5V21h13V9.5M9 21v-6h6v6"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "work") {
    return (
      <svg
        className={`h-4 w-4 ${color}`}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden
      >
        <rect
          x="3.5"
          y="5"
          width="17"
          height="15"
          rx="2.5"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M8 5V3.5h8V5M8 12h8"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "stack") {
    return (
      <svg
        className={`h-4 w-4 ${color}`}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden
      >
        <path
          d="m12 3 8.5 4.5L12 12 3.5 7.5 12 3Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path
          d="m4 12 8 4 8-4M4 16.5l8 4 8-4"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg
      className={`h-4 w-4 ${color}`}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <circle
        cx="12"
        cy="8"
        r="3.5"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M5 21c.7-3.6 3.1-5.5 7-5.5s6.3 1.9 7 5.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function PersonalProfilePhone() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setNow(new Date());
    }, 30000);

    return () => clearInterval(id);
  }, []);

  return (
    <PhoneMockup>
      <div className="flex h-full w-full flex-col bg-bg px-4 pb-3 pt-8 text-ink">

        {/* APP HEADER */}
        <div className="mb-4 flex items-center justify-between">
          <p className="font-mono text-[7px] uppercase tracking-[0.16em] text-faint">
            Sri Deepak
          </p>

          <time
            dateTime={now.toISOString()}
            className="shrink-0 font-mono text-[8px] text-faint"
          >
            {formatTime(now)}
          </time>
        </div>

        {/* PROFILE IDENTITY */}
        <div className="mb-4 flex items-center gap-2.5">
          <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full border border-border bg-surface2">
            <img
              src="/assets/profile/deepak-avatar.jpg"
              alt="Sri Deepak Bolisetti"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>

          <div className="min-w-0">
            <p className="truncate text-[10px] font-semibold text-ink">
              Sri Deepak Bolisetti
            </p>

            <p className="mt-1 font-mono text-[7px] uppercase tracking-[0.08em] text-accent">
              <StatusDot />
            </p>
          </div>
        </div>

        {/* WHAT I BUILD */}
        <section className="mb-4 rounded-xl border border-border bg-surface2 px-3 py-3">
          <p className="mb-1.5 font-mono text-[7px] uppercase tracking-[0.14em] text-faint">
            What I build
          </p>

          <p className="text-[12px] font-semibold leading-tight text-ink">
            Production Mobile &amp; Web Apps
          </p>

          <p className="mt-1 text-[8px] leading-relaxed text-muted">
            From UI and APIs to testing and deployment.
          </p>
        </section>

        {/* RECENT WORK */}
        <section className="mb-4">
          <div className="mb-2 flex items-center justify-between">
            <p className="font-mono text-[7px] uppercase tracking-[0.14em] text-faint">
              Recent work
            </p>

            <span className="font-mono text-[7px] text-faint">
              04
            </span>
          </div>

          <div className="space-y-2">

            {/* SENDRA */}
            <div className="flex items-center gap-2 rounded-xl border border-border bg-surface px-2.5 py-2.5">
              <WorkIcon
                src="/assets/sendra/sendra-icon.png"
                alt="Sendra"
              />

              <div className="min-w-0 flex-1">
                <p className="truncate text-[9px] font-semibold text-ink">
                  Sendra
                </p>

                <p className="mt-0.5 truncate text-[7px] text-muted">
                  Ride Sharing &amp; Parcel Delivery
                </p>
              </div>

              <span className="flex shrink-0 items-center gap-1 font-mono text-[7px] text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Live
              </span>
            </div>

            {/* EV MART PLUS */}
            <div className="flex items-center gap-2 rounded-xl border border-border bg-surface px-2.5 py-2.5">
              <WorkIcon
                src="/assets/evmart/evmartplus.png"
                alt="EV Mart Plus"
              />

              <div className="min-w-0 flex-1">
                <p className="truncate text-[9px] font-semibold text-ink">
                  EV Mart Plus
                </p>

                <p className="mt-0.5 truncate text-[7px] text-muted">
                  EV Products &amp; Services
                </p>
              </div>

              <span className="shrink-0 font-mono text-[7px] text-muted">
                Shipped
              </span>
            </div>

            {/* OTHER WEB PROJECTS */}
            <div className="flex items-center justify-between rounded-xl border border-border bg-surface px-2.5 py-2.5">
              <div className="flex min-w-0 items-center gap-2">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-surface2">
                  <svg
                    className="h-4 w-4 text-muted"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <rect
                      x="3"
                      y="4"
                      width="18"
                      height="15"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <path
                      d="M3 8h18"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <path
                      d="M7 12h3M7 15h6"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <div className="min-w-0">
                  <p className="truncate text-[9px] font-semibold text-ink">
                    2 Web Platforms
                  </p>

                  <p className="mt-0.5 truncate text-[7px] text-muted">
                    Internal applications
                  </p>
                </div>
              </div>

              <span className="shrink-0 font-mono text-[7px] text-muted">
                Shipped
              </span>
            </div>

          </div>
        </section>

        {/* BUILD PROCESS */}
        <section className="mb-auto">
          <p className="mb-2 font-mono text-[7px] uppercase tracking-[0.14em] text-faint">
            Build process
          </p>

          <div className="rounded-xl border border-border bg-surface px-2.5 py-3">
            <div className="flex items-start justify-between">

              {/* BUILD */}
              <div className="flex flex-col items-center">
                <div className="mb-1 flex h-6 w-6 items-center justify-center rounded-full border border-accent/40 bg-accentSoft">
                  <BuildIcon type="build" active />
                </div>

                <span className="font-mono text-[6px] text-ink">
                  Build
                </span>
              </div>

              <span className="mt-3 text-[8px] text-accent">
                →
              </span>

              {/* TEST */}
              <div className="flex flex-col items-center">
                <div className="mb-1 flex h-6 w-6 items-center justify-center rounded-full border border-border bg-surface2">
                  <BuildIcon type="test" />
                </div>

                <span className="font-mono text-[6px] text-muted">
                  Test
                </span>
              </div>

              <span className="mt-3 text-[8px] text-accent">
                →
              </span>

              {/* DEPLOY */}
              <div className="flex flex-col items-center">
                <div className="mb-1 flex h-6 w-6 items-center justify-center rounded-full border border-border bg-surface2">
                  <BuildIcon type="deploy" />
                </div>

                <span className="font-mono text-[6px] text-muted">
                  Deploy
                </span>
              </div>

              <span className="mt-3 text-[8px] text-accent">
                →
              </span>

              {/* IMPROVE */}
              <div className="flex flex-col items-center">
                <div className="mb-1 flex h-6 w-6 items-center justify-center rounded-full border border-border bg-surface2">
                  <BuildIcon type="improve" />
                </div>

                <span className="font-mono text-[6px] text-muted">
                  Improve
                </span>
              </div>

            </div>
          </div>
        </section>

        {/* BOTTOM NAVIGATION */}
        <div className="mt-4 rounded-xl border border-border bg-surface2 px-2 py-2">
          <div className="flex items-center justify-around">

            <div className="flex min-w-0 flex-col items-center gap-0.5">
              <BottomIcon type="home" active />
              <span className="font-mono text-[6px] text-accent">
                Home
              </span>
            </div>

            <div className="flex min-w-0 flex-col items-center gap-0.5">
              <BottomIcon type="work" />
              <span className="font-mono text-[6px] text-faint">
                Work
              </span>
            </div>

            <div className="flex min-w-0 flex-col items-center gap-0.5">
              <BottomIcon type="stack" />
              <span className="font-mono text-[6px] text-faint">
                Stack
              </span>
            </div>

            <div className="flex min-w-0 flex-col items-center gap-0.5">
              <BottomIcon type="me" />
              <span className="font-mono text-[6px] text-faint">
                Me
              </span>
            </div>

          </div>
        </div>

      </div>
    </PhoneMockup>
  );
}