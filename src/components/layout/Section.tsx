import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
};

export default function Section({
  children,
  id,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`py-20 lg:py-28 ${className}`}>
      {children}
    </section>
  );
}