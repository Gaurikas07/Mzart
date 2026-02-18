"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function OrderSummaryPage() {
  const params = useSearchParams();
  const total = Number(params.get("total") ?? 0);

  return (
    <div className="mx-auto max-w-2xl space-y-5 rounded-2xl border border-gold/20 bg-white p-8 text-center shadow-sm">
      <p className="text-xs uppercase tracking-[0.2em] text-gold">Order Confirmed</p>
      <h1 className="text-3xl font-semibold">Thank you for shopping with Momzart!</h1>
      <p className="text-charcoal/70">
        Your order has been placed successfully. Estimated delivery details will be shared via email.
      </p>
      <p className="text-xl font-semibold">Order Total: ₹{total.toLocaleString("en-IN")}</p>
      <Link href="/products" className="inline-block rounded bg-charcoal px-5 py-3 text-white">
        Continue Shopping
      </Link>
    </div>
  );
}
