/**
 * SkipToContent — Accessibility skip link.
 * Visible only on keyboard focus (Tab), lets users bypass navigation.
 * Requires `id="main-content"` on the <main> element of each page.
 */
export default function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="skip-to-content"
      style={{
        position: 'fixed',
        top: '-100%',
        left: '16px',
        zIndex: 100001,
        padding: '12px 24px',
        borderRadius: '0 0 12px 12px',
        background: 'var(--gold)',
        color: '#060A0E',
        fontFamily: 'var(--font-syne)',
        fontWeight: 700,
        fontSize: '14px',
        textDecoration: 'none',
        transition: 'top 0.2s ease',
      }}
    >
      Skip to content
    </a>
  );
}
