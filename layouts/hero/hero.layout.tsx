import Image from 'next/image';
import { Button } from '../../components';

const Hero = () => {
  return (
    <section className='py-20'>
      <div className='container'>
        <h1 className='text-[80px] leading-tight -tracking-wider pr-40 text-customgray'>
          I build <strong className='font-black'>applications</strong> that are{' '}
          <strong className='font-black'>user-friendly</strong>,{' '}
          <strong className='font-black'>simple</strong> and{' '}
          <strong className='font-black'>easy to use</strong>.
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
            <Button variant='solid'>solid button</Button>
            <Button variant='outline'>outline button</Button>
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
