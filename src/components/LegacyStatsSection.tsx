import {
  GraduationCap,
  School,
  ShieldCheck,
  Star,
  UsersRound,
} from "lucide-react";
import type { ComponentType, CSSProperties } from "react";

type LegacyStat = {
  value: string;
  label: string;
  description: string[];
  accent: string;
  iconAccent?: string;
  waveAccent?: string;
  border: string;
  glow: string;
  Icon: ComponentType<{ className?: string; strokeWidth?: number }>;
  darkIcon?: boolean;
};

const legacyStats: LegacyStat[] = [
  {
    value: "950+",
    label: "Schools",
    description: ["Academic Excellence", "Across India"],
    accent: "#9FC164",
    border: "rgba(107,147,214,0.34)",
    glow: "rgba(107,147,214,0.24)",
    Icon: School,
  },
  {
    value: "950000+",
    label: "Students",
    description: ["Shaping Future", "Achievers"],
    accent: "#4F4CB0",
    iconAccent: "#6B93D6",
    waveAccent: "#9FC164",
    border: "rgba(79,76,176,0.3)",
    glow: "rgba(107,147,214,0.34)",
    Icon: UsersRound,
    darkIcon: true,
  },
  {
    value: "55000+",
    label: "Staffs",
    description: ["Experienced Teaching &", "Support Team"],
    accent: "#9FC164",
    border: "rgba(159,193,100,0.34)",
    glow: "rgba(159,193,100,0.25)",
    Icon: GraduationCap,
  },
  {
    value: "41+",
    label: "Years",
    description: ["Trusted Educational", "Legacy"],
    accent: "#4F4CB0",
    border: "rgba(79,76,176,0.34)",
    glow: "rgba(79,76,176,0.28)",
    Icon: ShieldCheck,
  },
];

export function LegacyStatsSection() {
  return (
    <section
      className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#fff_0%_48%,#ffffff4d_100%)] px-4 pb-20 pt-20 sm:px-6 sm:pb-24 sm:pt-[88px] lg:px-8 lg:pb-[104px] lg:pt-24"
      style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif" }}
    >
      <div
        aria-hidden="true"
        data-section-reveal
        className="section-decor decor-dots absolute -left-12 top-[68px] hidden h-[104px] w-[184px] sm:block"
        style={
          {
            "--decor-final-transform": "translate3d(0,0,0) rotate(0deg)",
            "--decor-x": "-18px",
            "--decor-y": "-16px",
            "--decor-opacity": "0.82",
          } as CSSProperties
        }
      />
      <div
        aria-hidden="true"
        data-section-reveal
        className="section-decor legacy-motion-blob legacy-motion-blob-a decor-slab absolute -right-[92px] -top-[118px] hidden h-[248px] w-[378px] lg:block"
        style={
          {
            "--decor-final-transform": "translate3d(0,0,0) rotate(-12deg)",
            "--legacy-blob-transform": "translate3d(0,0,0) rotate(-12deg)",
            "--legacy-blob-x": "20px",
            "--legacy-blob-y": "16px",
            "--decor-start-rotate": "-4deg",
            "--decor-x": "24px",
            "--decor-y": "-26px",
            "--decor-opacity": "0.95",
          } as CSSProperties
        }
      />
      <div
        aria-hidden="true"
        data-section-reveal
        className="section-decor legacy-motion-blob legacy-motion-blob-b decor-arc absolute -right-[18px] -top-[70px] hidden h-[262px] w-[370px] lg:block"
        style={
          {
            "--decor-final-transform": "translate3d(0,0,0) rotate(8deg)",
            "--legacy-blob-transform": "translate3d(0,0,0) rotate(8deg)",
            "--legacy-blob-x": "-14px",
            "--legacy-blob-y": "20px",
            "--decor-start-rotate": "20deg",
            "--decor-x": "18px",
            "--decor-y": "-18px",
            "--decor-opacity": "1",
          } as CSSProperties
        }
      />
      <div
        aria-hidden="true"
        data-section-reveal
        className="section-decor legacy-motion-blob legacy-motion-blob-b decor-leaf absolute -bottom-[96px] -left-[74px] hidden h-[300px] w-[214px] sm:block"
        style={
          {
            "--decor-final-transform": "translate3d(0,0,0) rotate(14deg)",
            "--legacy-blob-transform": "translate3d(0,0,0) rotate(14deg)",
            "--legacy-blob-x": "18px",
            "--legacy-blob-y": "-18px",
            "--decor-start-rotate": "2deg",
            "--decor-x": "-22px",
            "--decor-y": "30px",
            "--decor-opacity": "0.86",
            background:
              "linear-gradient(135deg, rgba(159, 193, 100, 0.78), rgba(234, 255, 198, 0.86))",
          } as CSSProperties
        }
      />
      <div
        aria-hidden="true"
        data-section-reveal
        className="section-decor legacy-motion-blob legacy-motion-blob-a decor-ring absolute -bottom-[6px] -left-[42px] hidden h-[190px] w-[124px] sm:block"
        style={
          {
            "--decor-final-transform": "translate3d(0,0,0) rotate(-9deg)",
            "--legacy-blob-transform": "translate3d(0,0,0) rotate(-9deg)",
            "--legacy-blob-x": "-12px",
            "--legacy-blob-y": "-16px",
            "--decor-start-rotate": "-22deg",
            "--decor-x": "-14px",
            "--decor-y": "26px",
            "--decor-opacity": "0.92",
          } as CSSProperties
        }
      />
      <div
        aria-hidden="true"
        data-section-reveal
        className="section-decor decor-dots absolute bottom-[30px] right-[22px] hidden h-[108px] w-[130px] lg:block"
        style={
          {
            "--decor-final-transform": "translate3d(0,0,0) rotate(0deg)",
            "--decor-x": "16px",
            "--decor-y": "18px",
            "--decor-opacity": "0.68",
          } as CSSProperties
        }
      />

      <div className="relative mx-auto w-full max-w-[1310px]">
        <div className="mx-auto max-w-[930px] text-center">
          <div
            data-section-reveal
            className="legacy-copy-reveal legacy-delay-1 mx-auto flex w-[178px] items-center justify-center gap-4 text-[#4F4CB0]"
          >
            <span className="h-[2px] flex-1 bg-current" />
            <Star className="h-8 w-8 fill-current" strokeWidth={1.4} />
            <span className="h-[2px] flex-1 bg-current" />
          </div>

          <h2
            data-wave-reveal
            className="legacy-heading-wave wave-reveal-heading mt-7 text-[32px] font-extrabold leading-[1.1] tracking-[0] text-[#101A5D] sm:text-[46px] sm:leading-[1.06] lg:text-[57px]"
          >
            <span>
              An Illustrious Legacy
            </span>
            <span className="block">
              we continue to{" "}
              <span className="relative inline-block text-[#D99A00]">
                Shape
                <svg
                  aria-hidden="true"
                  viewBox="0 0 196 24"
                  className="legacy-shape-underline absolute -bottom-4 left-1/2 h-6 w-[126%] -translate-x-1/2 text-[#D99A00]"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M6 17C52 7 122 4 190 10"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="4.4"
                  />
                  <path
                    d="M46 22C86 15 139 13 176 16"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="4.2"
                  />
                </svg>
              </span>
            </span>
          </h2>

          <div
            data-section-reveal
            className="legacy-copy-reveal legacy-delay-3 mx-auto mt-10 flex w-[130px] items-center justify-center gap-5 text-[#4F4CB0]"
          >
            <span className="h-px flex-1 bg-current" />
            <span className="h-2.5 w-2.5 rounded-full bg-current" />
            <span className="h-px flex-1 bg-current" />
          </div>

          <p
            data-section-reveal
            className="legacy-copy-reveal legacy-delay-4 mx-auto mt-7 max-w-[650px] text-[14px] font-medium leading-7 text-[#7280A3] sm:text-[16px] sm:leading-8"
          >
            A journey of excellence, innovation, and leadership
            <span className="hidden sm:inline"> </span>
            <span className="block sm:inline">
              that inspires generations and builds a better tomorrow.
            </span>
          </p>
        </div>

        <div className="mx-auto mt-[62px] grid max-w-[292px] grid-cols-1 justify-center gap-8 md:max-w-[660px] md:grid-cols-2 lg:max-w-none lg:grid-cols-4 lg:gap-10">
          {legacyStats.map((stat) => {
            const Icon = stat.Icon;
            const iconAccent = stat.iconAccent ?? stat.accent;
            const waveAccent = stat.waveAccent ?? stat.accent;

            return (
              <article
                key={stat.label}
                data-section-reveal
                className="legacy-card-reveal group relative min-h-[405px] overflow-hidden rounded-[20px] border bg-white/80 px-7 pb-8 pt-[34px] text-center shadow-[0_30px_64px_rgba(107,147,214,0.13)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-2"
                style={{
                  borderColor: stat.border,
                  boxShadow: `0 28px 62px rgba(107,147,214,0.13), 0 0 54px ${stat.glow}`,
                }}
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 292 96"
                  className="legacy-card-wave absolute left-0 top-[58px] h-[92px] w-full opacity-[0.42] transition-opacity duration-300 group-hover:opacity-[0.68]"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 45C48 24 88 27 132 49C174 70 218 71 292 26"
                    fill="none"
                    stroke={waveAccent}
                    strokeLinecap="round"
                    strokeWidth="4"
                  />
                </svg>

                <div
                  aria-hidden="true"
                  className="absolute -bottom-2 -left-3 h-[86px] w-[88px] opacity-55"
                  style={{
                    backgroundImage: `radial-gradient(circle, ${stat.accent} 1.55px, transparent 2.35px)`,
                    backgroundSize: "11px 11px",
                  }}
                />
                <div
                  aria-hidden="true"
                  className="absolute bottom-1 right-2 h-[82px] w-[100px] opacity-55"
                  style={{
                    backgroundImage: `radial-gradient(circle, ${stat.accent} 1.55px, transparent 2.35px)`,
                    backgroundSize: "11px 11px",
                  }}
                />

                <div
                  className="legacy-card-icon relative z-10 mx-auto flex h-[78px] w-[78px] items-center justify-center rounded-full border-[8px] border-white shadow-[0_16px_34px_rgba(16,26,93,0.16)] transition-transform duration-300 group-hover:scale-105"
                  style={{
                    backgroundColor: iconAccent,
                    color: stat.darkIcon ? "#101A5D" : "#FFFFFF",
                    boxShadow: `0 18px 38px ${stat.glow}`,
                  }}
                >
                  <Icon className="h-9 w-9" strokeWidth={1.9} />
                </div>

                <p
                  className="relative z-10 mt-10 text-[48px] font-extrabold leading-none tracking-[0] sm:text-[50px]"
                  style={{ color: stat.accent }}
                >
                  {stat.value}
                </p>

                <div className="relative z-10 mx-auto mt-5 flex w-[180px] items-center justify-center gap-2.5">
                  <span
                    className="legacy-label-line h-px flex-1"
                    style={{ backgroundColor: stat.accent }}
                  />
                  <span
                    className="legacy-label-dot h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: stat.accent }}
                  />
                  <h3
                    className="text-[13px] font-bold uppercase leading-none tracking-[0.12em]"
                    style={{ color: stat.accent }}
                  >
                    {stat.label}
                  </h3>
                  <span
                    className="legacy-label-dot h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: stat.accent }}
                  />
                  <span
                    className="legacy-label-line h-px flex-1"
                    style={{ backgroundColor: stat.accent }}
                  />
                </div>

                <p className="relative z-10 mt-7 text-[15px] font-medium leading-7 text-[#14213F]">
                  {stat.description.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>

                <span
                  aria-hidden="true"
                  className="legacy-card-bottom-line relative z-10 mx-auto mt-[46px] block h-2 w-[78px] rounded-full transition-all duration-300 group-hover:w-24"
                  style={{ backgroundColor: stat.accent }}
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}



