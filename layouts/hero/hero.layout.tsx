import Image from 'next/image';
import { Button } from '../../components';

const Hero = () => {
  return (
    <section className='py-20'>
      <div className='container'>
        <h1 className='text-[80px] leading-tight -tracking-wider pr-40 text-customgray'>
          I build{' '}
          <strong className='font-black relative'>
            applications
            <div className='absolute left-0 bg-green-200 h-6 -z-10 w-full bottom-2' />
          </strong>{' '}
          that are{' '}
          <strong className='font-black relative'>
            user-friendly
            <div className='absolute left-0 bg-blue-200 h-6 -z-10 w-full bottom-2' />
          </strong>
          ,{' '}
          <strong className='font-black relative'>
            simple
            <div className='absolute left-0 bg-pink-200 h-6 -z-10 w-full bottom-2' />
          </strong>{' '}
          and{' '}
          <strong className='font-black relative'>
            easy to use
            <div className='absolute left-0 bg-yellow-200 h-6 -z-10 w-full bottom-2' />
          </strong>
          .
        </h1>
        <div className='grid grid-cols-2 gap-10'>
          <div className='mt-16'>
            <p className='font-medium text-xl leading-relaxed text-customgray-light'>
              I specialize in frontend technologies, and has been working in the
              industry for the past 6+ years. Currently working as Frontend
              Developer at{' '}
              <a
                href='https://swadeshsoftwares.com/'
                rel='noopener noreferrer'
                target='_blank'
                className='underline text-primary'>
                Swadesh Softwares .
              </a>
            </p>
            <div className='flex gap-4 mt-12'>
              <Button variant='solid'>view my work</Button>
              <Button variant='outline'>view my github</Button>
            </div>
          </div>
          <div className='-mt-12'>
            <Image
              src='/assets/images/hero-image.png'
              width='640'
              height='420'
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
