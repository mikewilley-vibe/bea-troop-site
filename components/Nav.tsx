import Link from "next/link";

export default function Nav() {
  return (
    <nav className="text-white shadow-md sticky top-0 z-50" style={{ backgroundColor: '#2D5016' }}>
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <span className="text-xl font-bold">🌼 Troop 21</span>
        <div className="space-x-6 text-sm font-medium">
          <Link href="/" className="hover:text-green-100 transition">Home</Link>
          <Link href="/calendar" className="hover:text-green-100 transition">Calendar</Link>
          <Link href="/badges" className="hover:text-green-100 transition">Badges</Link>
          <Link href="/cookies" className="hover:text-green-100 transition">Cookies</Link>
          <Link href="/switzerland" className="hover:text-green-100 transition">Switzerland</Link>
          <Link href="/resources" className="hover:text-green-100 transition">Resources</Link>
          <Link href="/portal" className="hover:text-green-100 transition">Portal</Link>
        </div>
      </div>
    </nav>
  );
}