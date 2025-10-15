import Link from 'next/link';

interface FooterColumn {
  title: string;
  links: Array<{
    label: string;
    href: string;
  }>;
}

export function FooterLinks() {
  const columns: FooterColumn[] = [
    {
      title: 'Lorem ipsum',
      links: [
        { label: 'Lorem ipsum', href: '#' },
        { label: 'Lorem ipsum', href: '#' },
      ],
    },
    {
      title: 'Lorem ipsum',
      links: [
        { label: 'Lorem ipsum', href: '#' },
        { label: 'Lorem ipsum', href: '#' },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {columns.map((column, index) => (
        <div key={index} className="space-y-4">
          <h3 className="text-lg font-bold text-gray-900">
            {column.title}
          </h3>
          <ul className="space-y-2">
            {column.links.map((link, linkIndex) => (
              <li key={linkIndex}>
                <Link
                  href={link.href}
                  className="text-gray-800 hover:text-gray-900 hover:underline transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}