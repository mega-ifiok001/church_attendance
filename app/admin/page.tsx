"use client";

import { db } from "@/lib/firebase";
import { doc, setDoc, onSnapshot } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function AdminPage() {
  const [attendance, setAttendance] = useState<number | null>(null);
  const [serviceActive, setServiceActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState("");

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "currentService", "active"), (snap) => {
      const data = snap.data();
      if (data) {
        setAttendance(data.attendance ?? 0);
        setServiceActive(data.active === true);
      } else {
        setAttendance(null);
        setServiceActive(false);
      }
    });
    return () => unsub();
  }, []);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(""), 3000);
  };

  const startService = async () => {
    setLoading(true);
    try {
      const token = uuidv4();
      await setDoc(doc(db, "currentService", "active"), {
        active: true,
        token,
        createdAt: Date.now(),
        attendance: 0,
      });
      showToast("Service started — QR is now live");
    } finally {
      setLoading(false);
    }
  };

  const resetAttendance = async () => {
    if (!confirm("Reset attendance to zero?")) return;
    await setDoc(
      doc(db, "currentService", "active"),
      { attendance: 0 },
      { merge: true }
    );
    showToast("Attendance reset to 0");
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#1c1505",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* Google Font */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@300;400;500&display=swap');`}</style>

      {/* Toast */}
      {toast && (
        <div
          style={{
            position: "fixed",
            top: "1.5rem",
            left: "50%",
            transform: "translateX(-50%)",
            background: "#1A1610",
            color: "#F5EDD8",
            padding: "0.6rem 1.4rem",
            borderRadius: "2rem",
            fontSize: "0.85rem",
            fontWeight: 400,
            zIndex: 50,
            whiteSpace: "nowrap",
          }}
        >
          {toast}
        </div>
      )}

      <div
        style={{
          background: "#FFFFFF",
          border: "1px solid rgba(0,0,0,0.08)",
          borderRadius: "1.25rem",
          padding: "2.25rem",
          width: "100%",
          maxWidth: "440px",
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "1.5rem" }}>
          <span
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.15rem",
              color: "#C9922A",
            }}
          >
            GloryZone
          </span>
          <span
            style={{
              fontSize: "11px",
              background: "#FAEEDA",
              color: "#633806",
              padding: "2px 8px",
              borderRadius: "20px",
              fontWeight: 400,
            }}
          >
            Admin
          </span>
        </div>

        <h1 style={{ fontSize: "1.35rem", fontWeight: 500, color: "#1A1610", marginBottom: "4px" }}>
          Service control
        </h1>
        <p style={{ fontSize: "0.875rem", color: "#9A8A6A", marginBottom: "1.75rem", fontWeight: 300, lineHeight: 1.6 }}>
          Start a session to generate a live QR code for your congregation.
        </p>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "1.5rem" }}>
          <div style={{ background: "#F9F6F0", borderRadius: "10px", padding: "12px 14px" }}>
            <div style={{ fontSize: "12px", color: "#9A8A6A", marginBottom: "4px" }}>Today&apos;s attendance</div>
            <div style={{ fontSize: "1.5rem", fontWeight: 500, color: attendance !== null ? "#C9922A" : "#C4B89A" }}>
              {attendance !== null ? attendance : "—"}
            </div>
          </div>
          <div style={{ background: "#F9F6F0", borderRadius: "10px", padding: "12px 14px" }}>
            <div style={{ fontSize: "12px", color: "#9A8A6A", marginBottom: "6px" }}>Service status</div>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <div
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: serviceActive ? "#3B6D11" : "#B4B2A9",
                  flexShrink: 0,
                }}
              />
              <span style={{ fontSize: "13px", color: serviceActive ? "#3B6D11" : "#9A8A6A", fontWeight: 400 }}>
                {serviceActive ? "Live" : "No session"}
              </span>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <button
          onClick={startService}
          disabled={loading}
          style={{
            width: "100%",
            padding: "13px",
            borderRadius: "10px",
            border: "none",
            background: loading ? "#D4B070" : "#C9922A",
            color: "#0E0C08",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.95rem",
            fontWeight: 500,
            cursor: loading ? "not-allowed" : "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            transition: "opacity 0.15s",
          }}
        >
          {loading ? "Starting…" : (serviceActive ? "🔄  Restart service" : "▶  Start service")}
        </button>

        <button
          onClick={resetAttendance}
          style={{
            width: "100%",
            padding: "13px",
            borderRadius: "10px",
            border: "1px solid rgba(0,0,0,0.1)",
            background: "#F9F6F0",
            color: "#9A8A6A",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.9rem",
            fontWeight: 400,
            cursor: "pointer",
            marginTop: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
          }}
        >
          ↺  Reset attendance
        </button>

        {/* Divider */}
        <div style={{ height: "1px", background: "rgba(0,0,0,0.07)", margin: "1.5rem 0" }} />

        {/* Quick links */}
        <div style={{ display: "flex", gap: "10px" }}>
          <Link
            href="/display"
            style={{
              flex: 1,
              background: "#F9F6F0",
              border: "1px solid rgba(0,0,0,0.07)",
              borderRadius: "10px",
              padding: "11px",
              textAlign: "center",
              fontSize: "13px",
              color: "#7A5518",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              fontWeight: 400,
            }}
          >
            📺 Display screen
          </Link>
          <Link
            href="/"
            style={{
              flex: 1,
              background: "#F9F6F0",
              border: "1px solid rgba(0,0,0,0.07)",
              borderRadius: "10px",
              padding: "11px",
              textAlign: "center",
              fontSize: "13px",
              color: "#9A8A6A",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              fontWeight: 400,
            }}
          >
            🏠 Home
          </Link>
        </div>
      </div>
    </main>
  );
}