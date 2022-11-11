import { ProjectsLists } from './components';

const Projects = () => {
  return (
    <section>
      <div className='container'>
        <h2 className='text-3xl xl:text-5xl font-semibold -tracking-wider max-w-3xl leading-snug'>
          Projects that i have been working for the past couple of years
        </h2>
        <ProjectsLists />
      </div>
    </section>
  );
};
export default Projects;
