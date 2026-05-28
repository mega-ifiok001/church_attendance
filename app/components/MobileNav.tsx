"use client";

import { useState } from "react";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger button */}
      <button
        className="nav-menu-toggle"
        aria-label="Open menu"
        onClick={() => setOpen(true)}
      >
        <span /><span /><span />
      </button>

      {/* Full-screen mobile menu overlay */}
      {open && (
        <div className="mobile-menu open" role="dialog" aria-modal="true">
          <button
            className="mobile-close"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            ×
          </button>
          <a href="#how"      onClick={() => setOpen(false)}>How it works</a>
          <a href="#features" onClick={() => setOpen(false)}>Features</a>
          <a href="/admin" className="mobile-cta">Get Started →</a>
        </div>
      )}
    </>
  );
}