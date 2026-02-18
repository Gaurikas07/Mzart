"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useStore } from "@/context/store-context";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/wishlist", label: "Wishlist" },
  { href: "/cart", label: "Cart" }
];

export function Navbar() {
  const pathname = usePathname();
  const { cartCount } = useStore();

  return (
    <header className="sticky top-0 z-40 border-b border-gold/20 bg-ivory/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-2xl font-semibold tracking-wide text-charcoal">
          Momzart
        </Link>
        <div className="flex items-center gap-4 text-sm text-charcoal">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded px-3 py-1 transition ${
                  active ? "bg-beige text-charcoal" : "hover:bg-beige/70"
                }`}
              >
                {link.label}
                {link.href === "/cart" && cartCount > 0 ? ` (${cartCount})` : ""}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
