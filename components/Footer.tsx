import Link from 'next/link';
import SocialLinks from './SocialLinks';

export default function Footer() {
  const links = [
    { href: '/', label: 'Home' },
    { href: '/calendar', label: 'Calendar' },
    { href: '/cookies', label: 'Cookies' },
    { href: '/badges', label: 'Badges' },
    { href: '/switzerland', label: 'Switzerland Trip' },
    { href: '/resources', label: 'Resources' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="mt-12 border-t-4 py-12" style={{ borderColor: '#2D5016', backgroundColor: '#E8F3E8' }}>
      <div className="mx-auto max-w-5xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Troop Info */}
          <div>
            <p className="font-bold text-lg mb-2" style={{ color: "#2D5016" }}>🌼 Troop 21</p>
            <p className="text-sm opacity-75" style={{ color: "#2D5016" }}>Building strong, confident Girl Scouts through friendship, confidence, and service</p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-bold mb-3" style={{ color: "#2D5016" }}>Quick Links</p>
            <ul className="space-y-2 text-sm">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:underline transition-colors"
                    style={{ color: "#2D5016" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Info */}
          <div>
            <p className="font-bold mb-3" style={{ color: "#2D5016" }}>Connect</p>
            <div className="space-y-3">
              <SocialLinks />
              <div>
                <p style={{ color: "#2D5016" }} className="text-sm">📧 info@troop21.org</p>
                <p style={{ color: "#2D5016" }} className="text-sm">🔗 www.girlscouts.org</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t pt-6 text-center text-xs" style={{ borderColor: '#2D5016', color: "#2D5016" }}>
          <p>&copy; 2026 Girl Scout Troop 21. All rights reserved.</p>
          <p className="mt-2 opacity-75">Part of Girl Scouts of the USA</p>
        </div>
      </div>
    </footer>
  );
}
