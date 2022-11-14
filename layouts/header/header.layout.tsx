import Link from 'next/link';
import { Menu, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import {
  MoonIcon,
  SunIcon,
  Bars3BottomLeftIcon,
  XCircleIcon,
} from '@heroicons/react/24/outline';
import { useTheme } from 'next-themes';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();
  const menuToggleHandler = () => {
    setIsMenuOpen(prev => !prev);
  };
  return (
    <header className='pt-6'>
      <div className='container flex items-center flex-wrap'>
        <div className='flex flex-col'>
          <span className='text-sm'>Himangshu</span>{' '}
          <strong className='uppercase tracking-wider'>Mondal</strong>
        </div>
        <button className='ml-auto block lg:hidden' onClick={menuToggleHandler}>
          {isMenuOpen ? (
            <XCircleIcon className='w-6 h-6' />
          ) : (
            <Bars3BottomLeftIcon className='w-6 h-6' />
          )}
        </button>
        <nav
          className={`${
            isMenuOpen && '!block'
          } ml-auto hidden w-full lg:w-auto mt-4 lg:block lg:mt-0`}>
          <ul className='flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-8'>
            <li>
              <Link href='#'>
                <a className='font-semibold text-sm'>About</a>
              </Link>
            </li>
            <li>
              <Link href='#'>
                <a className='font-semibold text-sm'>Projects</a>
              </Link>
            </li>
            <li>
              <Link href='#'>
                <a className='font-semibold text-sm'>Contact</a>
              </Link>
            </li>
            <li>
              <Menu as='div' className='relative inline-block text-left'>
                <div>
                  <Menu.Button className='align-middle flex items-center space-x-2'>
                    <span className='block lg:hidden text-sm font-semibold'>
                      Switch Theme
                    </span>
                    <MoonIcon className='w-6 h-6' />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter='transition ease-out duration-100'
                  enterFrom='transform opacity-0 scale-95'
                  enterTo='transform opacity-100 scale-100'
                  leave='transition ease-in duration-75'
                  leaveFrom='transform opacity-100 scale-100'
                  leaveTo='transform opacity-0 scale-95'>
                  <Menu.Items className='absolute right-0 mt-2 w-36 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                    <div className='px-1 py-1 '>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={() => setTheme('dark')}
                            className={`${
                              active ? 'bg-primary text-white' : 'text-gray-900'
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm font-semibold`}>
                            {active ? (
                              <MoonIcon className='mr-2 h-5 w-5' />
                            ) : (
                              <MoonIcon className='mr-2 h-5 w-5' />
                            )}
                            Dark
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active ? 'bg-primary text-white' : 'text-gray-900'
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm font-semibold`}>
                            {active ? (
                              <SunIcon className='mr-2 h-5 w-5' />
                            ) : (
                              <SunIcon className='mr-2 h-5 w-5' />
                            )}
                            Light
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
