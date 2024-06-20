import styles from './ProjectsStyles.module.css';
import piano from '../../assets/piano.jpeg';
import todo from '../../assets/todo.jpeg';
import whatsit from '../../assets/whatsit.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={piano}
          link="https://github.com/samreet-k/Pianotese"
          h3="Pianotese"
          p="Playable Piano"
        />
        <ProjectCard
          src={todo}
          link="https://github.com/samreet-k/Toodom"
          h3="Toodom"
          p="To-do work manager"
        />
        <ProjectCard
          src={whatsit}
          link="https://github.com/samreet-k/WhatsIT"
          h3="WhatsIT"
          p="Search Engine"
        />
      </div>
    </section>
  );
}

export default Projects;