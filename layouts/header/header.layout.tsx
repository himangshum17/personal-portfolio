import Link from 'next/link';

const Header = () => {
  return (
    <header className='py-6'>
      <div className='container flex'>
        <div>HM.</div>
        <nav className='flex-1'>
          <ul className='flex items-center justify-end gap-8'>
            <li>
              <Link href='#'>
                <a>About</a>
              </Link>
            </li>
            <li>toggle theme</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
