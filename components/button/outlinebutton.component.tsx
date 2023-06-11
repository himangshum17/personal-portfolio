import Link from 'next/link';
import { ReactNode } from 'react';
type OutLineButtonProps = {
  href?: string;
  children: ReactNode;
  target?: boolean;
};
const OutlineButton = ({
  children,
  href = '#',
  target,
}: OutLineButtonProps) => {
  return (
    <Link href={href}>
      <a
        target={target ? '_blank' : undefined}
        rel={target ? 'noopener noreferrer' : undefined}
        className='border border-primary text-primary py-5 px-6 md:px-10 rounded-full inline-block text-xs xl:text-base uppercase font-semibold -tracking-wide'>
        {children}
      </a>
    </Link>
  );
};
export default OutlineButton;
