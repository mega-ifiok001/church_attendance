import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GloryZone — Church Attendance System",
  description:
    "One QR code on the screen. One scan from the pew. Attendance counted live — no apps, no sign-ups, no fuss.",
};

export default function HomePage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500&display=swap');

        :root {
          --gold: #C9922A;
          --gold-light: #F0C060;
          --gold-dim: #7A5518;
          --dark: #0E0C08;
          --dark2: #1A1610;
          --dark3: #251E12;
          --cream: #F5EDD8;
          --cream2: #EAD9B0;
          --muted: #9A8A6A;
        }

        body {
          background: var(--dark);
          color: var(--cream);
          font-family: 'DM Sans', sans-serif;
          overflow-x: hidden;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulse {
          0%,100% { opacity: 1; transform: scale(1); }
          50%      { opacity: 0.5; transform: scale(0.8); }
        }

        @keyframes scrollLine {
          0%   { height: 0; opacity: 1; }
          100% { height: 40px; opacity: 0; }
        }

        .animate-fadeUp  { animation: fadeUp 0.8s ease both; }
        .animate-fadeUp2 { animation: fadeUp 0.8s 0.1s ease both; }
        .animate-fadeUp3 { animation: fadeUp 0.8s 0.2s ease both; }
        .animate-fadeUp4 { animation: fadeUp 0.8s 0.3s ease both; }
        .animate-fadeUp5 { animation: fadeUp 1s   0.6s ease both; }

        .pulse { animation: pulse 2s ease infinite; }
        .scroll-line-anim { animation: scrollLine 2s ease infinite; }
      `}</style>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-5"
           style={{ background: "linear-gradient(to bottom, rgba(14,12,8,0.95), transparent)" }}>
        <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", color: "var(--gold-light)", letterSpacing: "0.02em" }}>
          GloryZone
        </span>
        <ul className="flex gap-8 list-none">
          <li><a href="#how"      style={{ color: "var(--muted)", textDecoration: "none", fontSize: "0.85rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>How it works</a></li>
          <li><a href="#features" style={{ color: "var(--muted)", textDecoration: "none", fontSize: "0.85rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>Features</a></li>
          <li>
            <a href="/admin"
               style={{ background: "var(--gold)", color: "var(--dark)", padding: "0.5rem 1.25rem", borderRadius: "2rem", fontWeight: 500, textDecoration: "none", fontSize: "0.85rem" }}>
              Get Started
            </a>
          </li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center text-center relative overflow-hidden"
               style={{ padding: "8rem 2rem 4rem" }}>
        {/* glow */}
        <div className="absolute inset-0 pointer-events-none"
             style={{ background: "radial-gradient(circle at 50% 50%, rgba(201,146,42,0.12) 0%, transparent 65%)" }} />

        <div className="relative z-10">
          <div className="animate-fadeUp inline-flex items-center gap-2 mb-7"
               style={{ background: "rgba(201,146,42,0.12)", border: "1px solid rgba(201,146,42,0.25)", borderRadius: "2rem", padding: "0.35rem 1rem", fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gold-light)" }}>
            <span className="pulse" style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--gold)", display: "inline-block" }} />
            Church Attendance Made Simple
          </div>

          <h1 className="animate-fadeUp2"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(3rem, 8vw, 5.5rem)", fontWeight: 900, lineHeight: 1.05, color: "var(--cream)", marginBottom: "1.5rem" }}>
            Know who showed<br />
            up for{" "}
            <span style={{ color: "var(--gold-light)", fontStyle: "italic" }}>His glory</span>
          </h1>

          <p className="animate-fadeUp3"
             style={{ fontSize: "1.1rem", color: "var(--muted)", maxWidth: 480, margin: "0 auto 2.5rem", lineHeight: 1.7, fontWeight: 300 }}>
            One QR code on the screen. One scan from the pew. Attendance counted live — no apps, no sign-ups, no fuss.
          </p>

          <div className="animate-fadeUp4 flex gap-4 justify-center flex-wrap">
            <a href="/admin"
               style={{ background: "var(--gold)", color: "var(--dark)", border: "none", padding: "0.85rem 2rem", borderRadius: "2rem", fontSize: "0.95rem", fontWeight: 500, textDecoration: "none", display: "inline-block" }}>
              Open Admin →
            </a>
            <a href="/display"
               style={{ background: "transparent", color: "var(--cream2)", border: "1px solid rgba(201,146,42,0.3)", padding: "0.85rem 2rem", borderRadius: "2rem", fontSize: "0.95rem", fontWeight: 400, textDecoration: "none", display: "inline-block" }}>
              View Display Screen
            </a>
          </div>
        </div>

        <div className="animate-fadeUp5 absolute flex flex-col items-center gap-1"
             style={{ bottom: "2.5rem", left: "50%", transform: "translateX(-50%)", color: "var(--muted)", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          <div className="scroll-line-anim" style={{ width: 1, background: "linear-gradient(to bottom, var(--gold-dim), transparent)" }} />
          Scroll
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" style={{ padding: "6rem 2rem", maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
        <p style={{ fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.75rem" }}>
          How it works
        </p>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: "var(--cream)", marginBottom: "3.5rem", lineHeight: 1.2 }}>
          Three steps to a full house count
        </h2>
        <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
          {[
            { num: "01", title: "Admin starts service",     desc: "Click one button on the admin page. A new session opens instantly with a unique QR token." },
            { num: "02", title: "Screen shows QR code",     desc: "Display the screen page on your projector or TV. A live QR code fills the screen alongside the count." },
            { num: "03", title: "Congregation scans",       desc: "Members scan with their phone camera. The count rises in real time — no app install needed." },
          ].map(({ num, title, desc }) => (
            <div key={num}
                 style={{ background: "var(--dark2)", border: "1px solid rgba(201,146,42,0.15)", borderRadius: "1.25rem", padding: "2rem 1.5rem", textAlign: "left" }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "3rem", fontWeight: 900, color: "rgba(201,146,42,0.2)", lineHeight: 1, marginBottom: "1rem" }}>{num}</div>
              <div style={{ fontSize: "1rem", fontWeight: 500, color: "var(--cream)", marginBottom: "0.5rem" }}>{title}</div>
              <div style={{ fontSize: "0.875rem", color: "var(--muted)", lineHeight: 1.6, fontWeight: 300 }}>{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" style={{ padding: "5rem 2rem", background: "var(--dark2)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.75rem" }}>
            Built for the house of God
          </p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: "var(--cream)", marginBottom: "3rem", lineHeight: 1.2 }}>
            Everything a church needs,<br />nothing it doesn&apos;t
          </h2>
          <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
            {[
              { icon: "⚡", title: "Real-time updates",   desc: "Attendance rises instantly on screen as each person scans. No page refresh." },
              { icon: "🔒", title: "No personal data",    desc: "Zero accounts. Zero logins. Zero personal information collected from members." },
              { icon: "📱", title: "Any phone, any camera", desc: "Works with the default camera app on iOS and Android. No scanner app needed." },
              { icon: "🌍", title: "Scales to any size",  desc: "Whether 50 or 5,000 members, the system handles it without slowing down." },
              { icon: "🔄", title: "QR auto-rotation",    desc: "Tokens rotate every 30 seconds so the link can't be shared outside the building." },
              { icon: "📍", title: "Geo restriction",     desc: "Optional location check ensures only people physically inside can check in." },
            ].map(({ icon, title, desc }) => (
              <div key={title}
                   style={{ background: "var(--dark3)", border: "1px solid rgba(201,146,42,0.1)", borderRadius: "1rem", padding: "1.5rem", textAlign: "left" }}>
                <div style={{ width: 36, height: 36, borderRadius: 8, background: "rgba(201,146,42,0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem", fontSize: "1rem" }}>{icon}</div>
                <div style={{ fontSize: "0.9rem", fontWeight: 500, color: "var(--cream)", marginBottom: "0.35rem" }}>{title}</div>
                <div style={{ fontSize: "0.8rem", color: "var(--muted)", lineHeight: 1.55, fontWeight: 300 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "7rem 2rem", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div className="absolute inset-0 pointer-events-none"
             style={{ background: "radial-gradient(ellipse at center, rgba(201,146,42,0.07) 0%, transparent 65%)" }} />
        <div style={{ position: "relative", zIndex: 2 }}>
          <div style={{ width: 60, height: 1, background: "linear-gradient(to right, transparent, var(--gold-dim), transparent)", margin: "0 auto 2rem" }} />
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, color: "var(--cream)", marginBottom: "1rem", lineHeight: 1.15 }}>
            Ready to count every<br />
            <span style={{ color: "var(--gold-light)", fontStyle: "italic" }}>blessed soul</span> in the room?
          </h2>
          <p style={{ color: "var(--muted)", fontSize: "1rem", marginBottom: "2.5rem", fontWeight: 300 }}>
            Free to use. Deploys in minutes. Works on Sunday.
          </p>
          <a href="/admin"
             style={{ background: "var(--gold)", color: "var(--dark)", padding: "1rem 2.5rem", borderRadius: "2rem", fontSize: "1rem", fontWeight: 500, textDecoration: "none", display: "inline-block" }}>
            Open Admin Panel →
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid rgba(201,146,42,0.1)", padding: "2rem", textAlign: "center", color: "var(--muted)", fontSize: "0.8rem" }}>
        Built with ♥ for the church &nbsp;·&nbsp;{" "}
        <span style={{ color: "var(--gold-dim)" }}>GloryZone Attendance System</span>
      </footer>
    </>
  );
}