import Link from "next/link";

export default function OfflinePage() {
  return (
    <div className="mx-auto max-w-xl space-y-4 rounded-2xl border border-gold/20 bg-white p-8 text-center">
      <h1 className="text-3xl font-semibold">You are offline</h1>
      <p className="text-charcoal/70">Momzart is unavailable right now. Please check your internet connection.</p>
      <Link href="/" className="text-gold underline">Retry Home</Link>
    </div>
  );
}
