"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ProductCard } from "@/components/product-card";
import { allProducts, categories } from "@/lib/products";

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") ?? "All";
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(initialCategory);
  const [sort, setSort] = useState("default");

  const products = useMemo(() => {
    let filtered = allProducts.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );

    if (category !== "All") {
      filtered = filtered.filter((product) => product.category === category);
    }

    if (sort === "low-high") {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    }

    if (sort === "high-low") {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    }

    return filtered;
  }, [search, category, sort]);

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-semibold">All Candles</h1>
      <div className="grid gap-4 rounded-2xl border border-gold/20 bg-white p-4 md:grid-cols-3">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products..."
          aria-label="Search"
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)} aria-label="Filter category">
          <option value="All">All categories</option>
          {categories.map((entry) => (
            <option key={entry} value={entry}>
              {entry}
            </option>
          ))}
        </select>
        <select value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort by price">
          <option value="default">Sort by</option>
          <option value="low-high">Price: Low to High</option>
          <option value="high-low">Price: High to Low</option>
        </select>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {products.length === 0 ? <p>No products found for your filters.</p> : null}
    </div>
  );
}
