"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function ToastInner() {
  const searchParams = useSearchParams();
  const sent = searchParams.get("sent");
  if (!sent) return null;
  const isSuccess = sent === "1";
  return (
    <div className={`fixed top-4 right-4 z-50 px-5 py-3 rounded-xl text-sm font-medium shadow-lg ${isSuccess ? "bg-green-600 text-white" : "bg-red-600 text-white"}`}>
      {isSuccess ? "✅ Message sent! I will get back to you soon." : "❌ Failed to send. Please try again or email me directly."}
    </div>
  );
}

export default function FormToast() {
  return (
    <Suspense fallback={null}>
      <ToastInner />
    </Suspense>
  );
}
