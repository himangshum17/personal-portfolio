import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Himangshu Mondal - Frontend Developer - Portfolio Website</title>
        <meta
          name='description'
          content='Himangshu Mondal - Frontend Developer - Portfolio Website'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section className='h-screen grid place-content-center bg-teal-50'>
        <div className='prose prose-a:text-teal-600 hover:prose-a:text-teal-700'>
          <Image
            width='80'
            height='80'
            src='/assets/images/profile-image.png'
            alt='Himangshu Mondal Profile Image'
          />
          <h1>
            Himangshu Mondal&apos;s portfolio website is under development, will
            be releasing soon.
          </h1>
          <p>
            For the time being, Please have a look at Himangshu&apos;{' '}
            <a
              href='https://www.linkedin.com/in/himangshum17/'
              target='_blank'
              rel='noopener noreferrer'>
              Linkedin
            </a>{' '}
            or{' '}
            <a
              href='https://github.com/himangshum17'
              target='_blank'
              rel='noopener noreferrer'>
              Github
            </a>{' '}
            accounts for more information.
          </p>
          <p>Thanks and Regards</p>
        </div>
      </section>
    </>
  );
};

export default Home;
