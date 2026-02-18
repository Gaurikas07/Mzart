import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="space-y-4 text-center">
      <h1 className="text-4xl font-semibold">Product not found</h1>
      <Link href="/products" className="text-gold underline">Back to products</Link>
    </div>
  );
}
