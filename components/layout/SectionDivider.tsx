interface SectionDividerProps {
  from?: 'light' | 'dark' | 'forest';
  to?: 'light' | 'dark' | 'forest';
  flip?: boolean;
}

const bgColors = {
  light: '#F7F5F0',
  dark: '#111111',
  forest: '#0D6B3F',
};

export default function SectionDivider({
  from = 'light',
  to = 'dark',
  flip = false,
}: SectionDividerProps) {
  const fromColor = bgColors[from];
  const toColor = bgColors[to];

  return (
    <div
      className="relative w-full h-16 md:h-24 -my-px z-10"
      style={{ background: fromColor }}
    >
      <svg
        viewBox="0 0 1440 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`absolute bottom-0 w-full h-full ${flip ? 'transform scale-x-[-1]' : ''}`}
        preserveAspectRatio="none"
      >
        {/* Lightning bolt inspired diagonal cut */}
        <path
          d={`M0 0 L1440 0 L1440 96 L720 32 L0 96 Z`}
          fill={toColor}
        />
      </svg>
    </div>
  );
}
