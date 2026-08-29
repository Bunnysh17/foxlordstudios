/**
 * FOXLORD STUDIO'S logo mark.
 * Renders the studio's official logo image, used across the entire site.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <img
      src="/images/logo.png"
      alt="FOXLORD STUDIO'S logo"
      className={className}
      draggable={false}
      style={{ objectFit: "contain" }}
    />
  );
}
