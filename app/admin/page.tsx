"use client";

import { db } from "@/lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

export default function AdminPage() {

  const startService = async () => {
    const token = uuidv4();

    await setDoc(doc(db, "currentService", "active"), {
      active: true,
      token,
      createdAt: Date.now(),
      attendance: 0,
    });

    alert("Service Started");
  };

  return (
    <div className="p-10">
      <button
        onClick={startService}
        className="bg-black text-white px-6 py-3 rounded-xl"
      >
        Start Service
      </button>
    </div>
  );
}