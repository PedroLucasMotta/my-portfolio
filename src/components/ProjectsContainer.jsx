import { projects } from './ProjectsAbout'

import '../styles/components/projectscontainer.sass'

const ProjectsContainer = () => {
    return <section className="projects-container">
        <h2>Projetos</h2>
        <div className='projects-grid'>
            {projects.map((project) => (
                <div className="project-card" id={project.id} key={project.id}>
                    <h3>{project.name}</h3>
                    <p>{project.about}</p>
                    <img src={project.imgone} alt="Imagem do projeto" />
                    <img src={project.imgtwo} alt="Imagem do projeto" />
                    <a href={project.link} className='btn' target="_blank">Visualize o projeto</a>
                </div>
            ))}
        </div>
    </section>
}

export default ProjectsContainer