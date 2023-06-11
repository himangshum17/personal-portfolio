import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { Button } from '../../../../components';

type ProjectItemProps = {
  projectImg: string;
  title: string;
  description: string;
  tech: string;
  link?: string;
  role: string;
};

const ProjectItem = ({
  projectImg,
  title,
  description,
  tech,
  link,
  role,
}: ProjectItemProps) => {
  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 gap-10'>
      <div>
        <Image src={projectImg} alt='' width='690' height='540' />
      </div>
      <div className='px-8 xl:px-24 pt-10'>
        <div className='flex w-12 h-12 items-center justify-center bg-primary-light text-primary rounded-full'>
          <ArrowUpRightIcon className='h-6 w-6' />
        </div>
        <h3 className='text-3xl font-semibold -tracking-wide mt-3'>{title}</h3>
        <h4 className='text-base -tracking-wide'>Technology used: {tech}</h4>
        <h5 className='text-base -tracking-wide'>Role: {role}</h5>
        <p className='py-8 text-base -tracking-wide'>{description}</p>
        {!!link ? (
          <Button variant='solid' href={link} target>
            live url
          </Button>
        ) : null}
      </div>
    </div>
  );
};
export default ProjectItem;
