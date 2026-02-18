"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/types";
import { useStore } from "@/context/store-context";

export function ProductCard({ product }: { product: Product }) {
  const { addToCart, addToWishlist, wishlist } = useStore();

  return (
    <article className="overflow-hidden rounded-2xl border border-gold/20 bg-white shadow-premium">
      <Link href={`/products/${product.id}`}>
        <div className="relative h-64 w-full">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </Link>
      <div className="space-y-3 p-4">
        <p className="text-xs uppercase tracking-widest text-gold">{product.category}</p>
        <Link href={`/products/${product.id}`} className="block text-lg font-semibold text-charcoal">
          {product.name}
        </Link>
        <p className="text-sm text-charcoal/70">₹{product.price.toLocaleString("en-IN")}</p>
        <div className="flex gap-2">
          <button
            onClick={() => addToCart(product.id)}
            className="rounded bg-charcoal px-3 py-2 text-sm text-white transition hover:bg-charcoal/90"
          >
            Add to Cart
          </button>
          <button
            onClick={() => addToWishlist(product.id)}
            className="rounded border border-gold/50 px-3 py-2 text-sm text-charcoal transition hover:bg-beige"
          >
            {wishlist.includes(product.id) ? "Wishlisted" : "Wishlist"}
          </button>
        </div>
      </div>
    </article>
  );
}
