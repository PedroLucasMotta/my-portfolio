import { technologies } from './TechnologiesAbout'

import '../styles/components/technologiescontainer.sass'

const TechnologiesContainer = () => {
    return <section className='technologies-container'>
        <h2>Tecnologias</h2>
        <div className="technologies-grid">
            {technologies.map((tech) => (
                <div className="technology-card" id={tech.id} key={tech.id}>
                    {tech.icon}
                    <div className="technology-info">
                        <h3>{tech.name}</h3>
                        <p>{tech.about}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
}

export default TechnologiesContainer