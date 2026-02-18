"use client";

import Image from "next/image";
import { useState } from "react";
import { notFound } from "next/navigation";
import { getProductById } from "@/lib/products";
import { useStore } from "@/context/store-context";

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id);
  const { addToCart, addToWishlist, wishlist } = useStore();
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    notFound();
  }

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-4">
        <div className="relative h-[420px] overflow-hidden rounded-2xl">
          <Image
            src={product.images[activeImage]}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="flex gap-3">
          {product.images.map((image, index) => (
            <button
              key={image}
              onClick={() => setActiveImage(index)}
              className={`relative h-20 w-20 overflow-hidden rounded border ${
                activeImage === index ? "border-charcoal" : "border-gold/20"
              }`}
            >
              <Image src={image} alt={`${product.name} ${index + 1}`} fill className="object-cover" sizes="80px" />
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-5">
        <p className="text-sm uppercase tracking-widest text-gold">{product.category}</p>
        <h1 className="text-3xl font-semibold">{product.name}</h1>
        <p className="text-xl">₹{product.price.toLocaleString("en-IN")}</p>
        <p className="text-sm text-charcoal/70">
          {"★".repeat(Math.round(product.rating))} ({product.rating}/5 · {product.reviews} reviews)
        </p>
        <p className="leading-relaxed text-charcoal/80">{product.description}</p>

        <div className="flex gap-3">
          <button
            onClick={() => addToCart(product.id)}
            className="rounded bg-charcoal px-5 py-3 text-sm text-white transition hover:bg-charcoal/90"
          >
            Add to Cart
          </button>
          <button
            onClick={() => addToWishlist(product.id)}
            className="rounded border border-gold/50 px-5 py-3 text-sm transition hover:bg-beige"
          >
            {wishlist.includes(product.id) ? "Wishlisted" : "Add to Wishlist"}
          </button>
        </div>
      </div>
    </div>
  );
}
