/** Same stroke arrow as work cards on the home page (`work-card__arrow-icon`). */
export function ArrowUpRightIcon({ className = "", width = 22, height = 22 }) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7 17L17 7M17 7H9M17 7V15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function NavTextButton({ children, onClick, className = "", href, target, rel }) {
  const sharedClassName = `nav-text-button ${className}`.trim();

  const inner = (
    <span className="nav-text-button__surface">
      <span className="nav-text-button__arrow" aria-hidden="true">
        <ArrowUpRightIcon className="nav-text-button__arrow-icon" />
      </span>
      <span className="nav-text-button__label">{children}</span>
    </span>
  );

  if (href) {
    return (
      <a className={sharedClassName} href={href} target={target} rel={rel}>
        {inner}
      </a>
    );
  }

  return (
    <button type="button" className={sharedClassName} onClick={onClick}>
      {inner}
    </button>
  );
}
