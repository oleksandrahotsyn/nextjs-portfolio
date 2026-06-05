type SectionTitleProps = {
  title: string;
  subtitle?: string;
  center?: boolean;
};

export default function SectionTitle({
  title,
  subtitle,
  center = true,
}: SectionTitleProps) {
  return (
    <div className={center ? "text-center" : ""}>
      {subtitle && (
        <p className="mb-2 text-sm font-medium uppercase tracking-wider text-blue-600">
          {subtitle}
        </p>
      )}

      <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
        {title}
      </h2>
    </div>
  );
}