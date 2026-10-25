import Image from 'next/image';

export interface TechCardItem {
  name: string;
  icon?: string;
}

export default function TechCard({
  tech,
  className = '',
  onMouseEnter,
  onMouseLeave,
}: {
  tech: TechCardItem;
  className?: string;
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
}) {
  return (
    <div
      className={`flex items-center gap-3 p-3 rounded-lg border border-white/[0.04] bg-surface/50 ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="relative flex h-10 w-10 shrink-0 items-center justify-center">
        {tech.icon ? (
          <Image src={tech.icon} alt={tech.name} width={40} height={40} className="h-full w-full object-contain" />
        ) : (
          <span aria-hidden="true" className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-elevated-dark font-mono text-[10px] font-bold text-accent-light">
            {tech.name
              .split(/[\s.]+/)
              .filter(Boolean)
              .slice(0, 2)
              .map((part) => part.charAt(0))
              .join('')
              .toUpperCase()}
          </span>
        )}
      </div>
      <p className="break-words font-mono text-xs font-bold text-cream sm:text-sm">{tech.name}</p>
    </div>
  );
}
