"use client";

import { db } from "@/lib/firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

export default function DisplayPage() {

  const [token, setToken] = useState("");
  const [attendance, setAttendance] = useState(0);

  useEffect(() => {
    const unsub = onSnapshot(
      doc(db, "currentService", "active"),
      (snapshot) => {
        const data = snapshot.data();

        if (data) {
          setToken(data.token);
          setAttendance(data.attendance);
        }
      }
    );

    return () => unsub();
  }, []);

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8 bg-black text-white">

      <QRCodeCanvas
        value={`http://localhost:3000/checkin?token=${token}`}
        size={300}
      />

      <h1 className="text-5xl font-bold">
        Attendance: {attendance}
      </h1>

    </div>
  );
}