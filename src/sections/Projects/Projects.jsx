import styles from './ProjectsStyles.module.css';
import oneconnect from '../../assets/oneconnect.png'
import bikreta from '../../assets/bikreta.jpg'
import transitpro from '../../assets/transitpro.jpeg'
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={oneconnect}
          link="https://github.com/sabbir-063/one_connect_app"
          h3="OneConnect"
          p="Android donation App"
        />
        <ProjectCard
          src={bikreta}
          link="https://github.com/sabbir-063/Bikreta_client"
          h3="Bikreta"
          p="Online E-commerce website"
        />
        <ProjectCard
          src={transitpro}
          link="https://github.com/marzun9620/Transit-Pro"
          h3="TransitPro"
          p="A bus management system"
        />
      </div>
    </section>
  );
}

export default Projects;
