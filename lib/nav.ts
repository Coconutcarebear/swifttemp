export const primaryNav = [
  { label: 'Services', href: '/services' },
  { label: 'Commercial', href: '/commercial' },
  { label: 'Maintenance Plans', href: '/maintenance-plans' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

export const footerNav: Record<string, ReadonlyArray<{ label: string; href: string }>> = {
  Services: [
    { label: 'AC repair', href: '/services/ac-repair' },
    { label: 'Heating repair', href: '/services/heating-repair' },
    { label: 'System replacement', href: '/services/system-replacement' },
    { label: 'Ductless mini-splits', href: '/services/ductless-mini-splits' },
  ],
  Commercial: [
    { label: 'Commercial HVAC', href: '/commercial' },
    { label: 'Maintenance contracts', href: '/commercial#contracts' },
    { label: 'Request assessment', href: '/contact?type=commercial' },
  ],
  Company: [
    { label: 'About us', href: '/about' },
    { label: 'Maintenance plans', href: '/maintenance-plans' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy', href: '/legal/privacy' },
  ],
};
