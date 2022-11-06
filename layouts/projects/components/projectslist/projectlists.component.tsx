import Projectitem from '../projectitem';

const ProjectsLists = () => {
  return (
    <div className='mt-20 space-y-16'>
      {[1, 2, 3, 4].map((_, index) => {
        return <Projectitem key={index} />;
      })}
    </div>
  );
};
export default ProjectsLists;
