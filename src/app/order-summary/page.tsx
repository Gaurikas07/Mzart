"use client";

import { Suspense } from "react";
import OrderSummaryContent from "./summary-content";

export default function OrderSummaryPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OrderSummaryContent />
    </Suspense>
  );
}
