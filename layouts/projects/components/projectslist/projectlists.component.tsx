import Projectitem from '../projectitem';
import { projectsData } from '../../../../data/projectsData';

const ProjectsLists = () => {
  return (
    <div className='mt-20 space-y-16'>
      {projectsData.map(item => {
        return <Projectitem key={item.id} {...item} />;
      })}
    </div>
  );
};
export default ProjectsLists;
