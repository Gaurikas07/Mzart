"use client";

import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { useStore } from "@/context/store-context";

export default function WishlistPage() {
  const { wishlistProducts } = useStore();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Your Wishlist</h1>
      {wishlistProducts.length === 0 ? (
        <div className="space-y-2">
          <p>No products saved yet.</p>
          <Link href="/products" className="text-gold underline">Discover candles</Link>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {wishlistProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
