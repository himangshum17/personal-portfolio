import Link from 'next/link';
import { ReactNode } from 'react';
type SolidButtonProps = {
  children: ReactNode;
};
const SolidButton = ({ children }: SolidButtonProps) => {
  return (
    <Link href='#'>
      <a className='bg-primary text-white py-5 px-10 rounded-full inline-block text-base uppercase font-semibold -tracking-wide'>
        {children}
      </a>
    </Link>
  );
};
export default SolidButton;
