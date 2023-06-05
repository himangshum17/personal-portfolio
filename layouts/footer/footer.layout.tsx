import { getYear } from '../../utils/getYear';

const Footer = () => {
  const fullYear = getYear();
  return (
    <footer className='pt-20' id='footer'>
      <div className='container border-t dark:border-gray-800 py-8'>
        <div className='flex gap-3 flex-wrap justify-between'>
          <p className='text-sm text-gray-600 dark:text-gray-500 font-medium'>
            &copy; Himangshu Mondal &bull; All Rights Reserved &bull; {fullYear}
          </p>
          <a
            href='mailto:mailtoherock@gmail.com'
            className='text-sm text-gray-600 dark:text-gray-500 font-medium'>
            💌 : mailtoherock@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
