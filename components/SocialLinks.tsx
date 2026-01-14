import { SOCIAL_LINKS } from '@/lib/seo';

export default function SocialLinks() {
  const links = [
    { icon: '📘', label: 'Facebook', url: SOCIAL_LINKS.facebook },
    { icon: '📷', label: 'Instagram', url: SOCIAL_LINKS.instagram },
    { icon: '𝕏', label: 'Twitter', url: SOCIAL_LINKS.twitter },
  ];

  return (
    <div className="flex gap-4 items-center">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
          title={link.label}
          aria-label={link.label}
        >
          <span className="text-2xl">{link.icon}</span>
        </a>
      ))}
    </div>
  );
}
