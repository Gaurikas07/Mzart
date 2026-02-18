import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { allProducts, categories } from "@/lib/products";

export default function Home() {
  const featured = allProducts.filter((product) => product.featured).slice(0, 6);

  return (
    <div className="space-y-16">
      <section className="rounded-3xl bg-gradient-to-r from-beige to-ivory p-10 shadow-premium">
        <p className="mb-3 text-xs uppercase tracking-[0.2em] text-gold">Premium Handmade Candles</p>
        <h1 className="mb-4 max-w-2xl text-4xl font-semibold leading-tight text-charcoal">
          Light up intimate moments with Momzart&apos;s artisanal candle collection.
        </h1>
        <p className="mb-6 max-w-xl text-charcoal/70">
          Explore designer craftsmanship, festive glow, and customized creations made with clean wax blends.
        </p>
        <Link href="/products" className="rounded bg-charcoal px-5 py-3 text-sm text-white transition hover:bg-charcoal/90">
          Shop Collection
        </Link>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-semibold">Shop by Category</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category}
              href={`/products?category=${encodeURIComponent(category)}`}
              className="rounded-xl border border-gold/20 bg-white p-4 text-center font-medium shadow-sm transition hover:bg-beige"
            >
              {category}
            </Link>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Featured Products</h2>
          <Link href="/products" className="text-sm text-gold underline-offset-4 hover:underline">
            View all
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
