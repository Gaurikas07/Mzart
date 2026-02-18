"use client";

import Link from "next/link";
import Image from "next/image";
import { useStore } from "@/context/store-context";

export default function CartPage() {
  const { cartProducts, updateQuantity, removeFromCart, cartTotal } = useStore();

  if (cartProducts.length === 0) {
    return (
      <div className="space-y-4">
        <h1 className="text-3xl font-semibold">Your Cart</h1>
        <p>Your cart is currently empty.</p>
        <Link href="/products" className="text-gold underline">Browse candles</Link>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold">Your Cart</h1>
        {cartProducts.map((item) => (
          <article key={item.id} className="flex gap-4 rounded-2xl border border-gold/20 bg-white p-4">
            <div className="relative h-24 w-24 overflow-hidden rounded">
              <Image src={item.images[0]} alt={item.name} fill className="object-cover" sizes="96px" />
            </div>
            <div className="flex-1 space-y-2">
              <h2 className="font-semibold">{item.name}</h2>
              <p className="text-sm text-charcoal/70">₹{item.price.toLocaleString("en-IN")}</p>
              <div className="flex items-center gap-2">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="rounded border px-2">-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="rounded border px-2">+</button>
                <button onClick={() => removeFromCart(item.id)} className="ml-3 text-sm text-red-700">Remove</button>
              </div>
            </div>
          </article>
        ))}
      </section>

      <aside className="h-fit rounded-2xl border border-gold/20 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-semibold">Order Summary</h2>
        <div className="mb-4 flex items-center justify-between text-sm">
          <span>Total</span>
          <span className="font-semibold">₹{cartTotal.toLocaleString("en-IN")}</span>
        </div>
        <Link href="/checkout" className="block rounded bg-charcoal px-4 py-3 text-center text-white">
          Proceed to Checkout
        </Link>
      </aside>
    </div>
  );
}
