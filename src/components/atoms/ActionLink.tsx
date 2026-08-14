import type { ReactNode } from 'react';

type ActionLinkProps = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'ghost';
};

export function ActionLink({ href, children, variant = 'primary' }: ActionLinkProps) {
  return (
    <a className={`action-link ${variant}`} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}
