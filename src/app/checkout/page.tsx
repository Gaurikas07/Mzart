"use client";

import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useStore } from "@/context/store-context";

export default function CheckoutPage() {
  const { cartProducts, cartTotal, clearCart } = useStore();
  const router = useRouter();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    clearCart();
    router.push(`/order-summary?total=${cartTotal}`);
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
      <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border border-gold/20 bg-white p-6">
        <h1 className="text-3xl font-semibold">Checkout</h1>
        <input required placeholder="Full Name" />
        <input required type="email" placeholder="Email" />
        <input required placeholder="Phone" />
        <textarea required placeholder="Shipping Address" rows={4} />
        <button className="rounded bg-charcoal px-5 py-3 text-white">Place Order</button>
      </form>

      <aside className="h-fit rounded-2xl border border-gold/20 bg-white p-6">
        <h2 className="mb-3 text-xl font-semibold">Order Summary</h2>
        <ul className="mb-4 space-y-2 text-sm">
          {cartProducts.map((item) => (
            <li key={item.id} className="flex justify-between gap-3">
              <span>{item.name} × {item.quantity}</span>
              <span>₹{(item.price * item.quantity).toLocaleString("en-IN")}</span>
            </li>
          ))}
        </ul>
        <p className="flex justify-between border-t border-gold/20 pt-3 font-semibold">
          <span>Total</span>
          <span>₹{cartTotal.toLocaleString("en-IN")}</span>
        </p>
      </aside>
    </div>
  );
}
