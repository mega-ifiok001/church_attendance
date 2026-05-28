import type { Metadata } from "next";
import MobileNav from "./components/MobileNav";
import Logo from '/logo.png';

export const metadata: Metadata = {
  title: "GloryZone — Church Attendance System",
  description:
    "One QR code on the screen. One scan from the pew. Attendance counted live — no apps, no sign-ups, no fuss.",
};

const LogoMark = ({ size = 40 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <radialGradient id="lg" cx="35%" cy="35%" r="70%">
        <stop offset="0%"   stopColor="#e84b2a" />
        <stop offset="45%"  stopColor="#c93b1a" />
        <stop offset="100%" stopColor="#2d6e3a" />
      </radialGradient>
    </defs>
    <circle cx="50" cy="50" r="50" fill="url(#lg)" />
    <path d="M22 22 H48 V48 Q35 48 22 35 Z" fill="white" />
    <path d="M52 22 H78 V35 Q65 48 52 48 Z" fill="white" />
    <rect x="22" y="52" width="26" height="26" fill="white" />
    <path d="M52 52 H78 V65 Q78 78 65 78 H52 Z" fill="white" />
  </svg>
);

const LogoMarkLarge = () => (
  <svg width="88" height="88" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <radialGradient id="lgl" cx="35%" cy="35%" r="70%">
        <stop offset="0%"   stopColor="#e84b2a" />
        <stop offset="45%"  stopColor="#c93b1a" />
        <stop offset="100%" stopColor="#2d6e3a" />
      </radialGradient>
    </defs>
    <circle cx="50" cy="50" r="50" fill="url(#lgl)" />
    <path d="M22 22 H48 V48 Q35 48 22 35 Z" fill="white" />
    <path d="M52 22 H78 V35 Q65 48 52 48 Z" fill="white" />
    <rect x="22" y="52" width="26" height="26" fill="white" />
    <path d="M52 52 H78 V65 Q78 78 65 78 H52 Z" fill="white" />
  </svg>
);

export default function HomePage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600;1,700&family=DM+Sans:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; }

        :root {
          --gold:       #C9922A;
          --gold-light: #F0C060;
          --gold-dim:   #7A5518;
          --dark:       #0A0907;
          --dark2:      #141109;
          --dark3:      #1E1810;
          --cream:      #F5EDD8;
          --cream2:     #EAD9B0;
          --muted:      #9A8A6A;
        }

        html { scroll-behavior: smooth; }
        body {
          background: var(--dark); color: var(--cream);
          font-family: 'DM Sans', sans-serif;
          overflow-x: hidden; margin: 0; padding: 0;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%,100% { opacity:1; transform:scale(1); }
          50%     { opacity:0.35; transform:scale(0.7); }
        }
        @keyframes shimmer {
          0%,100% { opacity: 0.3; } 50% { opacity: 0.9; }
        }

        .au1 { animation: fadeUp 0.9s 0.00s ease both; }
        .au2 { animation: fadeUp 0.9s 0.12s ease both; }
        .au3 { animation: fadeUp 0.9s 0.22s ease both; }
        .au4 { animation: fadeUp 0.9s 0.34s ease both; }
        .au5 { animation: fadeUp 0.9s 0.52s ease both; }
        .pulse { animation: pulse 2.2s ease infinite; }

        /* NAV */
        .nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 50;
          display: flex; align-items: center; justify-content: space-between;
          padding: 1.1rem 2.5rem;
          background: linear-gradient(to bottom, rgba(10,9,7,0.97), transparent);
        }
        .nav-logo {
          display: flex; align-items: center; gap: 0.6rem;
          font-family: 'Cormorant Garamond', serif; font-size: 1.5rem; font-weight: 700;
          color: var(--cream); letter-spacing: 0.01em; text-decoration: none;
        }
        .nav-links { display: flex; align-items: center; gap: 2rem; list-style: none; margin: 0; padding: 0; }
        .nav-link { color: var(--muted); text-decoration: none; font-size: 0.8rem; letter-spacing: 0.1em; text-transform: uppercase; }
        .nav-cta { background: var(--gold); color: var(--dark); padding: 0.5rem 1.3rem; border-radius: 2rem; font-weight: 500; text-decoration: none; font-size: 0.85rem; }
        .nav-toggle { display: none; flex-direction: column; gap: 5px; cursor: pointer; background: none; border: none; padding: 4px; }
        .nav-toggle span { display: block; width: 22px; height: 1.5px; background: var(--cream); border-radius: 2px; }

        /* HERO */
        .hero {
          min-height: 100svh; display: flex; align-items: center; justify-content: center;
          text-align: center; position: relative; overflow: hidden;
          padding: 9rem 1.5rem 5rem;
        }
        .hero-glow {
          position: absolute; inset: 0; pointer-events: none;
          background:
            radial-gradient(ellipse 60% 50% at 50% 40%, rgba(232,75,42,0.1) 0%, transparent 65%),
            radial-gradient(ellipse 40% 30% at 25% 70%, rgba(45,110,58,0.07) 0%, transparent 60%);
        }
        .hero-ring {
          position: absolute; border-radius: 50%; pointer-events: none;
          top: 50%; left: 50%; transform: translate(-50%, -50%);
          border: 1px solid rgba(201,146,42,0.07);
          width: 520px; height: 520px;
        }
        .hero-ring-2 { width: 760px; height: 760px; border-color: rgba(201,146,42,0.04); }

        .hero-inner { position: relative; z-index: 10; max-width: 860px; width: 100%; }

        .hero-logo-wrap {
          display: inline-block; margin-bottom: 2rem;
          filter: drop-shadow(0 0 32px rgba(232,75,42,0.25));
        }

        .hero-badge {
          display: inline-flex; align-items: center; gap: 0.5rem; margin-bottom: 1.6rem;
          background: rgba(201,146,42,0.08); border: 1px solid rgba(201,146,42,0.2);
          border-radius: 2rem; padding: 0.3rem 0.9rem;
          font-size: 0.72rem; letter-spacing: 0.14em; text-transform: uppercase; color: var(--gold-light);
        }

        .hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.8rem, 9vw, 6rem); font-weight: 700;
          line-height: 1.02; color: var(--cream); margin: 0 0 1.5rem; letter-spacing: -0.01em;
        }
        .hero-title em { color: var(--gold-light); font-style: italic; }

        .hero-sub {
          font-size: clamp(0.95rem, 2.5vw, 1.05rem); color: var(--muted);
          max-width: 460px; margin: 0 auto 2.5rem; line-height: 1.75; font-weight: 300;
        }

        .hero-actions { display: flex; gap: 0.85rem; justify-content: center; flex-wrap: wrap; }
        .btn-primary {
          background: var(--gold); color: var(--dark); padding: 0.85rem 2rem;
          border-radius: 2rem; font-size: 0.9rem; font-weight: 500; text-decoration: none; display: inline-block;
        }
        .btn-outline {
          background: transparent; color: var(--cream2);
          border: 1px solid rgba(201,146,42,0.25); padding: 0.85rem 2rem;
          border-radius: 2rem; font-size: 0.9rem; font-weight: 400; text-decoration: none; display: inline-block;
        }

        .stats-strip {
          display: flex; justify-content: center; gap: 3rem; flex-wrap: wrap;
          margin-top: 3.5rem; padding-top: 3rem;
          border-top: 1px solid rgba(201,146,42,0.1);
        }
        .stat { text-align: center; }
        .stat-num {
          font-family: 'Cormorant Garamond', serif; font-size: 2rem; font-weight: 700;
          color: var(--gold-light); line-height: 1; margin-bottom: 0.25rem;
        }
        .stat-label { font-size: 0.7rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted); }

        /* HOW IT WORKS */
        .how-section { padding: 5rem 1.5rem; max-width: 980px; margin: 0 auto; text-align: center; }
        .section-eyebrow { font-size: 0.7rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--gold); margin-bottom: 0.75rem; }
        .section-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.8rem, 5vw, 3.2rem); font-weight: 700;
          color: var(--cream); margin: 0 0 3rem; line-height: 1.15;
        }
        .steps-grid { display: grid; gap: 1.25rem; grid-template-columns: repeat(3, 1fr); }
        .step-card {
          background: var(--dark2); border: 1px solid rgba(201,146,42,0.12);
          border-radius: 1.5rem; padding: 2rem 1.75rem; text-align: left;
          position: relative; overflow: hidden;
        }
        .step-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(to right, transparent, rgba(201,146,42,0.28), transparent);
        }
        .step-num {
          font-family: 'Cormorant Garamond', serif; font-size: 3.5rem; font-weight: 700;
          color: rgba(201,146,42,0.18); line-height: 1; margin-bottom: 1.25rem;
        }
        .step-title { font-size: 1rem; font-weight: 500; color: var(--cream); margin-bottom: 0.5rem; }
        .step-desc { font-size: 0.85rem; color: var(--muted); line-height: 1.65; font-weight: 300; }

        /* FEATURES */
        .features-section {
          padding: 5rem 1.5rem; background: var(--dark2);
          position: relative; overflow: hidden;
        }
        .features-section::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(to right, transparent, rgba(201,146,42,0.2), transparent);
        }
        .features-inner { max-width: 980px; margin: 0 auto; text-align: center; }
        .features-grid { display: grid; gap: 1rem; grid-template-columns: repeat(3, 1fr); }
        .feature-card {
          background: var(--dark3); border: 1px solid rgba(201,146,42,0.08);
          border-radius: 1.25rem; padding: 1.75rem 1.5rem; text-align: left;
          transition: border-color 0.3s, transform 0.3s;
        }
        .feature-card:hover { border-color: rgba(201,146,42,0.22); transform: translateY(-2px); }
        .feature-icon-wrap {
          width: 40px; height: 40px; border-radius: 10px;
          background: rgba(201,146,42,0.1);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 1rem; font-size: 1.1rem;
        }
        .feature-title { font-size: 0.9rem; font-weight: 500; color: var(--cream); margin-bottom: 0.4rem; }
        .feature-desc { font-size: 0.8rem; color: var(--muted); line-height: 1.6; font-weight: 300; }

        /* CTA */
        .cta-section {
          padding: 7rem 1.5rem; text-align: center; position: relative; overflow: hidden;
        }
        .cta-section::before {
          content: ''; position: absolute; inset: 0; pointer-events: none;
          background: radial-gradient(ellipse 70% 60% at 50% 50%, rgba(201,146,42,0.06) 0%, transparent 70%);
        }
        .cta-logo { display: inline-block; margin-bottom: 1.75rem; opacity: 0.45; }
        .cta-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2rem, 5.5vw, 3.8rem); font-weight: 700;
          color: var(--cream); margin: 0 0 1rem; line-height: 1.12;
        }
        .cta-title em { color: var(--gold-light); font-style: italic; }
        .cta-sub { color: var(--muted); font-size: 0.95rem; margin-bottom: 2.5rem; font-weight: 300; }
        .btn-primary-lg {
          background: var(--gold); color: var(--dark); padding: 1.05rem 2.75rem;
          border-radius: 2rem; font-size: 1rem; font-weight: 500; text-decoration: none; display: inline-block;
        }

        /* FOOTER */
        .footer {
          border-top: 1px solid rgba(201,146,42,0.1); padding: 2rem 1.5rem;
          display: flex; align-items: center; justify-content: center;
          gap: 0.75rem; flex-wrap: wrap; color: var(--muted); font-size: 0.78rem;
        }
        .footer-brand {
          display: flex; align-items: center; gap: 0.45rem;
          font-family: 'Cormorant Garamond', serif; color: var(--gold-dim);
          font-size: 0.95rem; font-weight: 600;
        }
        .footer-sep { color: rgba(201,146,42,0.2); }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .steps-grid { grid-template-columns: 1fr; }
          .features-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .nav { padding: 1rem 1.25rem; }
          .nav-links { display: none; }
          .nav-toggle { display: flex; }
          .hero { padding: 6.5rem 1.25rem 4rem; }
          .hero-ring, .hero-ring-2 { display: none; }
          .stats-strip { gap: 2rem; }
          .how-section { padding: 4rem 1.25rem; }
          .features-section { padding: 4rem 1.25rem; }
          .cta-section { padding: 5rem 1.25rem; }
        }
        @media (max-width: 520px) {
          .hero { padding: 5.5rem 1rem 3.5rem; }
          .hero-actions { flex-direction: column; align-items: center; }
          .btn-primary, .btn-outline { width: 100%; max-width: 280px; text-align: center; }
          .features-grid { grid-template-columns: 1fr; }
          .stats-strip { gap: 1.5rem; }
          .stat-num { font-size: 1.65rem; }
          .footer { flex-direction: column; gap: 0.4rem; }
        }
        @media (min-width: 1280px) {
          .nav { padding: 1.2rem 4rem; }
        }
      `}</style>

      {/* NAV */}
      <nav className="nav">
        <a href="/" className="nav-logo">
          <img src="/logo.png" alt="GloryZone logo" style={{ width:24, height:24 }} />
          GloryZoneChurch
        </a>
        <ul className="nav-links">
          <li><a href="#how"      className="nav-link">How it works</a></li>
          <li><a href="#features" className="nav-link">Features</a></li>
          <li><a href="/admin"    className="nav-cta">Get Started</a></li>
        </ul>
        <MobileNav />
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-glow" />
        <div className="hero-ring" />
        <div className="hero-ring hero-ring-2" />

        <div className="hero-inner">
        

          <div className="au2 hero-badge">
            <span className="pulse" style={{ width:6, height:6, borderRadius:"50%", background:"var(--gold)", display:"inline-block", flexShrink:0 }} />
            Church Attendance Made Simple
          </div>

          <h1 className="au3 hero-title">
            Know who showed up<br />for <em>His glory</em>
          </h1>

          <p className="au3 hero-sub">
            One QR code on the screen. One scan from the pew. Attendance counted live — no apps, no sign-ups, no fuss.
          </p>

          <div className="au4 hero-actions">
            <a href="/admin"   className="btn-primary">Open Admin →</a>
            <a href="/display" className="btn-outline">View Display Screen</a>
          </div>

          <div className="au5 stats-strip">
            {[
              { num: "0 Apps",  label: "Required to scan" },
              { num: "30s",     label: "QR rotation interval" },
              { num: "Live",    label: "Real-time updates" },
            ].map(({ num, label }) => (
              <div key={label} className="stat">
                <div className="stat-num">{num}</div>
                <div className="stat-label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="how-section">
        <p className="section-eyebrow">How it works</p>
        <h2 className="section-title">Three steps to a full house count</h2>
        <div className="steps-grid">
          {[
            { num:"01", title:"Admin starts service",  desc:"Click one button on the admin page. A new session opens instantly with a unique QR token." },
            { num:"02", title:"Screen shows QR code",  desc:"Display the screen page on your projector or TV. A live QR code fills the screen alongside the count." },
            { num:"03", title:"Congregation scans",    desc:"Members scan with their phone camera. The count rises in real time — no app install needed." },
          ].map(({ num, title, desc }) => (
            <div key={num} className="step-card">
              <div className="step-num">{num}</div>
              <div className="step-title">{title}</div>
              <div className="step-desc">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="features-section">
        <div className="features-inner">
          <p className="section-eyebrow">Built for the house of God</p>
          <h2 className="section-title">Everything a church needs,<br />nothing it doesn&apos;t</h2>
          <div className="features-grid">
            {[
              { icon:"⚡", title:"Real-time updates",     desc:"Attendance rises instantly on screen as each person scans. No page refresh required." },
              { icon:"🔒", title:"No personal data",      desc:"Zero accounts. Zero logins. Zero personal information collected from members." },
              { icon:"📱", title:"Any phone, any camera", desc:"Works with the default camera app on iOS and Android. No scanner app needed." },
              { icon:"🌍", title:"Scales to any size",    desc:"Whether 50 or 5,000 members, the system handles it without slowing down." },
              { icon:"🔄", title:"QR auto-rotation",      desc:"Tokens rotate every 30 seconds so the link can't be shared outside the building." },
              { icon:"📍", title:"Geo restriction",       desc:"Optional location check ensures only people physically inside can check in." },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="feature-card">
                <div className="feature-icon-wrap">{icon}</div>
                <div className="feature-title">{title}</div>
                <div className="feature-desc">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div style={{ position:"relative", zIndex:2 }}>
          <div className="cta-logo"><LogoMark size={52} /></div>
          <h2 className="cta-title">
            Ready to count every<br /><em>blessed soul</em> in the room?
          </h2>
          <p className="cta-sub">Free to use. Deploys in minutes. Works on Sunday.</p>
          <a href="/admin" className="btn-primary-lg">Open Admin Panel →</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-brand">
          <LogoMark size={18} />
          GloryZone
        </div>
        <span className="footer-sep">·</span>
        <span>Built with ♥ for the church</span>
      </footer>
    </>
  );
}