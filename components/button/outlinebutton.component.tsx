import Link from 'next/link';
import { ReactNode } from 'react';
type OutLineButtonProps = {
  children: ReactNode;
};
const OutlineButton = ({ children }: OutLineButtonProps) => {
  return (
    <Link href='#'>
      <a className='border border-primary text-primary py-5 px-10 rounded-full inline-block text-base uppercase font-semibold -tracking-wide'>
        {children}
      </a>
    </Link>
  );
};
export default OutlineButton;
