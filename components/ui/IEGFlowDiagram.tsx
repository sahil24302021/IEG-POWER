'use client';

import React from 'react';

export default function IEGFlowDiagram() {
  /* ─── stator tick positions (12 evenly spaced) ─── */
  // Updated center to 590, 110 to match the new larger layout
  const statorTicks = Array.from({ length: 12 }, (_, i) => {
    const a = (i / 12) * Math.PI * 2;
    return {
      x1: 590 + Math.cos(a) * 26, y1: 110 + Math.sin(a) * 26,
      x2: 590 + Math.cos(a) * 34, y2: 110 + Math.sin(a) * 34,
    };
  });

  /* ─── controller pin positions ─── */
  const ctrlPinsY  = [88, 98, 108, 118, 128]; // 5 pins left/right
  const ctrlPinsX  = [188, 198, 208, 218]; // 4 pins top/bottom

  return (
    <>
      <style>{`
        @keyframes ieg-fwd  { to { stroke-dashoffset:-32; } }
        @keyframes ieg-rev  { to { stroke-dashoffset: 32; } }
        @keyframes ieg-glow {
          0%,100%{ filter:drop-shadow(0 0 6px rgba(247,148,29,.4)); }
          50%    { filter:drop-shadow(0 0 20px rgba(247,148,29,.8)); }
        }
        @keyframes ieg-pulse {
          0%,100%{ opacity:.13; }  50%{ opacity:.3; }
        }
        @keyframes fan-spin { to{ transform:rotate(360deg); } }
        @keyframes alt-spin { to{ transform:rotate(360deg); } }

        .ieg-ff  { stroke-dasharray:6 6; animation:ieg-fwd 1.1s linear infinite; }
        .ieg-fr  { stroke-dasharray:8 6; animation:ieg-rev 1.6s linear infinite; }
        .ieg-glow{ animation:ieg-glow 2.4s ease-in-out infinite; }
        .ieg-p   { animation:ieg-pulse 3s ease-in-out infinite; }
        /* Removed transform-box to allow perfect explicit origin rotation */
        .fan     { animation:fan-spin 2s linear infinite; }
        .alt-rot { animation:alt-spin 3.2s linear infinite; }
      `}</style>

      <div style={{
        position:'absolute', inset:0, borderRadius:'16px',
        background:'radial-gradient(ellipse at 60% 50%,rgba(247,148,29,.07) 0%,transparent 65%)',
        pointerEvents:'none',
      }}/>

      <svg
        viewBox="0 0 710 460"
        width="100%"
        style={{ height:'auto', position:'relative', zIndex:1, overflow:'visible' }}
        aria-label="IEG system energy flow diagram"
      >
        <defs>
          {/* clip paths — updated for larger 100x100 nodes */}
          <clipPath id="cb"><rect x="20"  y="60" width="100" height="100" rx="12"/></clipPath>
          <clipPath id="cc"><rect x="150" y="60" width="100" height="100" rx="12"/></clipPath>
          <clipPath id="cm"><rect x="280" y="60" width="100" height="100" rx="12"/></clipPath>
          <clipPath id="ci"><rect x="410" y="60" width="100" height="100" rx="12"/></clipPath>
          <clipPath id="ca"><rect x="540" y="60" width="100" height="100" rx="12"/></clipPath>

          {/* arrow markers */}
          <marker id="ak" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M1 2L9 5L1 8" fill="none" stroke="rgba(180,180,180,.75)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </marker>
          <marker id="ag" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M1 2L9 5L1 8" fill="none" stroke="#1B7340" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </marker>
          <marker id="ao" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M1 2L9 5L1 8" fill="none" stroke="#F7941D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </marker>
          <marker id="ao-s" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M1 2L9 5L1 8" fill="none" stroke="#F7941D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </marker>
          <marker id="ag-s" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M1 2L9 5L1 8" fill="none" stroke="#1B7340" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </marker>

          {/* particle motion paths */}
          <path id="p1" d="M120 110 L150 110" fill="none"/>
          <path id="p2" d="M250 110 L280 110" fill="none"/>
          <path id="p3" d="M380 110 L410 110" fill="none"/>
          <path id="p4" d="M510 110 L540 110" fill="none"/>
          <path id="pfb" d="M590 60 Q590 0 330 0 Q70 0 70 60" fill="none"/>
          <path id="pld" d="M200 160 L200 360 L290 360" fill="none"/>
        </defs>

        {/* ── FEEDBACK ARC ── */}
        <path d="M590 60 Q590 0 330 0 Q70 0 70 60"
          fill="none" stroke="rgba(247,148,29,.15)" strokeWidth="2" strokeDasharray="8 6"/>
        <path d="M590 60 Q590 0 330 0 Q70 0 70 60"
          fill="none" stroke="rgba(247,148,29,.6)" strokeWidth="2"
          strokeDasharray="8 6" className="ieg-fr" markerStart="url(#ao-s)"/>
        <line x1="200" y1="18" x2="200" y2="60"
          fill="none" stroke="rgba(27,115,64,.5)" strokeWidth="2" markerEnd="url(#ag-s)"/>
        <text x="330" y="-12" textAnchor="middle"
          fill="rgba(247,148,29,.6)" fontSize="11" fontWeight="700"
          fontFamily="var(--font-mono,monospace)" letterSpacing=".14em">
          CLOSED LOOP FEEDBACK
        </text>

        {/* ── CONNECTORS static ── */}
        <line x1="120" y1="110" x2="150" y2="110" stroke="rgba(180,180,180,.2)" strokeWidth="2.5" markerEnd="url(#ak)"/>
        <line x1="250" y1="110" x2="280" y2="110" stroke="rgba(27,115,64,.35)" strokeWidth="2.5" markerEnd="url(#ag)"/>
        <line x1="380" y1="110" x2="410" y2="110" stroke="rgba(247,148,29,.35)" strokeWidth="2.5" markerEnd="url(#ao)"/>
        <line x1="510" y1="110" x2="540" y2="110" stroke="rgba(247,148,29,.35)" strokeWidth="2.5" markerEnd="url(#ao)"/>
        
        {/* animated dashes */}
        <line x1="120" y1="110" x2="150" y2="110" stroke="rgba(180,180,180,.6)" strokeWidth="2.5" className="ieg-ff"/>
        <line x1="250" y1="110" x2="280" y2="110" stroke="rgba(27,115,64,.8)"   strokeWidth="2.5" className="ieg-ff"/>
        <line x1="380" y1="110" x2="410" y2="110" stroke="rgba(247,148,29,.8)"  strokeWidth="2.5" className="ieg-ff"/>
        <line x1="510" y1="110" x2="540" y2="110" stroke="rgba(247,148,29,.8)"  strokeWidth="2.5" className="ieg-ff"/>

        {/* ── LOAD path ── */}
        <path d="M200 160 L200 360 L290 360" fill="none" stroke="rgba(27,115,64,.28)" strokeWidth="2" markerEnd="url(#ag)"/>
        <path d="M200 160 L200 360 L290 360" fill="none" stroke="rgba(27,115,64,.6)"  strokeWidth="2" className="ieg-ff"/>

        {/* ════════════════ NODE 1 — BATTERY (x=20) ════════════════ */}
        <g>
          <rect x="20" y="60" width="100" height="100" rx="12" fill="rgba(27,115,64,.08)" stroke="rgba(27,115,64,.38)" strokeWidth="1.5"/>
          <g clipPath="url(#cb)">
            {/* body */}
            <rect x="32" y="87" width="66" height="46" rx="6" fill="none" stroke="rgba(27,115,64,.65)" strokeWidth="2.5"/>
            {/* terminal */}
            <rect x="98" y="102" width="10" height="16" rx="3" fill="rgba(27,115,64,.55)"/>
            {/* charge bars */}
            <rect x="38" y="93" width="10" height="34" rx="2" fill="rgba(27,115,64,.18)"/>
            <rect x="52" y="93" width="10" height="34" rx="2" fill="rgba(27,115,64,.32)"/>
            <rect x="66" y="93" width="10" height="34" rx="2" fill="rgba(27,115,64,.50)"/>
            <rect x="80" y="93" width="10" height="34" rx="2" fill="rgba(27,115,64,.76)"/>
          </g>
          <text x="70" y="185" textAnchor="middle" fill="#1B7340" fontSize="14" fontWeight="700" fontFamily="var(--font-mono,monospace)" letterSpacing=".06em">BATTERY</text>
          <text x="70" y="205" textAnchor="middle" fill="rgba(27,115,64,.6)" fontSize="11" fontFamily="var(--font-mono,monospace)">12V – 60V</text>
          <text x="70" y="235" textAnchor="middle" fill="#1B7340" fontSize="12" fontWeight="bold" fontFamily="var(--font-mono,monospace)">~85% eff.</text>
        </g>

        {/* ════════════════ NODE 2 — CONTROLLER (x=150) ════════════════ */}
        <g>
          <rect x="150" y="60" width="100" height="100" rx="12" fill="rgba(27,115,64,.08)" stroke="rgba(27,115,64,.38)" strokeWidth="1.5"/>
          <g clipPath="url(#cc)">
            {/* chip package */}
            <rect x="170" y="80" width="60" height="60" rx="6" fill="rgba(27,115,64,.14)" stroke="rgba(27,115,64,.55)" strokeWidth="2"/>
            {/* die */}
            <rect x="180" y="90" width="40" height="40" rx="4" fill="rgba(27,115,64,.2)"/>
            {/* grid lines on die */}
            <line x1="193" y1="90" x2="193" y2="130" stroke="rgba(27,115,64,.22)" strokeWidth="1"/>
            <line x1="207" y1="90" x2="207" y2="130" stroke="rgba(27,115,64,.22)" strokeWidth="1"/>
            <line x1="180" y1="103" x2="220" y2="103" stroke="rgba(27,115,64,.22)" strokeWidth="1"/>
            <line x1="180" y1="117" x2="220" y2="117" stroke="rgba(27,115,64,.22)" strokeWidth="1"/>
            {/* pins left */}
            {ctrlPinsY.map((py,i)=>( <line key={`l-${i}`} x1="158" y1={py} x2="170" y2={py} stroke="rgba(27,115,64,.65)" strokeWidth="1.5"/> ))}
            {/* pins right */}
            {ctrlPinsY.map((py,i)=>( <line key={`r-${i}`} x1="230" y1={py} x2="242" y2={py} stroke="rgba(27,115,64,.65)" strokeWidth="1.5"/> ))}
            {/* pins top */}
            {ctrlPinsX.map((px,i)=>( <line key={`t-${i}`} x1={px} y1="68" x2={px} y2="80" stroke="rgba(27,115,64,.65)" strokeWidth="1.5"/> ))}
            {/* pins bottom */}
            {ctrlPinsX.map((px,i)=>( <line key={`b-${i}`} x1={px} y1="140" x2={px} y2="152" stroke="rgba(27,115,64,.65)" strokeWidth="1.5"/> ))}
          </g>
          <text x="200" y="185" textAnchor="middle" fill="#1B7340" fontSize="14" fontWeight="700" fontFamily="var(--font-mono,monospace)" letterSpacing=".04em">CONTROLLER</text>
          <text x="200" y="235" textAnchor="middle" fill="#1B7340" fontSize="12" fontWeight="bold" fontFamily="var(--font-mono,monospace)">~95% eff.</text>
        </g>

        {/* ════════════════ NODE 3 — BLDC MOTOR (x=280) ════════════════ */}
        <g>
          <rect x="280" y="60" width="100" height="100" rx="12" fill="rgba(27,115,64,.08)" stroke="rgba(27,115,64,.38)" strokeWidth="1.5"/>
          <g clipPath="url(#cm)">
            <circle cx="330" cy="110" r="36" fill="rgba(27,115,64,.05)" stroke="rgba(27,115,64,.25)" strokeWidth="1.5"/>
            
            {/* Symmetrical spinning fan blades properly centered */}
            <g className="fan" style={{ transformOrigin: '330px 110px' }}>
              <ellipse cx="330" cy="80" rx="8" ry="24" fill="rgba(27,115,64,.45)" stroke="rgba(27,115,64,.7)" strokeWidth="1"/>
              <ellipse cx="330" cy="80" rx="8" ry="24" fill="rgba(27,115,64,.45)" stroke="rgba(27,115,64,.7)" strokeWidth="1" transform="rotate(120 330 110)"/>
              <ellipse cx="330" cy="80" rx="8" ry="24" fill="rgba(27,115,64,.45)" stroke="rgba(27,115,64,.7)" strokeWidth="1" transform="rotate(240 330 110)"/>
            </g>
            
            {/* static hub */}
            <circle cx="330" cy="110" r="12" fill="rgba(27,115,64,.2)" stroke="rgba(27,115,64,.65)" strokeWidth="2"/>
            <circle cx="330" cy="110" r="5" fill="rgba(27,115,64,.9)"/>
          </g>
          <text x="330" y="185" textAnchor="middle" fill="#1B7340" fontSize="14" fontWeight="700" fontFamily="var(--font-mono,monospace)" letterSpacing=".04em">BLDC MOTOR</text>
          <text x="330" y="205" textAnchor="middle" fill="rgba(27,115,64,.6)" fontSize="11" fontFamily="var(--font-mono,monospace)"></text>
          <text x="330" y="235" textAnchor="middle" fill="#1B7340" fontSize="12" fontWeight="bold" fontFamily="var(--font-mono,monospace)">~80% eff.</text>
        </g>

        {/* ════════════════ NODE 4 — IEG SYSTEM (x=410) ════════════════ */}
        <g className="ieg-glow">
          {/* pulse halo */}
          <rect x="400" y="50" width="120" height="120" rx="16" fill="rgba(247,148,29,.14)" className="ieg-p"/>
          {/* card */}
          <rect x="410" y="60" width="100" height="100" rx="12" fill="#F7941D" stroke="#C97008" strokeWidth="2"/>
          <g clipPath="url(#ci)">
            <circle cx="460" cy="110" r="34" fill="rgba(255,255,255,.07)" stroke="rgba(255,255,255,.25)" strokeWidth="1.5"/>
            {/* bold lightning bolt */}
            <path d="M465 75 L450 105 L462 105 L455 140 L475 110 L463 110 Z" fill="white" opacity=".95"/>
          </g>
          <text x="460" y="185" textAnchor="middle" fill="rgba(55,24,0,.92)" fontSize="14" fontWeight="800" fontFamily="var(--font-mono,monospace)" letterSpacing=".05em">IEG SYSTEM</text>
          <text x="460" y="205" textAnchor="middle" fill="rgba(247,148,29,.9)" fontSize="11" fontWeight="700" fontFamily="var(--font-mono,monospace)">~180% eff.</text>
        </g>

        {/* ════════════════ NODE 5 — ALTERNATOR (x=540) ════════════════ */}
        <g>
          <rect x="540" y="60" width="100" height="100" rx="12" fill="rgba(27,115,64,.08)" stroke="rgba(27,115,64,.45)" strokeWidth="1.5"/>
          <g clipPath="url(#ca)">
            {/* outer stator */}
            <circle cx="590" cy="110" r="34" fill="rgba(27,115,64,.06)" stroke="rgba(27,115,64,.35)" strokeWidth="1.5"/>
            {/* stator teeth */}
            {statorTicks.map((t,i)=>(
              <line key={i} x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2} stroke="rgba(27,115,64,.5)" strokeWidth="2.5" strokeLinecap="round"/>
            ))}
            <circle cx="590" cy="110" r="24" fill="rgba(27,115,64,.05)" stroke="rgba(27,115,64,.25)" strokeWidth="1.5"/>
            
            {/* smoothly rotating rotor centered */}
            <g className="alt-rot" style={{ transformOrigin: '590px 110px' }}>
              <rect x="586" y="86" width="8" height="48" rx="3" fill="rgba(27,115,64,.35)" stroke="rgba(27,115,64,.7)" strokeWidth="1.5"/>
              <rect x="566" y="106" width="48" height="8" rx="3" fill="rgba(27,115,64,.35)" stroke="rgba(27,115,64,.7)" strokeWidth="1.5"/>
            </g>
            <circle cx="590" cy="110" r="7" fill="rgba(27,115,64,.8)" stroke="rgba(27,115,64,.95)" strokeWidth="1.5"/>
          </g>
          <text x="590" y="185" textAnchor="middle" fill="#1B7340" fontSize="14" fontWeight="700" fontFamily="var(--font-mono,monospace)" letterSpacing=".04em">ALTERNATOR</text>
          <text x="590" y="205" textAnchor="middle" fill="rgba(27,115,64,.6)" fontSize="11" fontFamily="var(--font-mono,monospace)">AC output</text>
          <text x="590" y="235" textAnchor="middle" fill="#1B7340" fontSize="12" fontWeight="bold" fontFamily="var(--font-mono,monospace)">~80% eff.</text>
        </g>

        {/* ════════════════ LOAD node (Lowered & Enlarged) ════════════════ */}
        <g>
          <circle cx="340" cy="360" r="50" fill="rgba(27,115,64,.07)" stroke="rgba(27,115,64,.35)" strokeWidth="1.5"/>
          {/* bulb dome */}
          <path d="M340 325 A 25 25 0 0 1 365 350 Q 365 370 352 380 L 328 380 Q 315 370 315 350 A 25 25 0 0 1 340 325 Z"
            fill="rgba(27,115,64,.08)" stroke="rgba(27,115,64,.7)" strokeWidth="2"/>
          {/* filament */}
          <path d="M330 365 Q335 355 340 365 Q345 355 350 365" fill="none" stroke="rgba(27,115,64,.85)" strokeWidth="2" strokeLinecap="round"/>
          {/* base bands */}
          <line x1="326" y1="384" x2="354" y2="384" stroke="rgba(27,115,64,.65)" strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="330" y1="390" x2="350" y2="390" stroke="rgba(27,115,64,.5)" strokeWidth="2" strokeLinecap="round"/>
          <line x1="334" y1="396" x2="346" y2="396" stroke="rgba(27,115,64,.4)" strokeWidth="1.5" strokeLinecap="round"/>
          
          {/* rays */}
          <line x1="340" y1="315" x2="340" y2="305" stroke="rgba(27,115,64,.4)" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="358" y1="320" x2="365" y2="313" stroke="rgba(27,115,64,.35)" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="322" y1="320" x2="315" y2="313" stroke="rgba(27,115,64,.35)" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="370" y1="335" x2="378" y2="330" stroke="rgba(27,115,64,.25)" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="310" y1="335" x2="302" y2="330" stroke="rgba(27,115,64,.25)" strokeWidth="1.5" strokeLinecap="round"/>
        </g>
        <text x="340" y="435" textAnchor="middle" fill="rgba(27,115,64,.9)" fontSize="14" fontWeight="800" fontFamily="var(--font-mono,monospace)" letterSpacing=".12em">LOAD</text>

        {/* ════════════════ PARTICLES ════════════════ */}
        <circle r="5" fill="rgba(190,190,190,.85)">
          <animateMotion dur="1.4s" repeatCount="indefinite"><mpath href="#p1"/></animateMotion>
        </circle>
        <circle r="5" fill="#1B7340" opacity=".9">
          <animateMotion dur="1.4s" repeatCount="indefinite" begin=".28s"><mpath href="#p2"/></animateMotion>
        </circle>
        <circle r="5" fill="#F7941D" opacity=".9">
          <animateMotion dur="1.4s" repeatCount="indefinite" begin=".56s"><mpath href="#p3"/></animateMotion>
        </circle>
        <circle r="5" fill="#F7941D" opacity=".9">
          <animateMotion dur="1.4s" repeatCount="indefinite" begin=".84s"><mpath href="#p4"/></animateMotion>
        </circle>
        <circle r="4.5" fill="#F7941D" opacity=".75">
          <animateMotion dur="3s" repeatCount="indefinite"><mpath href="#pfb"/></animateMotion>
        </circle>
        <circle r="3.5" fill="#F7941D" opacity=".4">
          <animateMotion dur="3s" repeatCount="indefinite" begin="1.5s"><mpath href="#pfb"/></animateMotion>
        </circle>
        <circle r="4.5" fill="#1B7340" opacity=".8">
          <animateMotion dur="2.2s" repeatCount="indefinite" begin=".6s"><mpath href="#pld"/></animateMotion>
        </circle>
      </svg>
    </>
  );
}
