import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { Button } from '../../../../components';

const ProjectItem = () => {
  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 gap-10'>
      <div>
        <Image
          src='/assets/images/project-img-placeholder.png'
          alt=''
          width='690'
          height='540'
        />
      </div>
      <div className='px-8 xl:px-24 pt-10'>
        <div className='flex w-12 h-12 items-center justify-center bg-primary-light text-primary rounded-full'>
          <ArrowUpRightIcon className='h-6 w-6' />
        </div>
        <h3 className='text-3xl font-semibold -tracking-wide mt-3'>
          Title of the project
        </h3>
        <h4 className='text-base font-semibold -tracking-wide'>
          Technology used: React, Tailwind css,
        </h4>
        <p className='py-8 text-base font-semibold -tracking-wide'>
          Put a bird on it taxidermy glossier, leggings typewriter Brooklyn
          tilde shabby chic helvetica. Literally affogato selfies offal tousled
          brunch freegan kale chips skateboard four loko mumblecore mukbang
        </p>
        <Button variant='solid'>view details</Button>
      </div>
    </div>
  );
};
export default ProjectItem;
