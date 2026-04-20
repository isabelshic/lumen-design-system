import { useEffect, useRef, useCallback } from "react";

const RAMP = [" ", " ", " ", " ", "·", "·", ".", "'", "+", "*", "✦", "★"];
const CHAR_W = 8.4;
const CHAR_H = 17.6;

/** LinkedIn, email, GitHub row — shared with DesignSystemPage. `variant="light"` for dark icons on pale surfaces. */
export function FooterSocialLinks({ variant = "dark" }) {
  const light = variant === "light";
  return (
    <div
      className={`site-footer__socials${light ? " site-footer__socials--on-light" : ""}`.trim()}
      aria-label="Social links"
    >
      <a href="https://linkedin.com/in/isabel-shic" target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.7145 4.4845H6.5715V5.4095C6.839 4.8775 7.525 4.3995 8.5555 4.3995C10.531 4.3995 11 5.4585 11 7.4015V11H9V7.844C9 6.7375 8.7325 6.1135 8.0515 6.1135C7.107 6.1135 6.7145 6.786 6.7145 7.8435V11H4.7145V4.4845ZM1.285 10.915H3.285V4.3995H1.285V10.915ZM3.5715 2.275C3.57157 2.44264 3.53833 2.60862 3.47369 2.76329C3.40906 2.91797 3.31433 3.05826 3.195 3.176C3.07532 3.29506 2.93335 3.38937 2.77721 3.45354C2.62107 3.51771 2.45381 3.55049 2.285 3.55C1.9448 3.54924 1.61846 3.41514 1.376 3.1765C1.25715 3.05832 1.16277 2.91787 1.09825 2.76318C1.03373 2.6085 1.00034 2.4426 1 2.275C1 1.9365 1.135 1.6125 1.3765 1.3735C1.61835 1.13394 1.94509 0.999688 2.2855 1C2.6265 1 2.9535 1.1345 3.195 1.3735C3.4365 1.6125 3.5715 1.9365 3.5715 2.275Z"
            fill="currentColor"
          />
        </svg>
      </a>
      <a href="mailto:shic.isabel@gmail.com" aria-label="Send email">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path
            d="M10 2H2C1.45 2 1.005 2.45 1.005 3L1 9C1 9.55 1.45 10 2 10H10C10.55 10 11 9.55 11 9V3C11 2.45 10.55 2 10 2ZM9.8 4.125L6.265 6.335C6.105 6.435 5.895 6.435 5.735 6.335L2.2 4.125C2.14986 4.09686 2.10596 4.05883 2.07094 4.01323C2.03593 3.96762 2.01053 3.91539 1.99629 3.85969C1.98204 3.80398 1.97925 3.74597 1.98808 3.68915C1.99691 3.63234 2.01717 3.57791 2.04764 3.52915C2.07811 3.48039 2.11816 3.43833 2.16536 3.4055C2.21256 3.37267 2.26594 3.34976 2.32225 3.33815C2.37856 3.32654 2.43664 3.32648 2.49298 3.33797C2.54931 3.34946 2.60273 3.37227 2.65 3.405L6 5.5L9.35 3.405C9.39727 3.37227 9.45069 3.34946 9.50702 3.33797C9.56336 3.32648 9.62144 3.32654 9.67775 3.33815C9.73407 3.34976 9.78744 3.37267 9.83464 3.4055C9.88184 3.43833 9.92189 3.48039 9.95236 3.52915C9.98283 3.57791 10.0031 3.63234 10.0119 3.68915C10.0207 3.74597 10.018 3.80398 10.0037 3.85969C9.98947 3.91539 9.96407 3.96762 9.92906 4.01323C9.89404 4.05883 9.85014 4.09686 9.8 4.125Z"
            fill="currentColor"
          />
        </svg>
      </a>
      <a href="https://github.com/isabelshic" target="_blank" rel="noreferrer" aria-label="GitHub profile">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path
            d="M6 1C5.34339 1 4.69321 1.12933 4.08658 1.3806C3.47995 1.63188 2.92876 2.00017 2.46447 2.46447C1.52678 3.40215 1 4.67392 1 6C1 8.21 2.435 10.085 4.42 10.75C4.67 10.79 4.75 10.635 4.75 10.5V9.655C3.365 9.955 3.07 8.985 3.07 8.985C2.84 8.405 2.515 8.25 2.515 8.25C2.06 7.94 2.55 7.95 2.55 7.95C3.05 7.985 3.315 8.465 3.315 8.465C3.75 9.225 4.485 9 4.77 8.88C4.815 8.555 4.945 8.335 5.085 8.21C3.975 8.085 2.81 7.655 2.81 5.75C2.81 5.195 3 4.75 3.325 4.395C3.275 4.27 3.1 3.75 3.375 3.075C3.375 3.075 3.795 2.94 4.75 3.585C5.145 3.475 5.575 3.42 6 3.42C6.425 3.42 6.855 3.475 7.25 3.585C8.205 2.94 8.625 3.075 8.625 3.075C8.9 3.75 8.725 4.27 8.675 4.395C9 4.75 9.19 5.195 9.19 5.75C9.19 7.66 8.02 8.08 6.905 8.205C7.085 8.36 7.25 8.665 7.25 9.13V10.5C7.25 10.635 7.33 10.795 7.585 10.75C9.57 10.08 11 8.21 11 6C11 5.34339 10.8707 4.69321 10.6194 4.08658C10.3681 3.47995 9.99983 2.92876 9.53553 2.46447C9.07124 2.00017 8.52005 1.63188 7.91342 1.3806C7.30679 1.12933 6.65661 1 6 1Z"
            fill="currentColor"
          />
        </svg>
      </a>
    </div>
  );
}

export default function Footer({ onWorkClick, onAboutClick, onResumeClick }) {
  const footerRef = useRef(null);
  const fieldRef = useRef(null);
  const stateRef = useRef(null);
  const shimmerRef = useRef({ shimmer: 0, shimmerPeak: 0 });
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef(null);

  const triggerShimmer = useCallback(() => {
    shimmerRef.current.shimmer = 1;
    shimmerRef.current.shimmerPeak = 1;
  }, []);

  useEffect(() => {
    const footer = footerRef.current;
    const field = fieldRef.current;
    if (!footer || !field) return;

    function init() {
      const COLS = Math.ceil(footer.offsetWidth / CHAR_W) + 1;
      const ROWS = Math.ceil(footer.offsetHeight / CHAR_H) + 1;
      const N = COLS * ROWS;

      const base = new Float32Array(N);
      const twAngle = new Float32Array(N);
      const twSpeed = new Float32Array(N);
      const cur = new Float32Array(N);

      for (let i = 0; i < N; i++) {
        const r = Math.random();
        if (r < 0.0002) base[i] = 10 + Math.random();
        else if (r < 0.001) base[i] = 7 + Math.random();
        else if (r < 0.004) base[i] = 5 + Math.random();
        else if (r < 0.01) base[i] = 4 + Math.random();
        cur[i] = base[i];
        twAngle[i] = Math.random() * Math.PI * 2;
        twSpeed[i] = 0.003 + Math.random() * 0.01;
      }

      stateRef.current = { COLS, ROWS, base, twAngle, twSpeed, cur };
    }

    function tick() {
      const s = stateRef.current;
      if (!s) return;

      const sh = shimmerRef.current;
      sh.shimmerPeak = Math.max(0, sh.shimmerPeak - 0.025);
      sh.shimmer = Math.max(0, sh.shimmer - 0.004);
      const intensity = sh.shimmerPeak + sh.shimmer * 0.5;

      const mouse = mouseRef.current;
      const { COLS, ROWS, base, twAngle, twSpeed, cur } = s;
      const MAX = RAMP.length - 1;

      let out = "";
      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          const i = r * COLS + c;

          const speedBoost = 1 + intensity * 8;
          const ampBoost = 1 + intensity * 7;
          twAngle[i] += twSpeed[i] * speedBoost;

          const b = base[i];
          const baseAmp = b >= 9 ? 1.2 : b >= 6 ? 0.7 : b >= 4 ? 0.3 : 0;
          const tw = b + Math.sin(twAngle[i]) * baseAmp * ampBoost;

          const px = c * CHAR_W;
          const py = r * CHAR_H;
          const dx = mouse.x - px;
          const dy = mouse.y - py;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const boost = dist < 200 ? Math.pow(1 - dist / 200, 2) * 3.5 : 0;

          const target = Math.min(MAX, tw + boost);
          cur[i] += (target - cur[i]) * (boost > cur[i] - b ? 0.14 : 0.05);
          out += RAMP[Math.max(0, Math.min(MAX, Math.round(cur[i])))];
        }
        out += "\n";
      }

      field.textContent = out;
      rafRef.current = requestAnimationFrame(tick);
    }

    function onMouseMove(e) {
      const rect = footer.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    }
    function onMouseLeave() {
      mouseRef.current = { x: -9999, y: -9999 };
    }

    init();
    footer.addEventListener("mousemove", onMouseMove);
    footer.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("resize", init);
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      footer.removeEventListener("mousemove", onMouseMove);
      footer.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("resize", init);
    };
  }, []);

  return (
    <footer className="site-footer" ref={footerRef}>
      <div className="site-footer__stars" ref={fieldRef} aria-hidden="true" />

      <div className="site-footer__content">
        <div className="site-footer__middle">
          <div className="site-footer__left">
            <p className="site-footer__identity">
              <span className="site-footer__online-dot" aria-hidden="true" />
              ISABEL SHIC
            </p>
            <p className="site-footer__headline">
              Made in a <em onMouseEnter={triggerShimmer}>galaxy</em>
              <br />
              not so far away.
            </p>
          </div>

          <div className="site-footer__spacer" aria-hidden="true" />
          <div className="site-footer__rule" aria-hidden="true" />

          <nav className="site-footer__nav" aria-label="Footer navigation">
            <button type="button" onClick={onWorkClick}>
              Work
            </button>
            <button type="button" onClick={onAboutClick}>
              About
            </button>
            <button type="button" onClick={onResumeClick}>
              Resume
            </button>
          </nav>
        </div>

        <div className="site-footer__bottom">
          <FooterSocialLinks />

          <span className="site-footer__transmission">[Transmission End]</span>

          <p className="site-footer__copyright">Copyright by Isabel Shic, 2025.</p>
        </div>
      </div>
    </footer>
  );
}
