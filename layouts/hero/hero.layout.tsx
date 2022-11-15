import Image from 'next/image';
import { Button } from '../../components';

const Hero = () => {
  return (
    <section className='py-20'>
      <div className='container'>
        <div className='grid gap-10 grid-cols-1 xl:grid-cols-12'>
          <div className='col-span-1 xl:col-span-7'>
            <div className='prose xl:prose-xl prose-slate dark:prose-invert mt-10'>
              <h1>
                I build applications that are user-friendly, simple and easy to
                use.
              </h1>
              <p>
                I specialize in frontend technologies, and has been working in
                the industry for the past 6+ years. Currently working as
                Frontend Developer at{' '}
                <a
                  href='https://swadeshsoftwares.com/'
                  rel='noopener noreferrer'
                  target='_blank'
                  className='underline text-primary'>
                  Swadesh Softwares .
                </a>
              </p>
            </div>
            <div className='flex gap-4 mt-14'>
              <Button variant='solid'>view my work</Button>
              <Button variant='outline'>view my github</Button>
            </div>
          </div>
          <div className='xl:-mt-12 col-span-1 xl:col-span-5 flex justify-center'>
            <Image
              src='/assets/images/hero-image.png'
              width='545'
              height='720'
              objectFit='contain'
              alt=''
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
