"use client";
import { Suspense } from "react";
import PaymentsContent from "./PaymentsContent";

export default function PaymentsPage() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <PaymentsContent />
    </Suspense>
  );
}

function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Memuat halaman pembayaran...</p>
      </div>
    </div>
  );
}
