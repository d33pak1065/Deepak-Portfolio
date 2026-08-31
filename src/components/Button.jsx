export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  as,
  className = "",
  ...rest
}) {
  const base =
    "focus-ring inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 active:scale-[0.98]";

  const variants = {
    primary: "bg-ink text-bg hover:bg-accent hover:text-bg",
    secondary:
      "border border-border text-ink hover:border-borderStrong hover:bg-surface",
    ghost: "text-muted hover:text-ink",
  };

  const cls = `${base} ${variants[variant]} ${className}`;
  const Tag = as || (href ? "a" : "button");

  return (
    <Tag href={href} onClick={onClick} className={cls} {...rest}>
      {children}
    </Tag>
  );
}
