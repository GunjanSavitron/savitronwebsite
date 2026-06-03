import React from "react";

interface SectionTagProps {
  children: React.ReactNode;
  hero?: boolean;
  className?: string;
}

export default function SectionTag({ children, hero = false, className = "" }: SectionTagProps) {
  return (
    <span className={`${hero ? "section-tag-hero" : "section-tag"} ${className}`}>{children}</span>
  );
}
