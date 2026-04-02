interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  dark?: boolean;
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  align = 'left',
  dark = false,
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col ${alignClass} mb-16 md:mb-20`}>
      {/* Label */}
      <div className={`flex items-center gap-3 mb-5`}>
        <span className={`h-px w-10 ${dark ? 'bg-amber' : 'bg-forest'}`} />
        <span
          className={`text-xs font-bold tracking-[0.25em] uppercase font-heading ${
            dark ? 'text-amber' : 'text-forest'
          }`}
        >
          {label}
        </span>
        <span className={`h-px w-10 ${dark ? 'bg-amber' : 'bg-forest'} ${align === 'center' ? '' : 'hidden'}`} />
      </div>

      {/* Title */}
      <h2
        className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] font-heading max-w-4xl ${
          dark ? 'text-cream' : 'text-carbon'
        }`}
      >
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p
          className={`mt-6 text-lg md:text-xl font-light leading-relaxed max-w-2xl ${
            dark ? 'text-gray-400' : 'text-gray-600'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
