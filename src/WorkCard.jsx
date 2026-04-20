import { resolveMediaSrc } from "./cms/mediaUrl.js";

function isVideoPath(path) {
  return /\.(mp4|webm|mov|ogg)(\?.*)?$/i.test(path);
}

export function WorkCard({
  title,
  description,
  height,
  onClick,
  heroMediaPath,
  spanFull,
  extraClassName = "",
  isResumeTailor: _resumeTailor,
  isIntelligentCms: _intelligentCms,
  isLumenDesignSystem: _lumenDs
}) {
  const heroSrc = resolveMediaSrc(heroMediaPath);
  return (
    <article
      className={`work-card ${onClick ? "work-card--clickable" : ""} ${spanFull ? "work-card--span-2" : ""} ${extraClassName}`.trim()}
      onClick={onClick}
    >
      <div className="work-card__frame">
        {heroSrc ? (
          isVideoPath(heroSrc) ? (
            <video
              className="work-card__image work-card__image--media"
              src={heroSrc}
              autoPlay
              muted
              loop
              playsInline
            />
          ) : (
            <img className="work-card__image work-card__image--media" src={heroSrc} alt={`${title} hero`} />
          )
        ) : (
          <div className="work-card__image" />
        )}
        <div className="work-card__meta">
          <div className="work-card__panel">
            <div className="work-card__orb" aria-hidden="true">
              <svg className="work-card__arrow-icon" width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M7 17L17 7M17 7H9M17 7V15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="work-card__copy">
              <p className="work-card__title">
                <span className="work-card__company">{title}</span>
              </p>
              <p className="work-card__description">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
