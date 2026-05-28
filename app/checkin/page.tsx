"use client";

import { db } from "@/lib/firebase";
import {
  doc,
  getDoc,
  updateDoc,
  increment,
} from "firebase/firestore";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function CheckinContent() {
  const params = useSearchParams();
  const token = params.get("token");
  const [message, setMessage] = useState("Checking in...");

  useEffect(() => {
    const checkIn = async () => {
      const ref = doc(db, "currentService", "active");
      const snap = await getDoc(ref);
      const data = snap.data();

      if (!data) {
        setMessage("No active service");
        return;
      }

      if (data.token !== token) {
        setMessage("Invalid QR Code");
        return;
      }

      await updateDoc(ref, {
        attendance: increment(1),
      });

      setMessage("Attendance Recorded");
    };

    checkIn();
  }, [token]);

  return (
    <div className="h-screen flex items-center justify-center text-3xl font-bold">
      {message}
    </div>
  );
}

export default function CheckinPage() {
  return (
    <Suspense fallback={
      <div className="h-screen flex items-center justify-center text-3xl font-bold">
        Loading...
      </div>
    }>
      <CheckinContent />
    </Suspense>
  );
}