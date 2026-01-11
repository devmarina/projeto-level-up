import "./Button.css";

export default function Button({
  variant = "primary",
  size = "medium",
  onClick,
  disabled = false,
  children,
  className = "",
  type = "button",
  ...props
}) {
  const buttonClass = `btn btn-${variant} btn-${size} ${className}`;

  return (
    <button
      type={type}
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
