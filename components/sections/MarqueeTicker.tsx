'use client';

import { MARQUEE_TEXT } from '@/lib/constants';

export default function MarqueeTicker() {
  // Extract clean phrases from the string
  const items = MARQUEE_TEXT.split('·').map(s => s.trim()).filter(Boolean);

  return (
    <section style={{
      padding: '24px 0',
      overflow: 'hidden',
    }}>
      {/* 
        A clean, trendy glass-pill ticker. 
        Track uses inline animationDuration. We ensure seamless loops by using precise gap and padding.
      */}
      <div className="marquee-track" style={{ display: 'flex', width: 'max-content', animationDuration: '50s' }}>
        {[0, 1, 2, 3].map((cycle) => (
          <div key={cycle} style={{ display: 'flex', alignItems: 'center', gap: '24px', paddingRight: '24px' }}>
            {items.map((text, idx) => {
              const isPatent = text.includes('PATENT');
              return (
                <div key={idx} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 24px',
                  borderRadius: '100px',
                  border: isPatent ? '1px solid var(--border-orange)' : '1px solid rgba(255,255,255,0.06)',
                  background: isPatent ? 'rgba(247,148,29,0.05)' : 'rgba(255,255,255,0.02)',
                  backdropFilter: 'blur(12px)',
                }}>
                  {isPatent ? (
                    // Glowing indicator for important items
                    <span style={{ 
                      display: 'block', width: '6px', height: '6px', 
                      borderRadius: '50%', background: 'var(--orange)', 
                      boxShadow: '0 0 10px var(--orange-glow)' 
                    }} />
                  ) : (
                    // Subtle geometric star for normal items
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" style={{ opacity: 0.3 }}>
                      <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" fill="var(--text-1)" />
                    </svg>
                  )}
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '13px',
                    fontWeight: 500,
                    letterSpacing: '0.08em',
                    color: isPatent ? 'var(--orange)' : 'var(--text-2)',
                    whiteSpace: 'nowrap',
                  }}>
                    {text}
                  </span>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}
