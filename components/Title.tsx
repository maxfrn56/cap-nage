"use client";

interface TitleProps {
  as?: "h1" | "h2" | "h3";
  subtitle?: string;
  align?: "left" | "center";
  children: React.ReactNode;
  className?: string;
}

export function Title({
  as: Tag = "h2",
  subtitle,
  align = "left",
  children,
  className = "",
}: TitleProps) {
  const alignClass = align === "center" ? "text-center" : "";
  return (
    <div className={`${alignClass} ${className}`.trim()}>
      <Tag className="font-radley text-4xl sm:text-5xl lg:text-6xl text-indigo">
        {children}
      </Tag>
      {subtitle && (
        <p className="font-raleway text-cyan mt-3 text-lg sm:text-xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
