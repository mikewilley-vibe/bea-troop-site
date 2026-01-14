'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const BREADCRUMB_LABELS: Record<string, string> = {
  '': 'Home',
  'calendar': 'Calendar',
  'badges': 'Badges',
  'cookies': 'Cookies',
  'switzerland': 'Switzerland Trip',
  'resources': 'Resources',
  'contact': 'Contact',
  'portal': 'Portal',
};

export default function Breadcrumb() {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);

  if (segments.length === 0) return null;

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    ...segments.map((segment, idx) => ({
      label: BREADCRUMB_LABELS[segment] || segment.charAt(0).toUpperCase() + segment.slice(1),
      href: '/' + segments.slice(0, idx + 1).join('/'),
    })),
  ];

  return (
    <nav className="mb-6 text-sm" aria-label="Breadcrumb">
      <ol className="flex items-center gap-2">
        {breadcrumbs.map((crumb, idx) => (
          <li key={crumb.href} className="flex items-center gap-2">
            {idx > 0 && <span style={{ color: '#2D5016' }}>/</span>}
            {idx === breadcrumbs.length - 1 ? (
              <span style={{ color: '#2D5016' }} className="font-semibold">
                {crumb.label}
              </span>
            ) : (
              <Link
                href={crumb.href}
                className="hover:underline transition-colors"
                style={{ color: '#2D5016' }}
              >
                {crumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
